import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineMenuBook, MdOutlineWorkspacePremium } from "react-icons/md";

interface EduCard {
  id: number;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  year: string;
  degree: string;
  institution: string;
  score?: string;
  scoreLabel?: string;
  badge?: string;
  description?: string;
  tags: string[];
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
    scoreLabel: "Percentage",
    tags: ["Secondary Education"],
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
    scoreLabel: "Percentage",
    tags: ["Physics", "Chemistry", "Mathematics"],
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
    scoreLabel: "CGPA",
    tags: ["Computer Science & Engineering"],
  },
  {
    id: 4,
    icon: <MdOutlineWorkspacePremium size={30} />,
    iconColor: "#d97706",
    iconBg: "#fef3c7",
    year: "10/2022 – 02/2023",
    degree: "Certifications",
    institution: "Online Platforms",
    badge: "2nd Prize — SSIP Hackathon 2022",
    description: "Developed a portal to report workplace sexual harassment; earned 2nd prize at the state-level innovation competition.",
    tags: ["Innovation", "Web Dev", "Social Impact"],
  },
];

export default function Education() {
  return (
    <section className="education-section">
      <div className="container">
        <div className="title-box">
          <span className="vector-line"></span>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </div>

        <div className="edu-cards-row">
          {cards.map((card) => (
            <div key={card.id} className="edu-card">
              <div
                className="edu-card-icon"
                style={{ color: card.iconColor, backgroundColor: card.iconBg }}
              >
                {card.icon}
              </div>

              <p className="edu-card-year">{card.year}</p>
              <p className="edu-card-degree">{card.degree}</p>
              <p className="edu-card-institution">{card.institution}</p>

              {card.score && (
                <div className="edu-card-score">
                  <span className="edu-card-score-value">{card.score}</span>
                  <span className="edu-card-score-label">{card.scoreLabel}</span>
                </div>
              )}

              {card.badge && (
                <span className="edu-card-badge">{card.badge}</span>
              )}

              {card.description && (
                <p className="edu-card-desc">{card.description}</p>
              )}

              <div className="edu-card-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="edu-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
