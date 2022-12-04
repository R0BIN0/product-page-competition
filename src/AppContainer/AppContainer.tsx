import React from "react";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../app/App";

export default function AppContainer() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
