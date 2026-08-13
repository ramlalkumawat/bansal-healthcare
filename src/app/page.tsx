"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickInfo from "@/components/QuickInfo";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import TimingsSection from "@/components/TimingsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingMobileActions from "@/components/FloatingMobileActions";
import FloatingSidebarActions from "@/components/FloatingSidebarActions";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultDoctorId, setDefaultDoctorId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const bookDoctor = params.get("book");
      if (bookDoctor) {
        setDefaultDoctorId(bookDoctor);
        setIsModalOpen(true);
        // Clean URL query parameter without reloading
        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, []);

  const handleOpenAppointment = (doctorId = "") => {
    setDefaultDoctorId(doctorId);
    setIsModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment("")} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <HeroSection onOpenAppointment={() => handleOpenAppointment("")} />

        {/* Quick Information Cards Bar */}
        <QuickInfo />

        {/* About Clinic Section */}
        <AboutSection />

        {/* Services Grid Section */}
        <ServicesSection />

        {/* Doctors Profiles Section */}
        <DoctorsSection onOpenAppointment={handleOpenAppointment} />

        {/* Clinic & Doctors Schedule Timings */}
        <TimingsSection />

        {/* Geographic Directions Map Section */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Premium Dark Footer */}
      <Footer />

      {/* Sticky Quick Actions Bar for mobile layouts */}
      <FloatingMobileActions onOpenAppointment={() => handleOpenAppointment("")} />

      {/* Sticky Sidebar Actions for desktop layouts */}
      <FloatingSidebarActions />

      {/* Booking Form Dialog Modal overlay */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseAppointment}
        defaultDoctorId={defaultDoctorId}
      />
    </>
  );
}
