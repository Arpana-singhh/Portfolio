"use client";

import { useState } from "react";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiArrowRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const INFO = [
  {
    id: 1,
    label: "EMAIL",
    value: "arpana.singh@email.com",
    icon: <HiOutlineEnvelope size={18} />,
    iconBg: "#e0f0fd",
    iconColor: "#0077e6",
  },
  {
    id: 2,
    label: "PHONE",
    value: "+91 98765 43210",
    icon: <HiOutlinePhone size={18} />,
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
  },
  {
    id: 3,
    label: "LOCATION",
    value: "Vadodara, Gujarat (Remote OK)",
    icon: <HiOutlineMapPin size={18} />,
    iconBg: "#d1fae5",
    iconColor: "#059669",
  },
];

const SOCIALS = [
  { label: "GitHub",   icon: <FaGithub size={17} />,    href: "#" },
  { label: "LinkedIn", icon: <FaLinkedinIn size={17} />, href: "#" },
  { label: "Instagram",icon: <FaInstagram size={17} />,  href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section section-pad bg-white">
      <div className="container">

        {/* ── Section heading ── */}
        <div className="contact-heading">
          <div className="title-box">
            <span className="vector-line"></span>
            <h2 className="section-title">Contact</h2>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="contact-body">

          {/* Left — info */}
          <div className="contact-left">
            <h3 className="contact-left-title">Get in touch</h3>
            <p className="contact-left-desc">
              I typically respond within 24 hours. Let me know what you&apos;re
              working on and how I can help.
            </p>

            <div className="contact-info-list">
              {INFO.map((item) => (
                <div key={item.id} className="contact-info-card">
                  <div
                    className="contact-info-icon"
                    style={{ background: item.iconBg, color: item.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="contact-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName" name="firstName" type="text"
                    placeholder="Jane"
                    value={form.firstName} onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName" name="lastName" type="text"
                    placeholder="Smith"
                    value={form.lastName} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="jane@company.com"
                  value={form.email} onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Project Inquiry"
                  value={form.subject} onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="Tell me about your project or role..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <HiArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
