import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[var(--font-heading)]">N</span>
              </div>
              <span className="text-xl font-bold font-[var(--font-heading)] text-white">
                NexusForge
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Engineering secure, scalable digital platforms. We help businesses
              build powerful web platforms, SaaS products, cloud systems, and
              secure digital infrastructure.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "Gh"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-secondary hover:text-white transition-all text-xs font-bold"
                >
                  {icon}
                </a>
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
                      className="text-sm text-white/50 hover:text-brand-accent transition-colors"
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
            © {new Date().getFullYear()} NexusForge. All rights reserved.
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
