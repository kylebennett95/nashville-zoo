import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const AddEvent = () => {
    const [event, setEvent] = useState({
        attractionName: "",
        description: "",
        date: "",
        isSaved: false
    })

    const navigate = useNavigate()

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const eventToSendToAPI = {
            attractionName: event.attractionName,
            description: event.description,
            date: event.date,
            isSaved: event.isSaved
        }

return fetch(`http://localhost:8088/attractions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventToSendToAPI)
        
    })
    .then(response => response.json())
    .then(() => {
        navigate("/StaffUpcomingEvents")
    })
}

return (
    <form className="eventForm">
        <h2 className="eventForm__title">Add Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Brief description of problem"
                    value={event.description}
                    onChange={
                        (evt) => {
                            const copy = {...event}
                            copy.description = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="attractionName">Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Add event name"
                    value={event.attractionName}
                    onChange={
                        (evt) => {
                            const copy = {...event}
                            copy.attractionName = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    required autoFocus
                    type="date"
                    className="form-control"
                    value={event.date}
                    onChange={
                        (evt) => {
                            const copy = {...event}
                            copy.date = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
       
        <button 
        onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}}
        className="btn btn-primary">
            Add Event
        </button>
    </form>
)
}


