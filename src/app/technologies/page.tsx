"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const techStacks = [
  {
    category: "Frontend",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-400/20",
    accentColor: "blue",
    techs: [
      { name: "React", desc: "Component-based UI library" },
      { name: "Next.js", desc: "Full-stack React framework" },
      { name: "Vue", desc: "Progressive UI framework" },
      { name: "TailwindCSS", desc: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-400/20",
    accentColor: "green",
    techs: [
      { name: "Node.js", desc: "JavaScript runtime" },
      { name: "Python", desc: "Versatile programming language" },
      { name: "FastAPI", desc: "High-performance Python API" },
      { name: "Django", desc: "Python web framework" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-400/20",
    accentColor: "orange",
    techs: [
      { name: "AWS", desc: "Amazon Web Services" },
      { name: "Docker", desc: "Container platform" },
      { name: "Kubernetes", desc: "Container orchestration" },
      { name: "Terraform", desc: "Infrastructure as code" },
      { name: "CI/CD", desc: "Continuous integration & delivery" },
    ],
  },
  {
    category: "Databases",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-400/20",
    accentColor: "purple",
    techs: [
      { name: "PostgreSQL", desc: "Relational database" },
      { name: "MongoDB", desc: "Document database" },
      { name: "Redis", desc: "In-memory data store" },
    ],
  },
  {
    category: "Mobile",
    color: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-400/20",
    accentColor: "teal",
    techs: [
      { name: "React Native", desc: "Cross-platform mobile" },
      { name: "Flutter", desc: "Google's UI toolkit" },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
              Tech Stack
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-brand-dark leading-[1.1]">
              Modern Technologies,{" "}
              <span className="gradient-text">Proven Results</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-dark/60 max-w-2xl leading-relaxed">
              We use industry-leading tools and frameworks to build reliable,
              scalable, and high-performance digital products.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {techStacks.map((stack, si) => (
            <AnimatedSection key={stack.category} delay={si * 0.1}>
              <div className={`p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${stack.color} border ${stack.borderColor}`}>
                <h3 className="text-2xl font-bold font-[var(--font-heading)] text-brand-dark mb-8">
                  {stack.category}
                </h3>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {stack.techs.map((tech) => (
                    <StaggerItem key={tech.name}>
                      <motion.div
                        className="group p-5 rounded-2xl bg-white/70 border border-white/50 cursor-default gradient-border-hover"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 40px rgba(108,99,255,0.12)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-3 group-hover:bg-brand-secondary/20 group-hover:scale-110 transition-all">
                          <span className="text-lg font-bold text-brand-secondary font-[var(--font-heading)]">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                        <h4 className="font-semibold text-brand-dark font-[var(--font-heading)] text-sm group-hover:text-brand-secondary transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-brand-dark/50 mt-1">
                          {tech.desc}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Cloud Partners */}
      <section className="py-16 border-y border-brand-primary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Cloud Platform Partners"
              subtitle="We work with the world's leading cloud providers to deliver robust, scalable infrastructure."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "AWS", desc: "Amazon Web Services — the most comprehensive cloud platform" },
              { name: "Google Cloud", desc: "Google Cloud Platform — data and AI-first infrastructure" },
              { name: "Azure", desc: "Microsoft Azure — enterprise-grade cloud services" },
            ].map((cloud) => (
              <StaggerItem key={cloud.name}>
                <motion.div
                  className="group p-8 rounded-2xl bg-white/60 border border-brand-primary/15 card-hover-3d gradient-border-hover text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-dark/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-secondary/10 group-hover:scale-110 transition-all">
                    <span className="text-2xl font-bold text-brand-dark/60 group-hover:text-brand-secondary transition-colors font-[var(--font-heading)]">
                      {cloud.name.split(" ")[0].charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-[var(--font-heading)] text-brand-dark">
                    {cloud.name}
                  </h3>
                  <p className="text-sm text-brand-dark/50 mt-2">{cloud.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
