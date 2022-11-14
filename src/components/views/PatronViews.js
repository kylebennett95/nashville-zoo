import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { PatronUpcomingEvents } from "../events/PatronUpcomingEvents";
import { AboutUs } from "../events/AboutUs";
import { SavedEvents } from "../events/SavedEvents";
import { AllComments } from "../events/AllComments";

export const PatronViews = () => {
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
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="PatronUpcomingEvents" element={<PatronUpcomingEvents />} />
        <Route path="SavedEvents" element={<SavedEvents />} />
        <Route path="/AllComments/:attractionsId" element={<AllComments />} />
      </Route>
    </Routes>
  );
};
