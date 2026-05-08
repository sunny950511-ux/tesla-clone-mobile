import React from 'react';
import './App.css';
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import ExperienceSection from './components/ExperienceSection';
import VideoSection from './components/VideoSection';
import ChargingSection from './components/ChargingSection';
import EnergySection from './components/EnergySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <main>
        <CardSection />
        <ExperienceSection />
        <VideoSection />
        <ChargingSection />
        <EnergySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
