import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import AnnoncePage from "./pages/AnnoncePage.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* changement de la redirection au lancement de l'application */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="projet-8" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path={`/projet-8/Annonces/:id`} element={<AnnoncePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
