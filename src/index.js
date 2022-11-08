import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { NashvilleZoo } from "./components/NashvilleZoo"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <NashvilleZoo/>
    </BrowserRouter>
)
