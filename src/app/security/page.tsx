"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const securityServices = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Website Security Audits",
    desc: "Comprehensive assessment of your web applications to identify vulnerabilities, misconfigurations, and security risks.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    title: "Vulnerability Assessment",
    desc: "Systematic identification and classification of security weaknesses in your systems, networks, and applications.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    title: "Penetration Testing",
    desc: "Simulated cyberattacks to test your defenses and uncover exploitable vulnerabilities before malicious actors do.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    title: "Database Security",
    desc: "Protecting your data assets with encryption, access controls, audit logging, and secure database architecture.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    title: "API Security",
    desc: "Securing your APIs with authentication, rate limiting, input validation, and protection against common attack vectors.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    title: "Server Hardening",
    desc: "Strengthening server configurations, patching vulnerabilities, and implementing defense-in-depth strategies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
    title: "Cloud Security",
    desc: "Securing cloud infrastructure with IAM policies, encryption, monitoring, and compliance-ready configurations.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
    title: "Continuous Monitoring",
    desc: "24/7 security monitoring, threat detection, incident response, and real-time alerting for your infrastructure.",
  },
];

const qaServices = [
  { title: "Automated Testing", desc: "End-to-end test automation with CI/CD integration for reliable, repeatable test execution.", icon: "⚙️" },
  { title: "Manual Testing", desc: "Expert exploratory testing to uncover edge cases that automated tests may miss.", icon: "🔍" },
  { title: "Performance Testing", desc: "Load testing, stress testing, and performance profiling to ensure your app handles scale.", icon: "📊" },
  { title: "Security Testing", desc: "OWASP-aligned security testing to identify and remediate vulnerabilities before production.", icon: "🔒" },
  { title: "Load Testing", desc: "Simulate real-world traffic patterns to validate system behavior under peak loads.", icon: "📈" },
  { title: "Product Validation", desc: "Comprehensive acceptance testing to ensure your product meets all requirements and standards.", icon: "✅" },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        {/* Animated shield background */}
        <motion.div
          className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-brand-accent text-sm font-semibold mb-6 border border-white/10">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Security & Quality Assurance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-white leading-[1.1]">
              Secure by Design,{" "}
              <span className="text-brand-accent">Quality by Default</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              We embed security and quality assurance into every phase of
              development, ensuring your products are resilient, reliable, and
              ready for production.
            </p>

            <div className="mt-8">
              <motion.a
                href="https://dexqa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-7 py-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-brand-secondary/30 transition-all duration-300 group"
              >
                QA Team
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Security"
              title="Comprehensive Security Services"
              subtitle="From vulnerability assessments to continuous monitoring, we protect your digital assets at every layer."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityServices.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="group p-6 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover-3d gradient-border-hover h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3 relative">
                    {s.icon}
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-red-500/20"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <h3 className="text-base font-semibold font-[var(--font-heading)] text-brand-dark mb-2 group-hover:text-brand-secondary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-dark/55 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* QA Services */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Quality Assurance"
              title="Rigorous Testing Methodology"
              subtitle="Every product goes through our comprehensive QA pipeline to ensure it meets the highest quality standards."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qaServices.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="group p-7 rounded-2xl bg-white/70 border border-brand-primary/15 card-hover-3d gradient-border-hover h-full"
                  whileHover={{ y: -4 }}
                >
                  <motion.span
                    className="text-3xl mb-4 block"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    {s.icon}
                  </motion.span>
                  <h3 className="text-lg font-semibold font-[var(--font-heading)] text-brand-dark mb-2 group-hover:text-brand-secondary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-dark/55 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-y border-brand-primary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 100, suffix: "%", label: "Code Review Coverage" },
              { display: "OWASP", label: "Aligned Testing" },
              { display: "24/7", label: "Monitoring Available" },
              { display: "SOC2", label: "Ready Infrastructure" },
            ].map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <motion.div
                  className="text-2xl lg:text-3xl font-bold font-[var(--font-heading)] gradient-text"
                  whileInView={{ scale: [0.8, 1] }}
                  viewport={{ once: true }}
                >
                  {"value" in s ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  ) : (
                    s.display
                  )}
                </motion.div>
                <div className="mt-1 text-sm text-brand-dark/50">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 opacity-20 animated-gradient-bg" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-brand-dark">
              Protect Your Digital Assets
            </h2>
            <p className="mt-4 text-lg text-brand-dark/60">
              Get a comprehensive security assessment and learn how we can
              strengthen your infrastructure.
            </p>
            <div className="mt-8">
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25"
                >
                  Request Security Audit
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
