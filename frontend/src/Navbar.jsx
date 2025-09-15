import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    backgroundColor: "#0d6efd", // Professional healthcare blue
    color: "white",
    transition: "0.3s ease",
    textDecoration: "none",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
  };

  const inactiveStyle = {
    color: "#212529", // dark text
    textDecoration: "none",
    transition: "0.3s ease",
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="images/logo.png"
            className="img-fluid"
            style={{ maxWidth: "140px", width: "80px" }}
            alt="logo"
          />
          <h2
            className="m-0"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              fontSize: "1.8rem",
              background: "linear-gradient(90deg, #28a745, #0d6efd)", // green → blue
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "1px",
              transition: "all 0.4s ease",
              textShadow: "0px 2px 4px rgba(0,0,0,0.2)", // makes it readable always
              cursor: "pointer",
            }}
            
          >
            Ayushutra
          </h2>
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className="px-3 py-2 mx-1 rounded-pill"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/appointment"
                className="px-3 py-2 mx-1 rounded-pill"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Appointment
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/success"
                className="px-3 py-2 mx-1 rounded-pill"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Success Story
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className="px-3 py-2 mx-1 rounded-pill"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Our Team
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
