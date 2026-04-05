"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/industries", label: "Industries" },
  { href: "/security", label: "QA" },
  { href: "/process", label: "Process" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-xl bg-white/60 border-b border-brand-primary/30 shadow-lg shadow-brand-dark/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-6">

          {/* Logo — square lockup scales with bar height */}
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
            aria-label="Shell Coders home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative h-11 w-11 sm:h-12 sm:w-12 lg:h-[3.5rem] lg:w-[3.5rem]"
            >
              <BrandLogo
                className="h-full w-full object-contain object-left"
                priority
                sizes="(max-width: 1024px) 48px, 56px"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-lg px-4 py-2 rounded-full border border-brand-primary/30 shadow-sm h-12">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-brand-secondary"
                      : "text-brand-dark/70 hover:text-brand-secondary"
                  }`}
                >
                  {link.label}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-brand-secondary/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover indicator */}
                  {!isActive && (
                    <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-brand-secondary transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
                  )}
                </Link>
              );
            })}

          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white text-sm font-semibold shadow-md hover:shadow-xl hover:shadow-brand-secondary/30 transition-all"
              >
                Get Started
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-brand-dark rounded transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-brand-dark rounded transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-brand-dark rounded transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden backdrop-blur-xl bg-white/70 border-t border-brand-primary/20"
          >
            <div className="px-6 py-6 space-y-2">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-brand-secondary bg-brand-secondary/10"
                        : "text-brand-dark/70 hover:text-brand-secondary hover:bg-brand-primary/20"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white text-sm font-semibold text-center shadow-md hover:shadow-lg transition-all"
              >
                Get Started
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
