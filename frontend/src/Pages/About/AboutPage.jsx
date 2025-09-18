import React from 'react'
import HospitalMap from './HospitalMap';
import AboutSection from './AboutSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutSection/>
      <HospitalMap />
    </div>
  );
}
