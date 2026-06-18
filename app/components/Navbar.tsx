"use client";

import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";

const links = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Education",    href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-wrap${scrolled ? " navbar-wrap--scrolled" : ""}`}>
      <nav className="navbar-bubble">

        {/* Logo */}
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-icon">A</span>
          <span className="navbar-logo-text">Arpana</span>
        </a>

        {/* Links */}
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar-link${active === l.href ? " navbar-link--active" : ""}`}
                onClick={() => setActive(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="navbar-cta">
          <span className="navbar-cta-text">Contact</span>
          <FiMail size={16} className="navbar-cta-icon" />
        </a>

      </nav>
    </header>
  );
}
