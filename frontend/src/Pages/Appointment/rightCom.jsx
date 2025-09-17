import React from 'react'

export default function () {
  return (
    <div className="container col-3">
      <div className="row">
        <div
          className="d-flex flex-column align-items-center p-4 mt-2 mb-2"
          style={{
            width: "100%",
            minHeight: "100vh",
            background: "linear-gradient(180deg, #f5f9f6, #e6f2ed)",
            borderRight: "2px solid #c9e3d1",
            borderRadius:"10px"
          }}
        >
          {/* Title */}
          <h3 className="mb-4 text-success fw-bold">Ayushutra Care</h3>

          {/* Ayurvedic Images */}
          <div className="mb-4 w-100 text-center">
            <img
              src="/images/herbs.jpg"
              alt="Ayurvedic Herbs"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "120px", objectFit: "contain" }}
            />
            <img
              src="/images/spa.jpg"
              alt="Spa Therapy"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "120px", objectFit: "contain" }}
            />
            <img
              src="/images/yoga.jpg"
              alt="Yoga"
              className="img-fluid rounded"
              style={{ maxHeight: "120px", objectFit: "contain" }}
            />
          </div>

          {/* Appointment Button */}
          <button
            className="btn btn-success btn-lg w-100 fw-semibold shadow"
            style={{ borderRadius: "12px" }}
          >
            Book Appointment
          </button>

          {/* Extra space filler */}
          <div className="flex-grow-1"></div>

          {/* Footer Tagline */}
          <p className="text-muted small mt-3 text-center">
            Healing with Ayurveda 🌿
          </p>
        </div>
      </div>
    </div>
  );
}
