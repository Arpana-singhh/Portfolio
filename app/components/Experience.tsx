import { FaLaptopCode, FaWordpress } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

interface ExpEntry {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  bullets: string[];
  tech: string[];
}

const experiences: ExpEntry[] = [
  {
    id: 1,
    company: "Pavans Group Techsoft Pvt Ltd",
    role: "Software Developer",
    duration: "Sep 2024 – Present",
    location: "Vadodara, Gujarat",
    icon: <FaLaptopCode size={30} />,
    iconBg: "#e0f4fd",
    iconColor: "#0077e6",
    bullets: [
      "EF Portfolio is a full-stack financial portfolio management platform built with Next.js 14, React, and TypeScript, featuring real-time portfolio optimization, sector analytics, and interactive data visualizations. It integrates Plaid, SnapTrade, Stripe, and NextAuth for secure brokerage connectivity, subscriptions, and authentication, while leveraging Zustand, math.js for advanced financial computations. Delivered as a PWA with Ant Design, SCSS theming, dark mode, and comprehensive testing.",
      "Built Jade Scrolls, a full-stack web novel platform using Next.js 14, Redux Toolkit, and Firebase, featuring chapter-based reading, subscriptions, authentication, bookmarks, and offline support with a rich content editing experience.",
      "A full-featured tax rebate platform built with Next.js 15, React 19, and TypeScript, featuring secure authentication, scalable state management, advanced form workflows, and REST API integration. Delivered with a polished responsive UI, scheduling, e-signatures, and offline support for a seamless user experience.",
    ],
    tech: ["Next.js", "TypeScript", "Zustand", "NextAuth", "REST APIs", "jQuery"],
  },
  {
    id: 2,
    company: "Akshar Softweb Pvt. Ltd",
    role: "Junior WordPress Developer",
    duration: "Dec 2023 – Jul 2024",
    location: "Vadodara, Gujarat",
    icon: <FaWordpress size={30} />,
    iconBg: "#e8f5ee",
    iconColor: "#198754",
    bullets: [
      "Created 20+ reusable templates for in-house projects while designing responsive, user-friendly layouts using Elementor, WPBakery Page Builder, and Custom Fields.",
      "Neeraj Exim Engitech — Developed a fully responsive WordPress website for a Vadodara-based machining manufacturer specialising in sheet metal and CNC components. Ensured strong SEO and brand alignment.",
      "Navrachana University — Built responsive, SEO-friendly pages using Elementor for one of Gujarat's top private universities, maintaining modern design and institutional branding consistency.",
    ],
    tech: ["WordPress", "Elementor", "WPBakery", "Custom Fields", "HTML/CSS", "SEO"],
  },
];

export default function Experience() {
  return (
    <section className="experience-section section-pad sect-light">
      <div className="container">
        <div className="title-box">
          <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
          <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">Work Experience</h2>
        </div>

        <div className="exp-timeline" id="exp-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              id={`exp-card-${index}`}
              className="exp-entry"
              data-animate="fade-in"
              data-trigger="#exp-timeline"
              data-delay={index * 0.2}
              data-duration="0.6"
            >

              {/* Timeline column */}
              <div className="exp-timeline-col">
                <div className="exp-dot" />
                {index < experiences.length - 1 && <div className="exp-line" />}
              </div>

              {/* Card */}
              <div className="exp-card">
                <div
                  className="exp-card-header"
                  data-animate="fade-up"
                  data-trigger={`#exp-card-${index}`}
                  data-delay="0.15"
                  data-duration="0.5"
                  data-distance="20"
                >
                  <div
                    className="exp-icon"
                    style={{ background: exp.iconBg, color: exp.iconColor }}
                  >
                    {exp.icon}
                  </div>

                  <div className="exp-header-info">
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-location">{exp.location}</p>
                  </div>

                  <span className="exp-badge">{exp.duration}</span>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bullet}
                      data-animate="fade-up"
                      data-trigger={`#exp-card-${index}`}
                      data-delay={0.35 + bi * 0.12}
                      data-duration="0.5"
                      data-distance="20"
                    >
                      <HiArrowRight className="exp-bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="badge-tags"
                  data-animate="fade-up"
                  data-trigger={`#exp-card-${index}`}
                  data-delay={0.35 + exp.bullets.length * 0.12}
                  data-duration="0.5"
                  data-distance="20"
                >
                  {exp.tech.map((t) => (
                    <span key={t} className="badge-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
