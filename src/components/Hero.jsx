import { useFadeIn } from "../hooks/useAnimations";

export default function Hero({ setActive }) {
  const [ref, visible] = useFadeIn(0.01);

  const scrollTo = (id, section) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <section id="home" className="hero">
      {/* Decorative grid lines */}
      <div className="hero__grid" />

      {/* Floating blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div
        ref={ref}
        className={`hero__content fade-enter ${visible ? "fade-enter--visible" : ""}`}
      >
        <p className="hero__tag">Available for Internship &amp; Entry-Level Roles</p>

        <h1 className="hero__name">Vora Sakib</h1>

        <h2 className="hero__role">
          Frontend Developer{" "}
          <span className="hero__role-separator">·</span> React.js{" "}
          <span className="hero__role-separator">·</span> UI Design
        </h2>

        <p className="hero__desc">
          Building responsive, accessible web experiences with clean code and
          purposeful design.
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn-primary"
            onClick={() => scrollTo("projects", "Projects")}
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download="Vora_Sakib_Resume.pdf"
            className="hero__btn-resume"
          >
            📄 Download Resume
          </a>
          <button
            className="hero__btn-secondary"
            onClick={() => scrollTo("contact", "Contact")}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
