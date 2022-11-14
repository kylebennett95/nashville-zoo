import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const PatronNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navImgContainer">
      <div className="navbar__item active">
        <Link className="navbar__link" to="/PatronUpcomingEvents">
          Upcoming Events
        </Link>
      </div>
      <div className="navbar__item active">
        <Link className="navbar__link" to="/SavedEvents">
          Saved Events
        </Link>
      </div>
      <div className="navbar__item active">
        <Link className="navbar__link" to="/AboutUs">
          About Us
        </Link>
      </div>
      {localStorage.getItem("project_user") ? (
        <div className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("project_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        ""
      )}
      <div>
        <img src={require("./Logo.png")} alt="Logo" className="Logo" />
      </div>
    </div>
  );
};
