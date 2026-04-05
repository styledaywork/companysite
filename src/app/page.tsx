"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

/* ─── Services Data ─── */
const services = [
  {
    iconBg: "bg-brand-secondary/10 text-brand-secondary",
    iconHover: "group-hover:bg-brand-secondary group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Development",
    desc: "Custom websites, enterprise platforms, and full-stack scalable web applications.",
  },
  {
    iconBg: "bg-brand-primary/20 text-brand-dark",
    iconHover: "group-hover:bg-brand-primary group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "SaaS Development",
    desc: "Architecture design, MVP development, and subscription platforms built for scale.",
  },
  {
    iconBg: "bg-blue-100 text-blue-600",
    iconHover: "group-hover:bg-blue-600 group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, CI/CD automation, containerization, and Kubernetes orchestration.",
  },
  {
    iconBg: "bg-purple-100 text-purple-600",
    iconHover: "group-hover:bg-purple-600 group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8" />
      </svg>
    ),
    title: "Security Solutions",
    desc: "Security audits, vulnerability assessments, penetration testing, and server hardening.",
  },
  {
    iconBg: "bg-emerald-100 text-emerald-600",
    iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quality Assurance",
    desc: "Automated, manual, performance, and security testing for production-ready products.",
  },
  {
    iconBg: "bg-orange-100 text-orange-600",
    iconHover: "group-hover:bg-orange-600 group-hover:text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Applications",
    desc: "Cross-platform React Native apps and scalable mobile platforms.",
  },
];

/* ─── Industries Data ─── */
const industries = [
  { name: "Healthcare", desc: "HIPAA-compliant medical platforms", badge: "HIPAA Compliant" },
  { name: "FinTech", desc: "Secure financial software", badge: "Audit Ready" },
  { name: "eCommerce", desc: "Scalable online platforms", badge: "Audit Ready" },
  { name: "Media & Entertainment", desc: "High-performance streaming", badge: "Audit Ready" },
  { name: "Logistics", desc: "Tracking & automation systems", badge: "Audit Ready" },
  { name: "EdTech", desc: "Learning management systems", badge: "Audit Ready" },
];

/* ─── Tech logos ─── */
const techs = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "TypeScript", "Terraform", "GraphQL", "FastAPI"];

