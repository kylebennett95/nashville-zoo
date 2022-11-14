import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const [deletedSavedEvents, setdeletedSavedEvents] = useState([]);

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  var fetchData = () => {
    fetch(`http://localhost:8088/patronsAttractions?_expand=attractions`)
      .then((response) => response.json())
      .then((savedEventArray) => {
        setSavedEvents(savedEventArray.filter((obj) => obj.userId == projectUserObject.id));
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8088/patronsAttractions?_expand=attractions`)
      .then((response) => response.json())
      .then((savedEventArray) => {
        setSavedEvents(savedEventArray.filter((obj) => obj.userId == projectUserObject.id));
      });
  }, []);

  const unsaveButtonClick = (id) => {
    return fetch(`http://localhost:8088/patronsAttractions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });
  };

  return (
    <>
      <h2>Saved Events</h2>

      <article className="SavedEvents">
        {savedEvents.map((savedEvent) => (
          <section>
            <button onClick={() => unsaveButtonClick(savedEvent.id)}>Un-Save</button>
            <header>{savedEvent.attractions.attractionName}</header>
            <p>{savedEvent.attractions.description}</p>
            <p>Coming to You on {savedEvent.attractions.date}</p>
          </section>
        ))}
      </article>
    </>
  );
};
