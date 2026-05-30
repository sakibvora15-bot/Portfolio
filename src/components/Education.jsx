import DATA from "../data/portfolioData";
import { Section, SectionTitle } from "./Section";

export default function Education() {
  return (
    <Section id="education" className="education">
      <SectionTitle label="04 · Education" title="Academic Journey" />

      <div className="education__timeline">
        <div className="education__line" />

        <div className="education__items">
          {DATA.education.map((ed, i) => (
            <div key={ed.degree} className="education__item">
              <div
                className={`education__dot ${
                  i === 0 ? "education__dot--active" : "education__dot--inactive"
                }`}
              />

              <div className="education__card">
                <div className="education__header">
                  <h3 className="education__degree">{ed.degree}</h3>
                  <span className="education__year">{ed.year}</span>
                </div>
                <p className="education__school">{ed.school}</p>
                <p className="education__grade">{ed.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
