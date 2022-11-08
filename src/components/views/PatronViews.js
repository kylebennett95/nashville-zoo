import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { PatronUpcomingEvents } from "../events/PatronUpcomingEvents";
import { AboutUs } from "../events/AboutUs";
import { SavedEvents } from "../events/SavedEvents";

export const PatronViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Patron Views</h1>
            <div>Upcoming Events</div>

            <Outlet />
          </>
        }
      >
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="PatronUpcomingEvents" element={<PatronUpcomingEvents />} />
        <Route path="SavedEvents" element={<SavedEvents />} />
      </Route>
    </Routes>
  );
};