import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export const CommentCard = ({ attractionsId }) => {
  const [comments, setComments] = useState({
    commentDescription: "",
    attractionsId: 0,
    userId: 0,
  });

  const [newComment, setNewComment] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8088/comments?_expand=attractions`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.filter((obj) => obj.attractions.id == attractionsId));
      });
  }, [attractionsId]);

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    const commentToSendToAPI = {
      attractionsId: parseInt(attractionsId),
      commentDescription: newComment,
      userId: projectUserObject.id,
    };

    return fetch(`http://localhost:8088/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/PatronUpcomingEvents");
      });
  };
  return (
    <>
      <fieldset>
        <div className="form-group">
          <label htmlFor="text">Leave a comment:</label>
          <input required autoFocus type="text" className="form-control" placeholder="Enter comment here" value={comments.commentDescription} onChange={(e) => setNewComment(e.target.value)} />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => {
          handleSaveButtonClick(clickEvent);
        }}
        className="btn btn-primary"
      >
        Submit
      </button>
      <button className="btn btn-primary">
        <Link to={`/AllComments/${attractionsId}`}>All Comments</Link>
      </button>
    </>
  );
};
