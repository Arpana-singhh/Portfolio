"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiArrowUpRight, HiCheckCircle, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TABS = ["All", "Professional Projects", "Personal Projects"] as const;
type Tab = typeof TABS[number];

interface Project {
  id: number;
  title: string;
  category: string;
  type: "professional" | "personal";
  shortDesc: string;
  longDesc: string;
  features: string[];
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    type: "professional",
    shortDesc: "A scalable online shopping experience built for modern retail brands.",
    longDesc:
      "Designed and developed a full-featured e-commerce platform handling product catalogs, cart management, secure checkout, and real-time order tracking — optimised for performance and conversions.",
    features: [
      "Dynamic product filtering & search",
      "Stripe-powered secure checkout",
      "Role-based admin dashboard",
      "Real-time order & inventory sync",
      "Mobile-first responsive design",
    ],
    image: "https://picsum.photos/seed/ecommerce/600/420",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    category: "Web App",
    type: "professional",
    shortDesc: "Unified patient management and analytics for healthcare providers.",
    longDesc:
      "Built a comprehensive healthcare portal that streamlines patient records, appointment scheduling, and clinical analytics — improving operational efficiency and enhancing remote care capabilities.",
    features: [
      "Patient records & EHR management",
      "Appointment scheduling & reminders",
      "Interactive analytics & reports",
      "Secure role-based access control",
      "Telemedicine video integration",
    ],
    image: "https://picsum.photos/seed/healthcare/600/420",
    tech: ["React.js", "Node.js", "Express.js", "SQL"],
  },
  {
    id: 3,
    title: "Education Portal",
    category: "Web Platform",
    type: "professional",
    shortDesc: "An immersive learning management system for students and educators.",
    longDesc:
      "Developed an end-to-end LMS that supports course creation, live classes, progress tracking, and assessments — enriching the digital education experience for thousands of learners.",
    features: [
      "Course builder with rich media support",
      "Live class & webinar integration",
      "Automated progress tracking",
      "Quizzes, assignments & grading",
      "Multi-role access for students and tutors",
    ],
    image: "https://picsum.photos/seed/education/600/420",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
  },
  {
    id: 4,
    title: "Finance Tracker",
    category: "Web App",
    type: "professional",
    shortDesc: "Real-time financial insights and budget management for individuals.",
    longDesc:
      "Created a personal finance application with live bank syncing, smart budgeting, expense categorisation, and interactive charts — helping users take full control of their financial health.",
    features: [
      "Real-time bank & transaction sync",
      "Automated expense categorisation",
      "Custom budget goals & alerts",
      "Interactive charts & forecasts",
      "Secure end-to-end data encryption",
    ],
    image: "https://picsum.photos/seed/finance/600/420",
    tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Real Estate Portal",
    category: "Full Stack",
    type: "personal",
    shortDesc: "A modern property listing and search platform for buyers and agents.",
    longDesc:
      "Engineered a high-performance real estate marketplace featuring advanced property search, virtual tours, mortgage calculators, and agent dashboards to simplify the property buying journey.",
    features: [
      "Advanced map-based property search",
      "Virtual 360° property tours",
      "Mortgage calculator & affordability tool",
      "Agent CRM & lead management",
      "Saved searches & property alerts",
    ],
    image: "https://picsum.photos/seed/realestate/600/420",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Zustand"],
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile / Web",
    type: "personal",
    shortDesc: "A community-driven platform connecting people through shared interests.",
    longDesc:
      "Built a feature-rich social networking application with real-time messaging, AI-curated content feeds, and community tools — designed to maximize user engagement and retention.",
    features: [
      "Real-time messaging & notifications",
      "AI-curated personalised feed",
      "Community groups & events",
      "Media uploads & story features",
      "Moderation & reporting system",
    ],
    image: "https://picsum.photos/seed/social/600/420",
    tech: ["React Native", "Node.js", "Socket.io", "Redis"],
  },
  {
    id: 7,
    title: "Logistics Dashboard",
    category: "Web App",
    type: "personal",
    shortDesc: "End-to-end supply chain visibility for fleet and warehouse teams.",
    longDesc:
      "Delivered a real-time logistics management platform with live fleet tracking, automated dispatch, and warehouse analytics — helping operations teams reduce delays and cut overhead.",
    features: [
      "Live GPS fleet tracking",
      "Automated dispatch & route planning",
      "Warehouse inventory management",
      "Driver mobile app integration",
      "SLA monitoring & alert system",
    ],
    image: "https://picsum.photos/seed/logistics/600/420",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox"],
  },
  {
    id: 8,
    title: "Restaurant Platform",
    category: "Full Stack",
    type: "personal",
    shortDesc: "Smart ordering and kitchen management for modern restaurants.",
    longDesc:
      "Developed an integrated restaurant management system covering online ordering, table reservations, kitchen display, and loyalty programmes — streamlining front-of-house and back-of-house operations.",
    features: [
      "Online ordering & menu management",
      "Real-time kitchen display system",
      "Table reservation & waitlist",
      "Loyalty points & promotions",
      "Revenue analytics & reports",
    ],
    image: "https://picsum.photos/seed/restaurant/600/420",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
  },
];

