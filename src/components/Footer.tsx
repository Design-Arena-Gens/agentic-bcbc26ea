import Link from "next/link";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Platform overview", href: "#" },
      { label: "Workflow library", href: "#" },
      { label: "Security", href: "#" },
      { label: "Pricing", href: "#" }
    ]
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Brand kit", href: "#" }
    ]
  },
  {
    heading: "Resources",
    links: [
      { label: "Customer stories", href: "#" },
      { label: "Guides & tutorials", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04040d] py-16 text-white/70">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-cyan-400 text-lg font-bold text-white">
                A
              </span>
              Aurora
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Aurora is the creative operating system for product leaders crafting the next wave of
              iconic experiences.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.heading} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
                {section.heading}
              </p>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurora Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
