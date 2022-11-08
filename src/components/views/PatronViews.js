import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"

export const PatronViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Patron Views</h1>
                    <div>Upcoming Events</div>

                    <Outlet />
                </>
            }>
            </Route>
        </Routes>
    )
}