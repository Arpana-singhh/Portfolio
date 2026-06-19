import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineMenuBook } from "react-icons/md";

interface EduCard {
  id: number;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  year: string;
  degree: string;
  institution: string;
  score?: string;
}

const cards: EduCard[] = [
  {
    id: 1,
    icon: <MdOutlineSchool size={30} />,
    iconColor: "#0077e6",
    iconBg: "#e0f0fd",
    year: "06/2017 – 03/2018",
    degree: "S.S.C",
    institution: "St Joseph English Higher Secondary School",
    score: "70.76%",
  },
  {
    id: 2,
    icon: <MdOutlineMenuBook size={30} />,
    iconColor: "#7c3aed",
    iconBg: "#ede9fe",
    year: "06/2019 – 03/2020",
    degree: "H.S.C (PCM)",
    institution: "Mother Of Hope School, Aashadham",
    score: "70.76%",
  },
  {
    id: 3,
    icon: <FaGraduationCap size={30} />,
    iconColor: "#059669",
    iconBg: "#d1fae5",
    year: "08/2020 – 05/2024",
    degree: "B.E. CSE",
    institution: "Babaria Institute of Technology",
    score: "9.28 CGPA",
  },
];

export default function Education() {
  return (
    <section className="education-section section-pad sect-light">
      <div className="container">
        <div className="title-box">
          <span className="vector-line" data-animate="line-expand" data-duration="0.5" data-ease="power2.out"></span>
          <h2 className="section-title" data-animate="slide-right" data-delay="0.5" data-duration="0.5" data-distance="20">Education</h2>
        </div>

        <div className="edu-cards-row" id="edu-cards-row">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="edu-card"
              style={{ "--icon-color": card.iconColor } as React.CSSProperties} 
              data-animate="fade-up"
              data-delay={i * 0.1}
              data-duration="0.6"
              data-distance="40"
              >
              <div
                className="edu-card-icon"
                style={{ color: card.iconColor, backgroundColor: card.iconBg }}
                data-animate="pop"
                data-delay="0.5"
                data-duration="0.2"
                data-distance="20"
                data-ease="back.out(1.7)"
                >
                {card.icon}
              </div>

              <div className="edu-card-content">
                <div className="edu-card-score">
                  <p className="edu-card-degree">{card.degree}</p>
                  <p className="edu-card-year">{card.year}</p>
                </div>
                {card.institution && (
                  <p className="edu-card-institution">{card.institution}</p>
                )}
                 <span className="edu-card-score-value">{card.score}</span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
