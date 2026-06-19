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
    role: "Frontend Developer",
    duration: "Sep 2024 – Present",
    location: "Vadodara, Gujarat",
    icon: <FaLaptopCode size={26} />,
    iconBg: "#e0f4fd",
    iconColor: "#0077e6",
    bullets: [
      "EF Portfolio — Developed a stock portfolio management system using Next.js and NextAuth with secure authentication. Implemented complex financial calculations on the frontend to reduce backend load.",
      "EF Portfolio — Integrated real-time stock market REST APIs using TypeScript and Zustand for scalable state management and high-performance data handling.",
      "Jadescroll — Built a novel-based management platform with secure authentication, REST API integration for content workflows, and payment gateway integration for subscriptions and purchases.",
      "AstralHoroscope — Designed and developed a responsive astrology platform using HTML, CSS, and advanced jQuery libraries. Optimised SEO through refined semantics, meta tags, and performance tuning.",
    ],
    tech: ["Next.js", "TypeScript", "Zustand", "NextAuth", "REST APIs", "jQuery"],
  },
  {
    id: 2,
    company: "Akshar Softweb Pvt. Ltd",
    role: "Junior WordPress Developer",
    duration: "Dec 2023 – Jul 2024",
    location: "Vadodara, Gujarat",
    icon: <FaWordpress size={26} />,
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
    <section className="experience-section section-pad bg-white">
      <div className="container">
        <div className="title-box">
          <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
          <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">Work Experience</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="exp-entry">

              {/* Timeline column */}
              <div className="exp-timeline-col">
                <div className="exp-dot" />
                {index < experiences.length - 1 && <div className="exp-line" />}
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-card-header">
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
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>
                      <HiArrowRight className="exp-bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="badge-tags">
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
