import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";
import AboutPage from "./Pages/About/AboutPage";
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import SuccessPage from "./Pages/Success/SuccessPage";
import OurTeamPage from "./Pages/OurTeam/OurTeamPage";
import Book from "./Pages/Appointment/Book";
import Navbar1 from "./Navbar1";
import Footer1 from "./footer1";
import "./App.css"
import "./index.css"
import Portal from "./Pages/Authentication/Portal";
import PatientDashboard from "./Pages/PatientPage/patientDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar1 />
    <Routes>
      <Route path="/" element={<AboutPage/>} />
      <Route path="/appointment" element={<AppointmentPage/>}/>
      <Route path="/success" element={<SuccessPage/>}/>
      <Route path="/team" element={<OurTeamPage/>}/>
      <Route path="/bookAppointment" element={<Book/>}/>
      <Route path="/portal" element={<Portal/>}/>
      <Route path="/patientPortel" element={<PatientDashboard/>}/>
    </Routes>
    <Footer1 />
  </BrowserRouter>
);
