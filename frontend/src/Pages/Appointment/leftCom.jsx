import React from 'react'

export default function LeftHalf() {

    const pastAppointments = [
      {
        id: 1,
        doctor: "Dr. A Sharma",
        dept: "Panchakarma",
        date: "12 Sept 2025",
        time: "10:30 AM",
      },
      {
        id: 2,
        doctor: "Dr. B Rao",
        dept: "Naturopathy",
        date: "5 Sept 2025",
        time: "2:00 PM",
      },
      {
        id: 3,
        doctor: "Dr. C Patel",
        dept: "Ayurvedic Medicine",
        date: "28 Aug 2025",
        time: "11:15 AM",
      },
    ];




  return (
    <div className="continer col-8 mt-1 mb-2 p-2 ">
      <div className="row">
        <div
          style={{
            background: "linear-gradient(135deg, #f5f9f6, #e6f2ed)",
            height: "100vh",
            flex: 1,
            overflowY: "auto",
            padding: "2rem",
            borderRadius:"10px",
          }}
        >
          <h3 className="mb-4 fw-bold text-success">Past Appointments</h3>

          {pastAppointments.map((appt) => (
            <div
              key={appt.id}
              className="shadow-sm p-3 mb-3 rounded"
              style={{
                backgroundColor: "white",
                transition: "transform 0.2s, boxShadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
            >
              <h5 className="mb-1 text-primary">{appt.doctor}</h5>
              <p className="mb-1 text-muted">{appt.dept}</p>
              <small className="text-secondary">
                {appt.date} at {appt.time}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
