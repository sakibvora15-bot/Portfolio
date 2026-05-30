import DATA from "../data/portfolioData";
import { Section, SectionTitle } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" className="skills">
      <SectionTitle label="02 · Skills" title="What I Work With" />

      <div className="skills__grid">
        {DATA.skills.map(({ cat, items }) => (
          <div key={cat} className="skills__card">
            <p className="skills__category">{cat}</p>
            <div className="skills__tags">
              {items.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
