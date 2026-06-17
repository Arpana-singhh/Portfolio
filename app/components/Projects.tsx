"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiArrowUpRight, HiCheckCircle } from "react-icons/hi2";

interface Project {
  id: number;
  title: string;
  category: string;
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
];

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const getSlideStyle = (id: number): React.CSSProperties => {
    if (activeId === null) return { flex: "0 1 25%" };
    if (id === activeId)   return { flex: "0 1 50%" };
    return { flex: "0 1 16.66%" };
  };

  const handleMouseEnter = (id: number) => setActiveId(id);
  const handleMouseLeave = () => setActiveId(null);

  return (
  <section className="projects-section">
    <div className="container">
      <div className="title-box">
        <span className="vector-line"></span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-slider-wrap">
        <div className="projects-swiper">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-slide${activeId === project.id ? " active" : ""}`}
              style={getSlideStyle(project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
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
                    <span className="project-category light">
                      {project.category}
                    </span>

                    <h3 className="project-expanded-title">
                      {project.title} <HiArrowUpRight />
                    </h3>

                    <p className="project-expanded-desc">
                      {project.longDesc}
                    </p>
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
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
