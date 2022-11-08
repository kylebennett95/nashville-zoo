import React from "react";
import { PatronNavBar } from "../nav/PatronNavBar";
import { StaffNavBar } from "../nav/StaffNavBar";

export const NavBar = () => {
  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  if (projectUserObject.staff) {
    return <StaffNavBar />;
  } else {
    return <PatronNavBar />;
  }
};
