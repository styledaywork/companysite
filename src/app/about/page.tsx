"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Innovation First",
    desc: "We leverage cutting-edge technologies to build solutions that keep our clients ahead of the curve.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Security by Design",
    desc: "Security is baked into every layer of our development process, not bolted on as an afterthought.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: "Client Partnership",
    desc: "We work alongside our clients as strategic partners, not just service providers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    ),
    title: "Agile Delivery",
    desc: "Iterative, transparent development with continuous feedback loops and rapid delivery cycles.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: "Scalable Architecture",
    desc: "Every solution is engineered to scale, handling growing demand without compromising performance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
    title: "Quality Obsessed",
    desc: "Rigorous testing at every stage ensures our deliverables meet the highest quality standards.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Enterprise Clients" },
  { value: 12, suffix: "+", label: "Industries" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              About Shellcoders
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              We Build Technology{" "}
              <span className="gradient-text">That Matters</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed">
              Shellcoders is a technology services company specializing in
              scalable digital products, SaaS platforms, cloud systems, and
              secure technology solutions for businesses across multiple
              industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-16 border-b border-brand-primary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <motion.div
                  className="text-4xl lg:text-5xl font-bold font-[var(--font-heading)] gradient-text"
                  whileInView={{ scale: [0.8, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </motion.div>
                <div className="mt-2 text-sm text-brand-dark/50">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent/30 text-brand-dark/70 text-xs font-semibold uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-brand-dark leading-tight">
                Empowering Businesses Through Technology
              </h2>
              <p className="mt-5 text-brand-dark/60 leading-relaxed">
                We believe every business deserves access to world-class
                technology. Our mission is to bridge the gap between ambitious
                ideas and powerful digital solutions by combining deep technical
                expertise with strategic thinking.
              </p>
              <p className="mt-4 text-brand-dark/60 leading-relaxed">
                From startups launching their first MVP to enterprises
                modernizing legacy systems, we partner with organizations at
                every stage of their digital journey. Our approach is
                collaborative, transparent, and results-driven.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative p-8 rounded-3xl bg-white/60 border border-brand-primary/20 shadow-lg shadow-brand-dark/5 gradient-border-hover">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-secondary/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-brand-accent/20 blur-2xl" />
                <div className="relative space-y-5">
                  {[
                    { label: "End-to-end product development and support" },
                    { label: "Security-first engineering methodology" },
                    { label: "Cloud-native architectures that scale" },
                    { label: "Transparent, agile project delivery" },
                    { label: "Dedicated teams for every engagement" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-brand-dark/70">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Values"
              title="What Drives Us"
              subtitle="These core values shape every project we take on and every line of code we write."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group p-7 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover-3d gradient-border-hover h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4 group-hover:bg-brand-secondary group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-[var(--font-heading)] text-brand-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-brand-dark/55 leading-relaxed">{v.desc}</p>
                </div>
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
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-brand-dark/60">
              Whether you&apos;re a startup or an enterprise, we&apos;d love to
              discuss how we can help you build better technology.
            </p>
            <div className="mt-8">
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25"
                >
                  Get in Touch
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
