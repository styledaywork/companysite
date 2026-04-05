"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "SaaS Development", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
    { label: "Security Solutions", href: "/security" },
    { label: "Quality Assurance", href: "/security" },
    { label: "Mobile Development", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
  ],
  Resources: [
    { label: "Contact", href: "/contact" },
    { label: "Security & QA", href: "/security" },
    { label: "Case Studies", href: "/portfolio" },
  ],
};

const socialLinks = [
  { icon: "X", href: "#" },
  { icon: "Li", href: "#" },
  { icon: "Gh", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 relative overflow-hidden">
      {/* Animated gradient divider at top */}
      <div className="h-[2px] w-full animated-gradient-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              href="/"
              className="mb-4 inline-flex rounded-2xl bg-white p-3 shadow-md shadow-black/20 ring-1 ring-white/10 transition hover:ring-brand-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              aria-label="Shell Coders home"
            >
              <BrandLogo
                className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] object-contain"
                sizes="(max-width: 640px) 120px, 144px"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Engineering secure, scalable digital platforms. We help businesses
              build powerful web platforms, SaaS products, cloud systems, and
              secure digital infrastructure.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-secondary hover:text-white hover:shadow-lg hover:shadow-brand-secondary/25 transition-all text-xs font-bold"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 font-[var(--font-heading)]">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-brand-accent hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Shellcoders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
