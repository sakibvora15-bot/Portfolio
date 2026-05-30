import DATA from "../data/portfolioData";
import { Section, SectionTitle } from "./Section";

const STATS = [
  { n: "3+", label: "Projects Built" },
  { n: "150+", label: "Currencies Supported" },
  { n: "MCA", label: "Current Degree" },
  { n: "React", label: "Primary Framework" },
];

const TAGS = [
  { icon: "📍", text: DATA.location },
  { icon: "📧", text: DATA.email },
  { icon: "🐙", text: DATA.github },
];

export default function About() {
  return (
    <Section id="about" className="about">
      <SectionTitle label="01 · About" title="Who I Am" />

      <div className="about__grid">
        {/* Left column — bio text */}
        <div>
          <p className="about__text">{DATA.summary}</p>
          <p className="about__subtext">
            I thrive on turning complex problems into clean, intuitive
            interfaces. With a background in commerce and a pivot into tech, I
            bring analytical thinking to every project alongside a genuine
            passion for the craft of web development.
          </p>

          <div className="about__tags">
            {TAGS.map(({ icon, text }) => (
              <span key={text} className="about__tag">
                {icon} {text}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — stat cards */}
        <div className="about__stats">
          {STATS.map(({ n, label }) => (
            <div key={label} className="about__stat-card">
              <div className="about__stat-number">{n}</div>
              <div className="about__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
