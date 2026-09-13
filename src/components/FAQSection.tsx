"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[13px] font-bold tracking-wider text-teal-700 uppercase block">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] text-slate-600">
            Got questions about timings, doctors, or the clinic's location? Find quick answers below.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {clinicData.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-border-light overflow-hidden transition-all shadow-sm"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-primary hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-[15px] sm:text-[17px] leading-tight">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-600 hover:text-accent p-1 bg-bg-light rounded-lg shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Accordion Content Panel (with AnimatePresence) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[15px] text-slate-600 leading-relaxed border-t border-border-light pt-4 bg-bg-light/25 whitespace-pre-line font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
