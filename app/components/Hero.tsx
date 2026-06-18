import Image from "next/image";
import { HiArrowRight, HiOutlineDownload } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-inner">

          {/* Top badge */}
          <div className="hero-top-badge">
            <span className="hero-badge-dot" />
            Frontend Developer &amp; UI Enthusiast
          </div>

          {/* Info */}
          <p className="hero-sub">
            I design and develop end-to-end web applications -
            clean UI, solid code, and experiences people actually enjoy using.
          </p>

          {/* Heading */}
          <div className="hero-heading-wrap">
            <h1 className="hero-hi">Hi I&apos;m</h1>
            <h1 className="hero-name-big">Arpana Singh</h1>
          </div>

          {/* Center image */}
          <div className="hero-image-wrap">
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
              <span className="hero-available-pill">
                <span className="hero-pulse" />
                Available for opportunities
              </span>
              <div className="hero-socials">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge hero-social-badge--linkedin">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hero-social-badge hero-social-badge--instagram">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            <div className="hero-bottom-right">
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
