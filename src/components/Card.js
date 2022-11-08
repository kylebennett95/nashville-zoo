import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="main">
      <h3>{props.header}</h3>
      <p>{props.description}</p>
      <p>{props.footer}</p>
    </div>
  );
};
