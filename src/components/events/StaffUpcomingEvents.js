import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./StaffUpcomingEvents.css";

export const StaffUpcomingEvents = () => {
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
    <div class="container">
      <div className="header">
        <h2>Upcoming Events</h2>
        <button onClick={() => navigate("/staffUpcomingEvents/AddEvent")} className="addEventButton">Add Event</button>
      </div>
      <article className="events">
        {events.map((event) => {
          return (
            <section className="event" key={`event--${event.id}`}>
              <div className="eventHeader">
                <div className="editButton">
                  <Link to={`/staffUpcomingEvents/${event.id}/edit`} className="link">
                    Edit
                  </Link>
                </div>
                <header className='headerText'>{event.attractionName}</header>
              </div>
              <div className="eventBody">
                <div>{event.description}</div>
              </div>
              <div className="eventFooter">
                <div>Coming to You on {event.date}</div>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
