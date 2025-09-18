import React from 'react'
import LeftHalf from './leftCom';
import RightHalf from './rightCom';


export default function AppointmentPage() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <LeftHalf />
        <RightHalf />
      </div>
    </>
  );
}
