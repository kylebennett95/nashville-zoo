import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState([])

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  useEffect(() => {
    fetch(`http://localhost:8088/attractions`)
      .then((response) => response.json())
      .then((eventArray) => {
        setSavedEvents(eventArray);
      });
  }, []);

  return (
    <>
      <h2>Saved Events</h2>

      <article className="SavedEvents">
        <p>data to come</p>
      </article>
    </>
  );
};
