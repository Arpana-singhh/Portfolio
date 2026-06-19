import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import HandwriteReveal from "./HandwriteReveal";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-inner">

          {/* Top badge */}
          <div
            className="hero-top-badge"
            data-animate="pop"
            data-delay="0.2"
            data-duration="0.6"
            data-distance="20"
            data-ease="back.out(1.7)"
          >
            <span className="hero-badge-dot" />
            Frontend Developer &amp; UI Enthusiast
          </div>

          {/* Info */}
          <p className="hero-sub">
            <span data-animate="fade-up" data-delay="0.4" data-duration="0.6" data-distance="24">I build modern and scalable web applications using </span>
            <span data-animate="fade-up" data-delay="0.5" data-duration="0.6" data-distance="24"> MERN and MEAN stack technologies, delivering</span>
             <span data-animate="fade-up" data-delay="0.6" data-duration="0.6" data-distance="24">  pixel-perfect UI, responsive layouts, and </span>
            <span data-animate="fade-up" data-delay="0.7" data-duration="0.6" data-distance="24">optimized performance for exceptional</span>
            <span data-animate="fade-up" data-delay="0.8" data-duration="0.6" data-distance="24"> user experiences.</span>
          </p>

          {/* Heading */}
          <div className="hero-heading-wrap">
            <h1 className="hero-hi" data-animate="fade-up" data-duration="0.9" data-distance="40">Hi I&apos;m</h1>
            <HandwriteReveal text="Arpana Singh" className="hero-name-big" delay={0.2} duration={3.2} />
          </div>

          {/* Center image */}
          <div className="hero-image-wrap"
            data-animate="fade-up"
            data-duration="0.5"
            data-distance="40"
            data-ease="power2.out"
          >
            <Image
              src="/assets/images/profile.png"
              alt="Arpana Singh"
              width={420}
              height={560}
              className="hero-image"
              priority
            />
          </div>

          {/* Bottom bar */}
          <div className="hero-bottom">
            <div className="hero-bottom-left">
              <span
                className="hero-available-pill"
                data-animate="fade-up"
                data-delay="0.6"
                data-duration="0.6"
                data-distance="20"
                data-start="top 100%"
              >
                <span className="hero-pulse" />
                Available for opportunities
              </span>
              <div className="hero-socials">
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

             <div
                className="hero-bottom-right"
                data-animate="fade-up"
                data-delay="0.6"
                data-duration="0.6"
                data-distance="20"
                data-start="top 100%"
             >
              <a href="/cv/jack-hayden-cv.pdf" download className="hero-cta-btn btn-primary">
                Download CV
                <HiDownload  size={18} />
              </a>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
}
