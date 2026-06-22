"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
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
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EF Portfolio",
    category: "Frontend Engineering",
    type: "professional",
    shortDesc:
      "A modern financial portfolio platform delivering real-time analytics and investment insights.",
  
    longDesc:
      "Developed the frontend of a sophisticated financial portfolio management platform using Next.js, React, and TypeScript. Built interactive dashboards for portfolio optimization, sector analysis, and performance tracking, while integrating secure authentication, live brokerage connectivity, subscription workflows, and advanced data visualizations to deliver a seamless investment experience.",
  
    features: [
      "Real-time portfolio analytics & optimization",
      "Interactive dashboards and financial visualizations",
      "Live brokerage integration with Plaid & SnapTrade",
      "Secure authentication and subscription management",
      "PWA support with dark mode and offline capabilities",
      "Advanced constraint management for portfolio allocation",
      "Responsive, mobile-first interface with seamless UX",
    ],
  
    image: "https://picsum.photos/seed/ecommerce/600/420",
    link: "https://efportfolio.com/home",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Ant Design",
      "Plotly.js",
      "SCSS",
      "Stripe",
    ],
  },
  {
    id: 2,
    title: "NotifyHub",
    category: "Full Stack",
    type: "personal",
    shortDesc:
      "A secure full-stack notification management platform with real-time delivery and role-based access control.",
  
    longDesc:
      "Built a full-stack notification management platform using the MERN stack with real-time updates via Server-Sent Events (SSE). Implemented a secure Next.js server-side API proxy that routes all requests through Route Handlers, attaches JWT from HttpOnly cookies, and forwards authenticated requests to the backend — ensuring tokens are never exposed to the client. Delivered role-based access control, admin notification targeting, user dashboards with analytics, and a built-in support system for end-to-end communication workflows.",
  
    features: [
      "Real-time notifications via Server-Sent Events (SSE)",
      "Secure Next.js API proxy with HttpOnly JWT handling",
      "Role-based admin & user access control",
      "Notification targeting and delivery tracking",
      "User dashboard with read/unread analytics",
      "Built-in help & support ticketing system",
    ],
  
    image: "https://picsum.photos/seed/healthcare/600/420",
    link: "https://notify-hub-ashy.vercel.app/",

    tech: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Ant Design",
      "SCSS",
      "SSE",
      "JWT",
    ],
  },
  {
    id: 3,
    title: "Rebate My Tax",
    category: "Frontend Engineering",
    type: "professional",
    shortDesc:
      "A modern tax rebate web application for secure filing, scheduling, and claim management.",
  
    longDesc:
      "Built a full-featured tax rebate web application using Next.js 15, React 19, and TypeScript, delivering a fast and secure user experience. Implemented authenticated workflows with NextAuth, scalable state management using Zustand, and robust form handling with Formik and Yup. Designed a responsive, production-ready UI with Ant Design and SCSS, integrating scheduling, e-signature capture, offline storage, and REST API-driven data workflows.",
  
    features: [
      "Secure authentication and role-based workflows",
      "Tax filing and rebate claim management system",
      "Scheduling system with FullCalendar integration",
      "Digital e-signature capture for submissions",
      "Offline support using IndexedDB (Dexie)",
      "Responsive UI with Ant Design and SCSS theming",
    ],
  
    image: "https://picsum.photos/seed/finance/600/420",
    link:"https://www.rebatemytax.com/",
  
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "NextAuth",
      "Zustand",
      "Formik",
      "Yup",
      "Ant Design",
      "SCSS",
      "FullCalendar",
      "Dexie (IndexedDB)",
      "Axios",
    ],
  },
  {
    id: 4,
    title: "Todo Task Manager",
    category: "Full Stack (Angular)",
    type: "personal",
    shortDesc:
      "A modular task management system for daily, monthly, and long-term planning.",
  
    longDesc:
      "Built a full-stack Todo Task Manager application for organizing tasks across daily, monthly, and general planning views. Developed the frontend using Angular 19 with TypeScript, Angular Material, Bootstrap, and GSAP animations, and built a RESTful backend using Node.js, Express.js, MongoDB, and Mongoose. Implemented complete CRUD workflows, modular planners, and reusable UI components for a smooth and responsive task management experience.",
  
    features: [
      "Task CRUD operations (create, update, delete, status tracking)",
      "Quick, Daily, and Monthly planning modules",
      "Date-based task grouping and scheduling",
      "Reusable dialogs, notifications, and UI components",
      "Responsive UI with Angular Material and Bootstrap",
      "Persistent task storage with MongoDB",
    ],
  
    image: "https://picsum.photos/seed/realestate/600/420",
  
    tech: [
      "Angular 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Angular Material",
      "Bootstrap",
      "GSAP",
    ],
  },
  {
    id: 5,
    title: "Jade Scrolls",
    category: "Frontend Engineering",
    type: "professional",
    shortDesc:
      "A feature-rich web novel platform for immersive reading, writing, and content discovery.",
  
    longDesc:
      "Built a full-featured web novel reading platform using Next.js 14, Redux Toolkit, and Firebase, delivering chapter-based reading, author profiles, bookmarks, and subscription workflows. Implemented rich text editing and content creation using CKEditor 5 and TipTap, along with secure authentication, offline-first storage via IndexedDB, and a highly responsive UI designed for a seamless reading experience across devices.",
  
    features: [
      "Chapter-by-chapter reading experience with bookmarking",
      "Author profiles and content discovery system",
      "Rich text editing with CKEditor 5 and TipTap",
      "Offline reading support using IndexedDB (Dexie)",
      "Subscription and payment integration flow",
    ],
  
    image: "https://picsum.photos/seed/education/600/420",
    link: "https://jadescrolls.com/",

    tech: [
      "Next.js 14",
      "Redux Toolkit",
      "Firebase",
      "NextAuth",
      "MUI",
      "Ant Design",
      "Dexie (IndexedDB)",
      "SASS",
      "Formik",
      "Axios",
    ],
  },
  {
    id: 6,
    title: "Online Book Store",
    category: "Full Stack",
    type: "personal",
    shortDesc:
      "A full-stack online bookstore with cart, orders, favourites, and admin management system.",
  
    longDesc:
      "Built a full-stack online book store application using React and Node.js, enabling users to browse books, manage favourites, add items to cart, and place orders with complete order tracking. Implemented secure authentication with JWT, email verification via OTP, and password reset flows. Developed an admin panel for managing books and orders with role-based access control, delivering a scalable and production-ready e-commerce experience for digital book sales.",
  
    features: [
      "User authentication with JWT and protected routes",
      "Email OTP verification and password reset system",
      "Book browsing with details, new releases, and listings",
      "Cart management with quantity and price calculations",
      "Favourites and order history tracking",
      "Admin panel for managing books and orders",
      "Role-based access control for secure routing",
    ],
  
    image: "https://picsum.photos/seed/restaurant/600/420",
    link: "https://book-shop-frontend-eta.vercel.app/",

    tech: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Formik",
      "Yup",
      "Axios",
      "Ant Design",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    id: 7,
    title: "Kavishree Exim Website",
    category: "Frontend Development",
    type: "professional",
    shortDesc:
      "A responsive corporate website for an export-import business showcasing global trade services.",
  
    longDesc:
      "Designed and developed a fully responsive corporate website for an export-import (EXIM) company using HTML, CSS, JavaScript, and Bootstrap. The website presents company services, global trade capabilities, and business information in a clean, professional layout optimized for credibility, responsiveness, and user engagement.",
  
    features: [
      "Responsive multi-page corporate layout using Bootstrap",
      "Service and company profile sections",
      "Clean and professional UI for business presentation",
      "Contact form for customer inquiries",
      "Mobile-first responsive design",
    ],
  
    image: "https://picsum.photos/seed/logistics/600/420",
    link: "https://www.kavishreeexim.com/index.html",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
  },
];

