import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const StaffNavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/staffUpcomingEvents">
          Upcoming Events
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/SavedEvents">
          Saved Events
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/AboutUs">
          About Us
        </Link>
      </li>
      {localStorage.getItem("project_user") ? (
        <li className="navbar__item navbar__logout">
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
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
