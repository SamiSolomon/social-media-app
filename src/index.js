import React from "react";
import { createRoot } from "react-dom/client"
import "./input.css"
import App from "./App.js"


const el = document.getElementById('root')
const root = createRoot(el)

root.render(<App />)