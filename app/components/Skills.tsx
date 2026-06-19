"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux,
  SiTailwindcss, SiBootstrap, SiJquery, SiSass,
  SiExpress, SiMongodb, SiMysql,
  SiPostman, SiSwagger,
  SiGit, SiBitbucket, SiGithub, SiJira, SiTrello,
  SiAngular, SiDocker,
} from "react-icons/si";
import { MdOutlineStorage } from "react-icons/md";

type Category = "Frontend" | "Backend" | "API & Testing" | "Version Control";

interface Skill {
  name: string;
  icon: React.ReactElement;
  iconColor: string;
  iconBg: string;
  percent: number;
  category: Exclude<Category, "All">;
}

const skills: Skill[] = [
  // Frontend — frameworks & languages first, then styling, then legacy/CMS
  { name: "React.js",      icon: <FaReact size={36} />,          iconColor: "#00b4d8", iconBg: "#e0f8fd", percent: 92, category: "Frontend" },
  { name: "Next.js",       icon: <SiNextdotjs size={33} />,      iconColor: "#000000", iconBg: "#ebebeb", percent: 85, category: "Frontend" },
  { name: "TypeScript",    icon: <SiTypescript size={33} />,     iconColor: "#3178C6", iconBg: "#e8f0fb", percent: 80, category: "Frontend" },
  { name: "Angular",       icon: <SiAngular size={33} />,        iconColor: "#DD0031", iconBg: "#fde8ec", percent: 72, category: "Frontend" },
  { name: "JavaScript",    icon: <SiJavascript size={33} />,     iconColor: "#b89000", iconBg: "#fdf8dc", percent: 90, category: "Frontend" },
  { name: "Redux Toolkit", icon: <SiRedux size={33} />,          iconColor: "#764ABC", iconBg: "#f0ebfb", percent: 78, category: "Frontend" },
  { name: "Zustand",       icon: <MdOutlineStorage size={36} />, iconColor: "#5c4a1e", iconBg: "#f5f0e6", percent: 75, category: "Frontend" },
  { name: "Tailwind CSS",  icon: <SiTailwindcss size={33} />,    iconColor: "#06B6D4", iconBg: "#e0f9fb", percent: 90, category: "Frontend" },
  { name: "SCSS",          icon: <SiSass size={36} />,            iconColor: "#CC6699", iconBg: "#fbeef5", percent: 88, category: "Frontend" },
  { name: "Bootstrap",     icon: <SiBootstrap size={33} />,      iconColor: "#7952B3", iconBg: "#f0ebfb", percent: 88, category: "Frontend" },
  { name: "HTML5",         icon: <FaHtml5 size={36} />,          iconColor: "#E34F26", iconBg: "#fdeee9", percent: 95, category: "Frontend" },
  { name: "CSS3",          icon: <FaCss3Alt size={36} />,        iconColor: "#1572B6", iconBg: "#e6f2fb", percent: 92, category: "Frontend" },
  { name: "jQuery",        icon: <SiJquery size={33} />,         iconColor: "#0769AD", iconBg: "#e5f0fb", percent: 82, category: "Frontend" },
  { name: "WordPress",     icon: <FaWordpress size={36} />,       iconColor: "#21759B", iconBg: "#e5f3f9", percent: 70, category: "Frontend" },
  // Backend — runtime → framework → databases → infra
  { name: "Node.js",    icon: <FaNodeJs size={36} />,   iconColor: "#339933", iconBg: "#e8f8e8", percent: 75, category: "Backend" },
  { name: "Express.js", icon: <SiExpress size={33} />,  iconColor: "#000000", iconBg: "#ebebeb", percent: 72, category: "Backend" },
  { name: "MongoDB",    icon: <SiMongodb size={33} />,  iconColor: "#47A248", iconBg: "#eaf7ea", percent: 78, category: "Backend" },
  { name: "SQL",        icon: <SiMysql size={33} />,    iconColor: "#4479A1", iconBg: "#e6f0f8", percent: 70, category: "Backend" },
  { name: "Docker",     icon: <SiDocker size={33} />,   iconColor: "#2496ED", iconBg: "#e5f4fd", percent: 60, category: "Backend" },
  // API & Testing
  { name: "Postman", icon: <SiPostman size={33} />, iconColor: "#FF6C37", iconBg: "#fff0ea", percent: 88, category: "API & Testing" },
  { name: "Swagger", icon: <SiSwagger size={33} />, iconColor: "#6aab00", iconBg: "#f0f9e5", percent: 80, category: "API & Testing" },
  // Version Control — core VCS first, then platforms, then PM tools
  { name: "Git",       icon: <SiGit size={33} />,       iconColor: "#F05032", iconBg: "#feeeeb", percent: 90, category: "Version Control" },
  { name: "GitHub",    icon: <SiGithub size={33} />,    iconColor: "#181717", iconBg: "#ebebeb", percent: 90, category: "Version Control" },
  { name: "Bitbucket", icon: <SiBitbucket size={33} />, iconColor: "#0052CC", iconBg: "#e5ecf9", percent: 82, category: "Version Control" },
  { name: "Jira",      icon: <SiJira size={33} />,      iconColor: "#0052CC", iconBg: "#e5ecf9", percent: 78, category: "Version Control" },
  { name: "Trello",    icon: <SiTrello size={33} />,    iconColor: "#0052CC", iconBg: "#e5ecf9", percent: 80, category: "Version Control" },
];

const TABS: Category[] = ["Frontend", "Backend", "API & Testing", "Version Control"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const animateCards = useCallback(() => {
    if (!gridRef.current) return;
    const cards = Array.from(
      gridRef.current.querySelectorAll<HTMLElement>(".skill-card")
    );
    cards.forEach((card) => {
      card.classList.remove("active");
      gsap.killTweensOf(card);
      gsap.set(card, { opacity: 0, y: -30 });
    });
    cards.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.07,
        ease: "power2.out",
        onComplete: () => card.classList.add("active"),
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) animateCards();
  }, [inView, activeTab, animateCards]);

  const handleTab = (tab: Category) => setActiveTab(tab);

  const filtered = skills.filter(s => s.category === activeTab);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;   // -0.5 → 0.5
    const y = (e.clientY - top)  / height - 0.5;
    const rotateX = -(y * 22).toFixed(2);            // top edge tilts toward viewer
    const rotateY =  (x * 22).toFixed(2);
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = "transform 0.08s ease";
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.45s ease";
    card.style.transform  = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <section className="skills-section section-pad bg-white" ref={sectionRef}>
      <div className="container">

        <div className="title-box">
          <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
          <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">My Tech Stack</h2>
        </div>

        <div className="tab-filters" id="tab-filters">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === tab ? " active" : ""}`}
              onClick={() => handleTab(tab)}
              data-animate="fade-in"
              data-trigger="#tab-filters"
              data-delay={i * 0.1}
              data-duration="0.5"
              data-once="false"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid" ref={gridRef}>
          {filtered.map(skill => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--skill-percent": `${skill.percent}%` } as React.CSSProperties}
              onMouseMove={onMouseMove}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div
                className="skill-card-icon"
                style={{ color: skill.iconColor, backgroundColor: skill.iconBg }}
              >
                {skill.icon}
              </div>
              <p className="skill-card-name">{skill.name}</p>
              <div className="skill-progress-wrap">
                <div
                  className="skill-progress-bar"
                  style={{ background: `linear-gradient(90deg, ${skill.iconColor}99, ${skill.iconColor})` }}
                />
              </div>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
