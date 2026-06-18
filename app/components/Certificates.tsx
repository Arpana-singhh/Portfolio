"use client";

import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineWorkspacePremium, MdCalendarToday } from "react-icons/md";
import CertModal from "./CertModal";

interface Certificate {
  id: number;
  badge: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  accent: string;
}

const certs: Certificate[] = [
  {
    id: 1,
    badge: "2nd Prize",
    title: "SSIP Hackathon 2022",
    issuer: "State Innovation Hub, Gujarat",
    date: "Oct 2022 – Feb 2023",
    description:
      "Developed a portal to report workplace sexual harassment; earned 2nd prize at the state-level SSIP innovation competition organised by the Government of Gujarat.",
    image: "/assets/images/project1.webp",
    accent: "#d97706",
  },
  {
    id: 2,
    badge: "Certified",
    title: "React Developer Certification",
    issuer: "Meta / Coursera",
    date: "Jan 2024",
    description:
      "Comprehensive certification covering React 18 architecture, advanced hooks, performance optimisation, React Testing Library, and building production-ready component systems.",
    image: "/assets/images/project2.webp",
    accent: "#0077e6",
  },
  {
    id: 3,
    badge: "Verified",
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "Jun 2023",
    description:
      "End-to-end full-stack course covering Node.js, Express, MongoDB, REST APIs, authentication, and deployment on cloud platforms.",
    image: "/assets/images/project3.webp",
    accent: "#059669",
  },
];

const DRAG_THRESHOLD = 60;

export default function Certificates() {
  const [active, setActive] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const dragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function goTo(index: number) {
    const next = (index + certs.length) % certs.length;
    setActive(next);
    setContentKey((k) => k + 1);
    setDragOffset(0);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    startX.current = e.clientX;
    currentX.current = e.clientX;
    cardRef.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    currentX.current = e.clientX;
    setDragOffset(e.clientX - startX.current);
  }

  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;
    const delta = currentX.current - startX.current;
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      goTo(delta < 0 ? active + 1 : active - 1);
    } else {
      setDragOffset(0);
    }
  }

  const cert = certs[active];
  const ghost = certs[(active + 1) % certs.length];

  return (
    <>
      <section className="certs-section section-pad bg-light">
        <div className="container">
          <div className="title-box">
            <span className="vector-line"></span>
            <h2 className="section-title">Certificates</h2>
          </div>

          <div className="certs-grid">
            {/* ── Left: card stack ── */}
            <div className="certs-stack-wrap">
              <div className="certs-stack">
                {/* Ghost card */}
                <div
                  className="cert-card cert-card--ghost"
                  style={{ "--cert-accent": ghost.accent } as React.CSSProperties}
                >
                  <img src={ghost.image} alt="" className="cert-card-img" />
                </div>

                {/* Active card */}
                <div
                  ref={cardRef}
                  className="cert-card cert-card--active"
                  style={
                    {
                      "--cert-accent": cert.accent,
                      transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.03}deg)`,
                      transition: dragOffset !== 0 ? "none" : "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                      cursor: dragging.current ? "grabbing" : "grab",
                    } as React.CSSProperties
                  }
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  <img src={cert.image} alt={cert.title} className="cert-card-img" />
                </div>
              </div>

              {/* Dots */}
              <div className="certs-dots">
                {certs.map((c, i) => (
                  <button
                    key={c.id}
                    className={`certs-dot${i === active ? " certs-dot--active" : ""}`}
                    style={{ "--cert-accent": c.accent } as React.CSSProperties}
                    onClick={() => goTo(i)}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: content ── */}
            <div
              key={contentKey}
              className="certs-content"
              style={{ "--cert-accent": cert.accent } as React.CSSProperties}
            >
              <span className="certs-badge">{cert.badge}</span>

              <h3 className="certs-title">{cert.title}</h3>

              <p className="certs-issuer">
                <MdOutlineWorkspacePremium size={16} />
                {cert.issuer}
              </p>

              <p className="certs-date">
                <MdCalendarToday size={13} />
                {cert.date}
              </p>

              <p className="certs-desc">{cert.description}</p>

              <button
                className="btn-primary certs-btn"
                onClick={() => setModalOpen(true)}
              >
                <FiExternalLink size={15} />
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </section>

      <CertModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        image={cert.image}
        title={cert.title}
      />
    </>
  );
}
