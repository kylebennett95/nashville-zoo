import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PatronUpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [comments, setComments] = useState({
    commentDescription: "",

  })

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  useEffect(() => {
    fetch(`http://localhost:8088/comments?_expand=attractions`)
      .then((response) => response.json())
      .then((eventArray) => {
        setEvents(eventArray);
      });
  }, []);

  const handleSaveButtonClick = (e) => {
    e.preventDefault()

    return fetch(`http://localhost:8088/comments/${events.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comments)
    })
        .then(response => response.json())
        .then(() => {
            navigate("/StaffUpcomingEvents")
        })
}

  return (
    <>
      <h2>Upcoming Events</h2>

      <article className="events">
        {events.map((event) => {
          return (
            <section className="event" key={`event--${event.id}`}>
              <button>Save</button>
              <header>{event.attractions.attractionName}</header>
              <div>{event.attractions.description}</div>
              <fieldset>
            <div className="form-group">
                <label htmlFor="text">Leave a comment:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    value="Enter comment here"
                    onChange={
                        (evt) => {
                            const copy = {...event}
                            copy.commentDescription = evt.target.value
                            setEvents(copy)
                        }
                    } />
            </div>
            </fieldset> 
            <button>Submit</button>           
              <div>Coming to You on {event.date}</div>
            </section>
          );
        })}
      </article>
      </>     
  )
};
