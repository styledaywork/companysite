"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: "Website Development",
    desc: "We build custom websites, enterprise web platforms, and full-stack applications engineered for performance and scalability.",
    features: [
      "Custom websites & enterprise platforms",
      "Full-stack development (React, Next.js, Node.js)",
      "Performance-optimized systems",
      "Scalable web applications",
      "Responsive, accessible design",
    ],
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500",
    borderAccent: "hover:border-blue-400/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
    title: "SaaS Product Development",
    desc: "From architecture design to launch, we build SaaS products with subscription models, multi-tenancy, and microservice architectures.",
    features: [
      "SaaS architecture design",
      "MVP & rapid prototyping",
      "Subscription platform development",
      "Cloud-based SaaS systems",
      "Scalable microservice architectures",
    ],
    color: "bg-purple-500/10 text-purple-600",
    hoverColor: "group-hover:bg-purple-500",
    borderAccent: "hover:border-purple-400/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
    title: "Cloud & DevOps",
    desc: "Infrastructure automation, CI/CD pipelines, containerization, and cloud cost optimization on AWS, Google Cloud, and Azure.",
    features: [
      "Cloud infrastructure setup (AWS, GCP, Azure)",
      "CI/CD pipeline automation",
      "Docker & Kubernetes orchestration",
      "Terraform infrastructure-as-code",
      "Cloud cost optimization",
    ],
    color: "bg-orange-500/10 text-orange-600",
    hoverColor: "group-hover:bg-orange-500",
    borderAccent: "hover:border-orange-400/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    title: "Security Solutions",
    desc: "Comprehensive security services including audits, vulnerability assessments, penetration testing, and secure architecture design.",
    features: [
      "Website & application security audits",
      "Vulnerability assessment & pen testing",
      "Database & API security",
      "Server hardening & cloud security",
      "Compliance-ready infrastructure",
    ],
    color: "bg-red-500/10 text-red-600",
    hoverColor: "group-hover:bg-red-500",
    borderAccent: "hover:border-red-400/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Quality Assurance",
    desc: "End-to-end testing strategies with automated, manual, performance, security, and load testing for production-ready validation.",
    features: [
      "Automated & manual testing",
      "Performance & load testing",
      "Security testing & validation",
      "Cross-browser & cross-device testing",
      "Product validation & acceptance",
    ],
    color: "bg-green-500/10 text-green-600",
    hoverColor: "group-hover:bg-green-500",
    borderAccent: "hover:border-green-400/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps built with React Native for iOS and Android, designed for performance and user experience.",
    features: [
      "Cross-platform development",
      "React Native & Flutter",
      "Scalable mobile platforms",
      "Native-feel user experience",
      "App Store optimization",
    ],
    color: "bg-teal-500/10 text-teal-600",
    hoverColor: "group-hover:bg-teal-500",
    borderAccent: "hover:border-teal-400/40",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              End-to-End Technology{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed">
              From concept to deployment, we deliver comprehensive technology
              services that help businesses build, secure, and scale their
              digital products.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <TiltCard tiltAmount={3}>
                  <div className={`group relative p-8 lg:p-10 rounded-3xl bg-white/60 border border-brand-primary/15 card-hover-3d gradient-border-hover ${service.borderAccent}`}>
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                      <div className="lg:col-span-3">
                        <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5 ${service.hoverColor} group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3`}>
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-[var(--font-heading)] text-brand-dark mb-3 group-hover:text-brand-secondary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-brand-dark/60 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <ul className="space-y-3">
                          {service.features.map((f, i) => (
                            <motion.li
                              key={f}
                              className="flex items-start gap-3 text-sm text-brand-dark/70"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {f}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 opacity-20 animated-gradient-bg" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-brand-dark">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-brand-dark/60">
              Every business is unique. Let&apos;s discuss how we can tailor our
              services to meet your specific requirements.
            </p>
            <div className="mt-8">
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25"
                >
                  Schedule a Consultation
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
