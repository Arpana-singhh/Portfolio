"use client";

import { useState, useEffect } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar-wrap${scrolled ? " navbar-wrap--scrolled" : ""}`}
      data-animate="fade-up"
      data-duration="0.2"
      data-distance="40"
      data-ease="power2.out"
    >
      <nav className="navbar-bubble">

        {/* Logo */}
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-icon">A</span>
          <span className="navbar-logo-text">Arpana</span>
        </a>

        {/* Desktop links */}
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

        <div className="cta-ham-box">
          {/* Desktop CTA */}
          <a href="#contact" className="navbar-cta">
            <span className="navbar-cta-text">Contact</span>
            <FiMail size={16} className="navbar-cta-icon" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="navbar-mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navbar-mobile-link${active === l.href ? " navbar-mobile-link--active" : ""}`}
              onClick={() => handleLinkClick(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