const CHUNK = 4;

function chunkProjects(list: Project[]) {
  return Array.from({ length: Math.ceil(list.length / CHUNK) }, (_, i) =>
    list.slice(i * CHUNK, (i + 1) * CHUNK)
  );
}

export default function Projects() {
  const [activeId, setActiveId]         = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop]       = useState(false);
  const [activeTab, setActiveTab]       = useState<Tab>("All");
  const hoverTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const filtered = activeTab === "All"
    ? projects
    : projects.filter(p => p.type === (activeTab === "Professional Projects" ? "professional" : "personal"));

  const rows = chunkProjects(filtered);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1 },
    mode: "snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      setActiveId(null); // reset any expanded card when row changes
    },
  });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1201);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => () => { hoverTimers.current.forEach(clearTimeout); }, []);

  // reset slider + active card whenever tab changes
  useEffect(() => {
    setCurrentSlide(0);
    setActiveId(null);
    instanceRef.current?.moveToIdx(0, true);
    instanceRef.current?.update();
  }, [activeTab]);

  const handleMouseEnter = useCallback((id: number) => {
    if (!isDesktop) return;
    const timer = setTimeout(() => {
      setActiveId(id);
      hoverTimers.current.delete(id);
    }, 300);
    hoverTimers.current.set(id, timer);
  }, [isDesktop]);

  const handleMouseLeave = useCallback((id: number) => {
    if (!isDesktop) return;
    const timer = hoverTimers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      hoverTimers.current.delete(id);
      return;
    }
    setActiveId(null);
  }, [isDesktop]);

  const getSlideStyle = (id: number): React.CSSProperties => {
    if (activeId === null) return { flex: "0 1 25%" };
    if (id === activeId)   return { flex: "0 1 50%" };
    return { flex: "0 1 16.66%" };
  };

  const totalSlides = rows.length;

  return (
    <section className="projects-section section-pad bg-light">
      <div className="container">
        <div className="title-box">
          <span className="vector-line"></span>
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-nav">
            <button
              className="proj-nav-btn"
              aria-label="Previous row"
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
            >
              <HiChevronLeft />
            </button>
            <button
              className="proj-nav-btn"
              aria-label="Next row"
              disabled={currentSlide === totalSlides - 1}
              onClick={() => instanceRef.current?.next()}
            >
              <HiChevronRight />
            </button>
          </div>
        </div>

        <div className="tab-filters">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`tab-btn${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-slider-wrap">
          <div ref={sliderRef} className="keen-slider projects-keen-slider">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="keen-slider__slide">
                <div className="projects-swiper">
                  {row.map((project) => (
                    <div
                      key={project.id}
                      className={`project-slide${activeId === project.id ? " active" : ""}`}
                      style={getSlideStyle(project.id)}
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={() => handleMouseLeave(project.id)}
                    >
                      {/* Collapsed card */}
                      <div className="project-card-default">
                        <div className="project-card-img">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="project-card-body">
                          <span className="project-category">{project.category}</span>
                          <h3 className="project-card-title">{project.title}</h3>
                          <p className="project-card-desc">{project.shortDesc}</p>
                        </div>
                      </div>

                      {/* Expanded card */}
                      <div
                        className="project-card-expanded"
                        style={{ backgroundImage: `url(${project.image})` }}
                      >
                        <div className="project-expanded-overlay" />
                        <div className="project-expanded-content">
                          <div className="project-expanded-top">
                            <span className="project-category light">{project.category}</span>
                            <h3 className="project-expanded-title">
                              {project.title}
                            </h3>
                            <p className="project-expanded-desc">{project.longDesc}</p>
                          </div>
                          <ul className="project-features">
                            {project.features.map((feat) => (
                              <li key={feat}>
                                <HiCheckCircle className="feat-icon" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                          <div className="project-tech-tags">
                            <div className="project-tech-tag">
                              {project.tech.map((t) => (
                                <span key={t} className="tech-tag">{t}</span>
                              ))}
                            </div>
                            <a href="#" className="project-link-btn">
                              View Project <HiArrowUpRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