function chunkProjects(list: Project[], size: number) {
  return Array.from({ length: Math.ceil(list.length / size) }, (_, i) =>
    list.slice(i * size, (i + 1) * size)
  );
}

export default function Projects() {
  const [activeId, setActiveId]         = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop]       = useState(false);
  const [activeTab, setActiveTab]       = useState<Tab>("All");
  const [chunkSize, setChunkSize]       = useState(4);
  const [inView, setInView]             = useState(false);
  const [sliderReady, setSliderReady]   = useState(false);
  const hoverTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const sliderWrapRef = useRef<HTMLDivElement>(null);

  const filtered = activeTab === "All"
    ? projects
    : projects.filter(p => p.type === (activeTab === "Professional Projects" ? "professional" : "personal"));

  const rows = chunkProjects(filtered, chunkSize);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1 },
    mode: "snap",
    created: () => setSliderReady(true),
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      setActiveId(null);
    },
  });

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsDesktop(w >= 1201);
      setChunkSize(w <= 767 ? 1 : w <= 991 ? 2 : 4);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => () => { hoverTimers.current.forEach(clearTimeout); }, []);

  // reset slider + active card whenever tab or chunk size changes
  useEffect(() => {
    setCurrentSlide(0);
    setActiveId(null);
    instanceRef.current?.moveToIdx(0, true);
    instanceRef.current?.update();
  }, [activeTab, chunkSize]);

  // observe section entering viewport
  useEffect(() => {
    const el = sliderWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // animate slides + inner elements whenever tab changes or section enters view
  useEffect(() => {
    if (!inView || !sliderWrapRef.current) return;
    const slides = Array.from(
      sliderWrapRef.current.querySelectorAll<HTMLElement>(".project-slide")
    );
    slides.forEach((slide, i) => {
      const d = i * 0.15;
      gsap.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: d, ease: "power2.out" });
      const targets = [
        slide.querySelector<HTMLElement>(".project-card-img"),
        slide.querySelector<HTMLElement>(".project-category"),
        slide.querySelector<HTMLElement>(".project-card-title"),
        slide.querySelector<HTMLElement>(".project-card-desc"),
      ];
      targets.forEach((el, j) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: d + 0.2 + j * 0.15, ease: "power2.out" }
        );
      });
    });
  }, [inView, activeTab]);

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
    if (!isDesktop) return {};
    if (activeId === null) return { flex: "0 1 25%" };
    if (id === activeId)   return { flex: "0 1 50%" };
    return { flex: "0 1 16.66%" };
  };

  const totalSlides = rows.length;

  return (
    <section className="projects-section section-pad sect-white">
      <div className="container">
        <div className="title-box">
          <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
          <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">Featured Projects</h2>

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

        <div className="tab-filters" id="projects-tab-filters">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
              data-animate="fade-in"
              data-trigger="#projects-tab-filters"
              data-delay={i * 0.1}
              data-duration="0.5"
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="projects-slider-wrap"
          ref={sliderWrapRef}
          style={{ opacity: sliderReady ? 1 : 0 }}
        >
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
                          <div className="project-tech-tags">
                            <span className="project-category light">{project.category}</span>
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                View Project <HiArrowUpRight />
                              </a>
                            )}
                          </div>
                           
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
