"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { clinicData } from "@/data/clinic";

interface NavbarProps {
  onOpenAppointment: () => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle transparent background transitioning to solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "Timings", href: "#timings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="#home" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">
              {clinicData.brandName.toUpperCase()}
            </span>
            <span className="text-[10px] text-text-muted font-medium tracking-wider -mt-1 hidden sm:inline">
              Dr Bansal's Child & Physiotherapy Clinic
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-dark hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {clinicData.phone && (
              <a
                href={`tel:${clinicData.phone}`}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-secondary hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>
            )}
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-accent focus:outline-none p-1 cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-border-light shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-text-dark hover:bg-bg-light hover:text-accent transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-border-light pt-4 mt-4 flex flex-col space-y-3">
            {clinicData.phone && (
              <a
                href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-lg border border-border-light text-secondary font-bold text-sm bg-bg-light active:bg-border-light transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>
            )}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAppointment();
              }}
              className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-primary hover:bg-secondary text-white font-bold text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
