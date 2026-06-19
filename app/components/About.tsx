import { MdOutlineDesktopMac } from "react-icons/md";
import TextSplitSequence from "./TextSplitSequence";
import { FaCode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiAngular } from "react-icons/si";

const services = [
  {
    icon: <MdOutlineDesktopMac size={32} />,
    iconColor: "#198754",
    iconBg: "#e8f5ee",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and pixel-perfect user interfaces with React, Next.js, Angular, TypeScript, Tailwind CSS, and modern frontend architecture.",
  },
  {
    icon: <SiNextdotjs size={30} />,
    iconColor: "#000000",
    iconBg: "#ebebeb",
    title: "React & Next.js Development",
    description:
      "Developing high-performance web applications with React and Next.js, including SSR, SSG, authentication, API integration, and SEO optimization.",
  },
  {
    icon: <SiAngular size={30} />,
    iconColor: "#DD0031",
    iconBg: "#fde8ec",
    title: "Angular Development",
    description:
      "Creating scalable enterprise applications with Angular, RxJS, TypeScript, and component-driven architecture for complex business workflows.",
  },
  {
    icon: <FaCode size={30} />,
    iconColor: "#0ea5e9",
    iconBg: "#e0f4fd",
    title: "Full Stack Development",
    description:
      "Building end-to-end solutions using Node.js, Express.js, MongoDB, REST APIs, authentication systems, and modern frontend frameworks.",
  },
];

export default function About() {
  return (
    <section className="about-section section-pad sect-light">
      <div className="container">
        <div className="row">

          {/* Top — bio */}
          <div className="col-12">
            <div className="title-box">
              <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
              <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">About Me</h2>
            </div>
            <TextSplitSequence
              items={[
                {
                  className: "section-text about-text",
                  text: "I'm a Frontend Developer based in Vadodara, Gujarat, with experience building modern, scalable, and user-focused web applications. I specialize in React.js, Next.js, Angular, and TypeScript, creating pixel-perfect interfaces that combine clean design, strong performance, and exceptional user experience. I enjoy turning complex requirements into intuitive digital products that are both functional and visually engaging.",
                },
                {
                  className: "section-text about-text",
                  text: "Beyond frontend development, I have hands-on experience with Node.js, Express.js, and MongoDB, allowing me to contribute across the full development lifecycle. Currently, I work on enterprise applications where I build reusable components, integrate APIs, optimize application performance, and implement business-critical features. My focus is always on writing clean, maintainable code and delivering solutions that provide real value to users and businesses.",
                },
              ]}
            />
          </div>

          {/* Bottom — what I'm doing */}
          <div className="col-12 mt-50">
            <h3
              className="section-subtitle"
              data-animate="fade-in"
              data-duration="0.5"
            >What I&apos;m Doing</h3>
            <div className="row g-4 mgt" id="services-grid">
              {services.map((service, i) => (
                <div className="col-md-6" key={service.title}>
                  <div
                    className="service-card"
                    data-animate="fade-down"
                    data-trigger="#services-grid"
                    data-delay={i * 0.15}
                    data-duration="0.6"
                    data-distance="30"
                  >
                    <div
                      className="service-card-icon"
                      style={{ color: service.iconColor, backgroundColor: service.iconBg }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="sub-title">{service.title}</h4>
                      <p className="sub-text">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
