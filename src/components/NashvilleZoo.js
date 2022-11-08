import React from "react";
import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";

export const NashvilleZoo = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <NavBar />
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
