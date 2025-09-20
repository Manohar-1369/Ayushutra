import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";

import "./App.css"
import "./index.css"
import Portal from "./Pages/Authentication/Portal";
import WebsitePage from "./WebsiteLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<WebsitePage/>}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portal" element={<Portal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
