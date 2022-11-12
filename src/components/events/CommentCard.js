import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CommentCard = () => {
    const [comments, setComments] = useState({
        commentDescription: "",
        attractionsId: 0,
        userId: ""
    })

    const navigate = useNavigate()
    const [userId, setUserId] = useState([])

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);

    const handleSaveButtonClick = (e) => {
        e.preventDefault()

        const commentToSendToAPI = {
            attractionsId: parseInt(comments.attractionsId),
            commentDescription: comments.commentDescription,
            userId: projectUserObject.id
        }
    
        return fetch(`http://localhost:8088/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentToSendToAPI)
            
        })
        .then(response => response.json())
        .then(() => {
            navigate("/PatronUpcomingEvents")
        })

    }
return (
    <>
<fieldset>
<div className="form-group">
  <label htmlFor="text">Leave a comment:</label>
  <input
    required
    autoFocus
    type="text"
    className="form-control"
    placeholder="Enter comment here"
    value={comments.commentDescription}
    onChange={(evt) => {
      const copy = { ...comments };
      copy.commentDescription = evt.target.value;
      setComments(copy);
    }}
  />
</div>
</fieldset>
<button 
        onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}}
        className="btn btn-primary">
            Submit
        </button>
</>
);
}