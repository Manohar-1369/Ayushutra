import React from "react";
import { WellnessButton } from "../src/Pages/ui/wellness-button.jsx";
import { useNavigate } from "react-router-dom";

export default function Navbar1() {
    const navigate=useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 shadow-md border-b border-wellness-green/20 backdrop-blur transition-all duration-300">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
            className="flex items-center justify-center w-12 h-12 rounded-full"
          >
            <img
              src="images/logo.png"
              className="object-contain transition-transform duration-300 hover:scale-140"
              alt="logo"
            />
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "700",
                fontSize: "1.8rem",
                background: "linear-gradient(90deg, #28a745, #0d6efd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px",
                transition: "all 0.4s ease",
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
              className="hover:tracking-wider hover:scale-105 transition-transform duration-300"
            >
              AYURSUTRA
            </h1>
            <p className="text-xs text-wellness-green font-medium">
              Wellness Management
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Features", "Benefits", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className=" relative text-base font-medium text-wellness-green px-4 py-2 rounded-full transition-all duration-300 
              hover:tracking-wider hover:scale-105 transition-transform duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <WellnessButton variant="healing" asChild>
            <a href="/portal">Sign In</a>
          </WellnessButton>
        </div>
      </div>
    </header>
  );
}
