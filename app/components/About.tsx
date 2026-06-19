import { MdOutlineDesktopMac } from "react-icons/md";
import TextSplitSequence from "./TextSplitSequence";
import { FaCode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiAngular } from "react-icons/si";

const services = [
  {
    icon: <FaCode size={30} />,
    iconColor: "#0ea5e9",
    iconBg: "#e0f4fd",
    title: "Web Development",
    description:
      "End-to-end web solutions — from architecture to deployment — crafted for performance, scalability, and reliability.",
  },
  {
    icon: <SiNextdotjs size={30} />,
    iconColor: "#000000",
    iconBg: "#ebebeb",
    title: "React & Next.js Development",
    description:
      "Developing fast, SEO-friendly applications with React and Next.js, leveraging SSR, SSG, and the App Router.",
  },
  {
    icon: <SiAngular size={30} />,
    iconColor: "#DD0031",
    iconBg: "#fde8ec",
    title: "Angular Development",
    description:
      "Creating enterprise-grade SPAs with Angular, delivering maintainable, component-driven architecture at scale.",
  },
  {
    icon: <MdOutlineDesktopMac size={32} />,
    iconColor: "#198754",
    iconBg: "#e8f5ee",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and pixel-perfect interfaces using modern HTML, CSS, and JavaScript standards.",
  },
];

export default function About() {
  return (
    <section className="about-section section-pad bg-light">
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
                  text: "I'm a Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
                },
                {
                  className: "section-text about-text",
                  text: "My job is to build your website so that it is functional and user-friendly but at the same time attractive. I add a personal touch to your product and make sure it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.",
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
              data-once="false"
            >What I&apos;m Doing</h3>
            <div className="row g-4" id="services-grid">
              {services.map((service, i) => (
                <div className="col-md-6" key={service.title}>
                  <div
                    className="service-card"
                    data-animate="fade-down"
                    data-trigger="#services-grid"
                    data-delay={i * 0.15}
                    data-duration="0.6"
                    data-distance="30"
                    data-once="false"
                  >
                    <div
                      className="service-card-icon"
                      style={{ color: service.iconColor, backgroundColor: service.iconBg }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="service-card-title">{service.title}</h4>
                      <p className="service-card-text">{service.description}</p>
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
