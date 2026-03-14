"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              Let&apos;s Build Your Next{" "}
              <span className="gradient-text">Digital Product</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Schedule a free consultation and
              let&apos;s discuss how we can help you achieve your technology
              goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="p-8 lg:p-10 rounded-3xl bg-white/60 border border-brand-primary/15 shadow-lg shadow-brand-dark/5">
                  <h2 className="text-2xl font-bold font-[var(--font-heading)] text-brand-dark mb-6">
                    Start Your Project
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium"
                    >
                      ✓ Thank you! We&apos;ll get back to you within 24 hours.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-brand-dark/70 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 bg-white/80 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-brand-dark/70 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 bg-white/80 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-brand-dark/70 mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 bg-white/80 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-brand-dark/70 mb-1.5"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 bg-white/80 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="saas">SaaS Development</option>
                          <option value="cloud">Cloud & DevOps</option>
                          <option value="security">Security Solutions</option>
                          <option value="qa">Quality Assurance</option>
                          <option value="mobile">Mobile Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brand-dark/70 mb-1.5"
                      >
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 bg-white/80 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all resize-none"
                        placeholder="Describe your project requirements, timeline, and budget..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25 hover:-translate-y-0.5"
                    >
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <div className="p-7 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold font-[var(--font-heading)] text-brand-dark mb-1">
                      Email Us
                    </h3>
                    <p className="text-sm text-brand-dark/60">
                      hello@nexusforge.dev
                    </p>
                    <p className="text-sm text-brand-dark/40 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-7 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold font-[var(--font-heading)] text-brand-dark mb-1">
                      Free Consultation
                    </h3>
                    <p className="text-sm text-brand-dark/60">
                      Schedule a 30-minute discovery call
                    </p>
                    <p className="text-sm text-brand-dark/40 mt-1">
                      No commitment required
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-7 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold font-[var(--font-heading)] text-brand-dark mb-1">
                      Quick Turnaround
                    </h3>
                    <p className="text-sm text-brand-dark/60">
                      Project kickoff within 1 week
                    </p>
                    <p className="text-sm text-brand-dark/40 mt-1">
                      Flexible engagement models
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-7 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-secondary-light text-white">
                    <h3 className="text-lg font-bold font-[var(--font-heading)] mb-2">
                      Enterprise Inquiry?
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      For large-scale projects and enterprise partnerships,
                      contact our solutions team directly at{" "}
                      <strong>enterprise@nexusforge.dev</strong>
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
