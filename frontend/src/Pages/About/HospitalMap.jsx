import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function getHospitalIcon(color = "red") {
  return L.divIcon({
    className: "",
    html: `
      <div style="width:36px; height:36px; display:flex; align-items:center; justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="28" height="28">
          <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
        </svg>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
}


// Component to auto-fit hospitals
function FitToHospitals({ hospitals }) {
  const map = useMap();

  useEffect(() => {
    if (hospitals.length > 0) {
      const bounds = L.latLngBounds(hospitals.map((h) => [h.lat, h.lng]));
      map.fitBounds(bounds, { padding: [50, 50] }); // adds padding around markers
    }
  }, [hospitals, map]);

  return null;
}

export default function HospitalMap() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch hospitals (example fallback)
    fetch("/api/hospitals")
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch(() =>
        setHospitals([
          {
            id: 1,
            name: "City Hospital",
            lat: 17.4153,
            lng: 78.4128,
            address: "123 Main St",
            phone: "+91-12345-67890",
          },
        ])
      );
  }, []);

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <MapContainer
        center={[19.076, 72.8777]} // default (ignored once hospitals load)
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {hospitals.map((h, idx) => {
          const colors = ["red", "blue", "green", "orange", "purple"];
          return (
            <Marker
              key={h.id}
              position={[h.lat, h.lng]}
              icon={getHospitalIcon(colors[idx % colors.length])}
            >
              <Popup>
                <strong>{h.name}</strong>
                <br />
                {h.address}
                <br />
                <a href={`tel:${h.phone}`} style={{ color: "blue" }}>
                  Call
                </a>
              </Popup>
            </Marker>
          );
        })}

        {/* Auto zoom to markers */}
        <FitToHospitals hospitals={hospitals} />
      </MapContainer>
    </div>
  );
}
