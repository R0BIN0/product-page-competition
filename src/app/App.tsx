// Global
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Product from "../Layout/Product";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Product />} />
                <Route path="/:id" element={<Product />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
