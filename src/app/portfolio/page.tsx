"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "CloudSync Pro",
    category: "SaaS Platform",
    desc: "A comprehensive cloud-based project management platform serving 10,000+ users with real-time collaboration, file sharing, and workflow automation.",
    techs: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"],
    color: "from-blue-500/20 to-purple-500/10",
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    title: "SecurePay Gateway",
    category: "FinTech Dashboard",
    desc: "A PCI-DSS compliant payment processing dashboard with real-time transaction monitoring, fraud detection, and comprehensive financial reporting.",
    techs: ["Next.js", "Python", "FastAPI", "MongoDB", "Docker"],
    color: "from-green-500/20 to-teal-500/10",
    metrics: [
      { label: "Transactions/day", value: "500K+" },
      { label: "Fraud Detection", value: "99.7%" },
    ],
  },
  {
    title: "ShopScale",
    category: "eCommerce System",
    desc: "A headless eCommerce platform with AI-powered product recommendations, multi-currency support, and elastic scalability during peak traffic.",
    techs: ["React", "Node.js", "Kubernetes", "PostgreSQL", "Redis"],
    color: "from-orange-500/20 to-red-500/10",
    metrics: [
      { label: "Products Listed", value: "1M+" },
      { label: "Peak Traffic", value: "50K RPS" },
    ],
  },
  {
    title: "InfraMatrix",
    category: "Cloud Infrastructure",
    desc: "A multi-cloud infrastructure management platform with automated provisioning, cost optimization, and compliance monitoring dashboards.",
    techs: ["Next.js", "Terraform", "AWS", "GCP", "Kubernetes"],
    color: "from-purple-500/20 to-blue-500/10",
    metrics: [
      { label: "Cloud Accounts", value: "200+" },
      { label: "Cost Saved", value: "35%" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              Projects That{" "}
              <span className="gradient-text">Deliver Results</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed">
              Explore a selection of our work — from SaaS platforms to cloud
              infrastructure solutions built for performance, security, and
              scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-10">
            {projects.map((project, i) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className={`group relative rounded-3xl bg-gradient-to-br ${project.color} border border-brand-primary/10 overflow-hidden card-hover`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      {/* Info */}
                      <div className="lg:col-span-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/50 text-xs font-semibold text-brand-dark/60 uppercase tracking-wider mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-[var(--font-heading)] text-brand-dark mb-3">
                          {project.title}
                        </h3>
                        <p className="text-brand-dark/60 leading-relaxed mb-6">
                          {project.desc}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.techs.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 rounded-lg bg-white/60 text-xs font-medium text-brand-dark/70 border border-brand-primary/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex lg:flex-col gap-6 lg:gap-4">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-4 rounded-2xl bg-white/50 border border-white/50"
                          >
                            <div className="text-2xl font-bold font-[var(--font-heading)] text-brand-dark">
                              {m.value}
                            </div>
                            <div className="text-xs text-brand-dark/50 mt-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-brand-dark">
              Want to See More?
            </h2>
            <p className="mt-4 text-lg text-brand-dark/60">
              These are just a few examples. Let&apos;s discuss how we can bring
              your project to the same level of quality.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-brand-secondary text-white font-semibold hover:bg-brand-secondary/90 transition-all hover:shadow-xl hover:shadow-brand-secondary/25 hover:-translate-y-0.5"
              >
                Discuss Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
