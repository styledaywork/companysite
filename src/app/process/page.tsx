"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "We deeply understand your business goals, target users, technical requirements, and project scope through collaborative discovery sessions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    ),
    color: "bg-blue-500",
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "Our architects design scalable, secure system architectures with technology stack selection, data modeling, and infrastructure planning.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
    color: "bg-purple-500",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile development with iterative sprints, code reviews, continuous integration, and transparent progress updates throughout the build.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    color: "bg-brand-secondary",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Comprehensive quality assurance with automated tests, manual testing, performance testing, and cross-browser/device validation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: "bg-green-500",
  },
  {
    num: "05",
    title: "Security Validation",
    desc: "Security audits, vulnerability scanning, penetration testing, and compliance verification to ensure your product is hardened for production.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    color: "bg-red-500",
  },
  {
    num: "06",
    title: "Deployment & Monitoring",
    desc: "Zero-downtime deployment, infrastructure provisioning, performance monitoring, and ongoing support to keep your product running smoothly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    color: "bg-orange-500",
  },
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              Our Process
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              From Idea to{" "}
              <span className="gradient-text">Production</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed">
              Our proven six-step development process ensures every project is
              delivered on time, within scope, and built to the highest standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps with Animated Progress Line */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative" ref={containerRef}>
            {/* Static timeline line */}
            <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-brand-primary/15" />

            {/* Animated progress line */}
            <motion.div
              className="hidden lg:block absolute left-[39px] top-0 w-px bg-gradient-to-b from-brand-secondary via-brand-primary to-brand-accent origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex gap-6 lg:gap-10 group"
                >
                  {/* Step icon with pulse */}
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileInView={{ scale: [0.8, 1] }}
                      viewport={{ once: true }}
                    >
                      {step.icon}
                    </motion.div>
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${step.color} opacity-30`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-brand-dark/30 uppercase tracking-widest">
                        Step {step.num}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold font-[var(--font-heading)] text-brand-dark mb-3 group-hover:text-brand-secondary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-brand-dark/60 leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 opacity-20 animated-gradient-bg" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-brand-dark">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-brand-dark/60">
              Let&apos;s walk through our process together and bring your vision
              to life.
            </p>
            <div className="mt-8">
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25"
                >
                  Start a Conversation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
