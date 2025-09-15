import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";
import AboutPage from "./Pages/About/AboutPage";
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import SuccessPage from "./Pages/Success/SuccessPage";
import OurTeamPage from "./Pages/OurTeam/OurTeamPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<AboutPage/>} />
      <Route path="/appointment" element={<AppointmentPage/>}/>
      <Route path="/success" element={<SuccessPage/>}/>
      <Route path="/team" element={<OurTeamPage/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
