import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { StaffUpcomingEvents } from "../events/StaffUpcomingEvents";
import { AboutUs } from "../events/AboutUs";
import { AddEvent } from "../events/AddEventForm";
import { EditEventForm } from "../events/EditEventForm";

export const StaffViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="/staffUpcomingEvents/:attractionsId/edit" element={<EditEventForm />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="StaffUpcomingEvents" element={<StaffUpcomingEvents />} />
        <Route path="staffUpcomingEvents/AddEvent" element={<AddEvent />} />
      </Route>
    </Routes>
  );
};
