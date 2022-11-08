import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { StaffUpcomingEvents } from "../events/StaffUpcomingEvents";
import { AboutUs } from "../events/AboutUs";
import { SavedEvents } from "../events/SavedEvents";

export const StaffViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Staff Views</h1>
            <div>Upcoming Events</div>

            <Outlet />
          </>
        }
      >
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="StaffUpcomingEvents" element={<StaffUpcomingEvents />} />
        <Route path="SavedEvents" element={<SavedEvents />} />
      </Route>
    </Routes>
  );
};
