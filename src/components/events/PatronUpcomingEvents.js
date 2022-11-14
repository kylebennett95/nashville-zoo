import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export const PatronUpcomingEvents = () => {
  const [events, setEvents] = useState([]);


  const navigate = useNavigate();

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  useEffect(() => {
    fetch(`http://localhost:8088/attractions`)
      .then((response) => response.json())
      .then((eventArray) => {
        setEvents(eventArray);
      });
  }, []);

  return (
    <>
      <h2>Upcoming Events</h2>

      <article className="events">
        {events.map((event) => {
          return (
            // <section className="event" key={`event--${event.id}`}>
            //   <button>Save</button>
            //   <header>{event.attractionName}</header>
            //   <div>{event.description}</div>
              <CommentCard event={event} attractionsId={event.id}/>
            //   <div>Coming to You on {event.date}</div>
            // </section>
          );
        })}
      </article>
    </>
  );
};
