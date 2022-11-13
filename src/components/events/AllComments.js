import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export const AllComments = () => {
  const navigate = useNavigate();

  const [allComments, setAllComments] = useState([]);
  const [AttractionName, setAttractionName] = useState("");
  //   const localProjectUser = localStorage.getItem("project_user");
  //   const projectUserObject = JSON.parse(localProjectUser);

  const { attractionsId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8088/comments?_expand=attractions&_expand=users`)
      .then((response) => response.json())
      .then((data) => {
        setAllComments(data.filter((obj) => obj.attractions.id == attractionsId));
        if (data.filter((obj) => obj.attractions.id == attractionsId).length > 0) {
          setAttractionName(data.filter((obj) => obj.attractions.id == attractionsId)[0].attractions.attractionName);
        }
      });
  }, []);

  return (
    <>
      <h2>{AttractionName}</h2>
      {allComments.map((comment) => (
        <p>
          {comment.users.name.charAt(0)} : {comment.commentDescription}
        </p>
      ))}

      {allComments.length < 1 && <p>No Comments on this Attraction</p>}
    </>
  );
};
