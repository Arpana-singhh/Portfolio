"use client";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <section className="contact-section section-pad sect-light">
      <div className="container">

        <div className="contact-heading">
          <div className="title-box">
            <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
            <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">Contact</h2>
          </div>
        </div>

        <div
          className="contact-cta-card"
          data-animate="fade-in"
          data-delay="0.3"
          data-duration="0.7"
          data-distance="40"
        >
          <h3 className="contact-cta-title" data-animate="fade-up" data-delay="0.5" data-duration="0.6" data-distance="40">Got an idea? Let&apos;s bring it to life.</h3>
          <p className="contact-cta-sub" data-animate="fade-up" data-delay="0.6" data-duration="0.6" data-distance="40">
            I&apos;m open to freelance projects, full-time roles, and creative collaborations.
            Whether it&apos;s a new product, a redesign, or just a chat — reach out and let&apos;s make something great.
          </p>
          <a href="mailto:arpana.singh@email.com" className="contact-cta-btn" data-animate="fade-up" data-delay="0.7" data-duration="0.6" data-distance="40">
            Let&apos;s Connect
            <span className="contact-cta-arrow"><HiArrowUpRight size={16} /></span>
          </a>
          <div className="hero-socials" data-animate="fade-up" data-delay="0.85" data-duration="0.6" data-distance="40">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge hero-social-badge--1">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge hero-social-badge--linkedin hero-social-badge--2">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge hero-social-badge--instagram hero-social-badge--3">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
