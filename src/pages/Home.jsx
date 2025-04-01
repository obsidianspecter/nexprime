import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ContactForm from "../components/ContactForm";
import ProjectSection from "../components/ProjectSection";
import TestimonialSection from "../components/TestimonialSection";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#00031D] overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      {/* <TestimonialSection /> */}
      <ContactForm />
    </div>
  );
}

export default Home;
