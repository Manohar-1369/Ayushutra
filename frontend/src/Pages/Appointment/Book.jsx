import React, { useState } from "react";

export default function Book() {
  const treatments = [
    "Panchakarma",
    "Abhyanga Massage",
    "Shirodhara",
    "Nasyam",
    "Herbal Steam Therapy",
    "Ayurvedic Medicine",
    "Yoga Therapy",
    "Meditation Session",
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. A Sharma",
      specialization: "Panchakarma",
      img: "/images/doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr. B Rao",
      specialization: "Yoga Therapy",
      img: "/images/doctor2.jpg",
    },
    {
      id: 3,
      name: "Dr. C Patel",
      specialization: "Ayurvedic Medicine",
      img: "/images/doctor3.jpg",
    },
    {
      id: 4,
      name: "Dr. D Kapoor",
      specialization: "Shirodhara",
      img: "/images/doctor4.jpg",
    },
    {
      id: 5,
      name: "Dr. E Verma",
      specialization: "Abhyanga Massage",
      img: "/images/doctor5.jpg",
    },
    {
      id: 6,
      name: "Dr. F Mehta",
      specialization: "Nasyam",
      img: "/images/doctor6.jpg",
    },
    {
      id: 7,
      name: "Dr. G Reddy",
      specialization: "Meditation Session",
      img: "/images/doctor7.jpg",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBooking = () => {
    if (!selectedTreatment) {
      alert("Please select a treatment before booking!");
      return;
    }
    alert(`Appointment booked for ${selectedTreatment}`);
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      {" "}
      {/* Full width container */}
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#f5f9f6",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%", // Stretch to full width
        }}
      >
        <h2 className="text-success mb-4 text-center">Book Your Appointment</h2>

        {/* Search bar for doctors */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Dropdown for treatment */}
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedTreatment}
            onChange={(e) => setSelectedTreatment(e.target.value)}
          >
            <option value="">Select a treatment</option>
            {treatments.map((treatment, idx) => (
              <option key={idx} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>

        {/* Book button
        <div className="d-grid mb-4">
          <button className="btn btn-success btn-lg" onClick={handleBooking}>
            Book Appointment
          </button>
        </div> */}

        {/* Doctors Section */}
        <h4 className="text-success mb-3">Our Doctors</h4>
        <div className="row row-cols-6 g-4">
          {" "}
          {/* 6 per row, smaller gap */}
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="col">
              <div className="card shadow-sm h-100">
                <img
                  src={doc.img}
                  className="card-img-top"
                  alt={doc.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{doc.name}</h6>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {doc.specialization}
                  </p>
                  <button className="btn btn-success mt-auto btn-sm">
                    View Slots 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
