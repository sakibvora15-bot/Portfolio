import { useFadeIn } from "../hooks/useAnimations";

export function Section({ id, className, children }) {
  const [ref, visible] = useFadeIn();

  return (
    <section id={id} className={`section ${className || ""}`}>
      <div
        ref={ref}
        className={`section__inner fade-enter ${visible ? "fade-enter--visible" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ label, title }) {
  return (
    <div className="section-title">
      <p className="section-title__label">{label}</p>
      <h2 className="section-title__heading">{title}</h2>
    </div>
  );
}
