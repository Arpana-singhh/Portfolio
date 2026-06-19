import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineComputerDesktop } from "react-icons/hi2";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub",    icon: <FaGithub size={16} />,    href: "#" },
  { label: "LinkedIn",  icon: <FaLinkedinIn size={16} />, href: "#" },
  { label: "Instagram", icon: <FaInstagram size={16} />,  href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer sect-white">
      <div className="container">

        {/* ── Top row ── */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <p className="footer-name">Arpana Singh</p>
            <p className="footer-tagline">Frontend Developer · Vadodara, Gujarat</p>
            <p className="footer-bio">
              Building fast, accessible, and visually polished web experiences.
              Open to full-time roles and freelance projects.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <p className="footer-col-heading">Quick Links</p>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <HiArrowUpRight size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snapshot */}
          <div className="footer-col">
            <p className="footer-col-heading">Contact</p>
            <ul className="footer-contact-list">
              <li><HiOutlineEnvelope size={18} />arpana.singh@email.com</li>
              <li><HiOutlinePhone size={18} />+91 98765 43210</li>
              <li><HiOutlineMapPin size={18} />Vadodara, Gujarat</li>
              <li><HiOutlineComputerDesktop size={18} />Remote OK</li>
            </ul>
            <div className="footer-socials">
              <div className="pf-socials" data-animate="fade-up" data-delay="0.85" data-duration="0.6" data-distance="40">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="pf-social-badge pf-social-badge--1">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="pf-social-badge pf-social-badge--linkedin pf-social-badge--2">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="pf-social-badge pf-social-badge--instagram pf-social-badge--3">
                  <FaInstagram size={20} />
                </a>
               </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom row ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Arpana Singh. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed &amp; Developed by <span>Arpana Singh</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