export default function HomePage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">

        {/* Particle Field Background — behind everything, subtle */}
        <ParticleField count={12} />

        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/40 pointer-events-none" />

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-brand-primary/20 blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-accent/20 blur-3xl"
            animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-brand-secondary/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-32 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 lg:items-start">
            {/* Copy — left on large screens */}
            <div className="lg:col-span-7 min-w-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/40 backdrop-blur-md text-brand-secondary text-sm font-semibold mt-25 mb-6 border border-brand-primary/30 shadow-sm hover:shadow-md transition">
                  <span className="w-2 h-2 rounded-full bg-brand-secondary mr-2 animate-pulse" />
                  Technology Services Partner
                </span>
              </motion.div>

              {/* Headline with Typewriter */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                Engineering{" "}
                <span className="inline-block min-w-[180px] sm:min-w-[240px]">
                  <TypewriterText
                    words={["Secure", "Scalable", "Powerful", "Reliable"]}
                    className="gradient-text"
                  />
                </span>{" "}
                <br className="hidden sm:block" />
                Digital Platforms
              </motion.h1>

              {/* Logo — under headline on small screens, right-aligned */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.35 }}
                className="mt-5 flex justify-end lg:hidden"
              >
                <div className="rounded-2xl bg-white/60 p-4 shadow-md shadow-brand-dark/5 ring-1 ring-brand-primary/20 backdrop-blur-md w-full max-w-[220px] sm:max-w-[260px]">
                  <BrandLogo
                    className="h-auto w-full object-contain object-center"
                    sizes="(max-width: 640px) 220px, 260px"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.6 }}
              >
                We help businesses build powerful web platforms, SaaS products,
                cloud systems, and secure digital infrastructure — from concept to
                launch and beyond.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.9 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-9 py-4 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-brand-secondary/25 transition-all hover:-translate-y-1"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full border-2 border-brand-dark/15 text-brand-dark font-semibold text-base hover:border-brand-secondary hover:text-brand-secondary transition-all hover:-translate-y-1"
                >
                  Explore Our Services
                </Link>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.0 }}
              >
                {[
                  { value: 50, suffix: "+", label: "Projects Delivered" },
                  { value: 99.9, suffix: "%", label: "Uptime SLA" },
                  { value: 12, suffix: "+", label: "Industries Served" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/40 backdrop-blur-md border border-brand-primary/30 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl font-bold font-[var(--font-heading)] text-brand-dark">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-sm text-brand-dark/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Brand mark — right column beside headline (lg+) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hidden lg:flex lg:col-span-5 justify-end lg:pt-2 xl:pt-4"
            >
              <div className="flex w-full max-w-[320px] xl:max-w-[360px] justify-end">
                <div className="rounded-2xl bg-white/60 p-5 xl:p-6 shadow-md shadow-brand-dark/5 ring-1 ring-brand-primary/20 backdrop-blur-md w-full">
                  <BrandLogo
                    className="h-auto w-full object-contain object-center"
                    sizes="(max-width: 1280px) 320px, 360px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ SERVICES PREVIEW ══════ */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="What We Do"
              title="Services Built for Growth"
              subtitle="From web applications to cloud infrastructure, we deliver end-to-end technology solutions that scale with your business."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <TiltCard tiltAmount={6}>
                  <div className="group relative p-7 rounded-2xl bg-white/70 backdrop-blur-md border border-brand-primary/20 shadow-sm hover:shadow-xl hover:shadow-brand-secondary/10 transition-all duration-300 cursor-pointer overflow-hidden gradient-border-hover h-full">

                    {/* Gradient glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/10" />

                    {/* Icon */}
                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${s.iconBg} ${s.iconHover}`}>
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h3 className="relative text-lg font-semibold font-[var(--font-heading)] text-brand-dark mb-2">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="relative text-sm text-brand-dark/60 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Learn more */}
                    <div className="relative mt-5 flex items-center text-sm font-medium text-brand-secondary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ INDUSTRIES PREVIEW ══════ */}
      <section className="py-24 lg:py-32 section-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Industries"
              title="Solutions for Every Industry"
              subtitle="We build software for businesses across healthcare, fintech, eCommerce, and beyond."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="group p-6 rounded-2xl bg-white/70 border border-brand-primary/15 card-hover-3d gradient-border-hover">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-semibold font-[var(--font-heading)] text-brand-dark">
                      {ind.name}
                    </h3>
                    <span className="shrink-0 ml-3 px-2.5 py-1 rounded-full bg-brand-accent/30 text-[10px] font-bold uppercase tracking-wider text-brand-dark/70">
                      {ind.badge}
                    </span>
                  </div>
                  <p className="text-sm text-brand-dark/55 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-brand-secondary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center text-brand-secondary font-semibold text-sm hover:underline"
            >
              View all industries
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ TECHNOLOGIES MARQUEE ══════ */}
      <section className="py-16 border-y border-brand-primary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold text-brand-dark/40 uppercase tracking-widest mb-8">
              Technologies We Work With
            </p>
          </AnimatedSection>
          <MarqueeStrip speed={25}>
            {techs.map((t) => (
              <span
                key={t}
                className="text-xl font-semibold text-brand-dark/20 hover:text-brand-secondary transition-colors cursor-default font-[var(--font-heading)] px-4 py-2 rounded-lg hover:bg-brand-secondary/5"
              >
                {t}
              </span>
            ))}
          </MarqueeStrip>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Animated gradient accent */}
        <div className="absolute inset-0 opacity-30 animated-gradient-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-brand-dark leading-tight">
              Ready to Build Your Next{" "}
              <span className="gradient-text">Digital Product?</span>
            </h2>
            <p className="mt-5 text-lg text-brand-dark/60 max-w-xl mx-auto">
              Let&apos;s discuss your project requirements and create something
              exceptional together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold text-base hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-dark/15 text-brand-dark font-semibold text-base hover:border-brand-secondary hover:text-brand-secondary transition-all hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
