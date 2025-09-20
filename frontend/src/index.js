import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";

import "./App.css";
import "./index.css";
import Portal from "./Pages/Authentication/Portal";
import WebsitePage from "./WebsiteLayout";
import PatientLayout from "./Pages/PatientPage/PatientLayout";
import Dashboard from "./Pages/PatientPage/components/Dashboard";
import Exercises from "./Pages/PatientPage/components/Exercise";
import Progress from "./Pages/PatientPage/components/Progress";
import Schedule from "./Pages/PatientPage/components/Sessions";
import Therapies from "./Pages/PatientPage/components/Therapies";
import PatientDashboard from "./Pages/PatientPage/components/PatientDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<WebsitePage />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portal" element={<Portal />} />
      </Route>

      <Route path="/patient_dashboard" element={<PatientDashboard />} />
    </Routes>
  </BrowserRouter>
);
