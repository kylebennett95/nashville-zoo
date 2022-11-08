import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"

export const StaffViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Staff Views</h1>
                    <div>Upcoming Events</div>

                    <Outlet />
                </>
            }>
            </Route>
        </Routes>
    )
}