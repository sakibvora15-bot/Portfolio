import { useState, useEffect } from "react";

const LINKS = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

export default function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <span className="nav__logo">
        VS<span className="nav__logo-dot">.</span>
      </span>

      <button
        className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="nav__hamburger-line" />
        <span className="nav__hamburger-line" />
        <span className="nav__hamburger-line" />
      </button>

      <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        {LINKS.map((link) => (
          <button
            key={link}
            className={`nav__link ${active === link ? "nav__link--active" : ""}`}
            onClick={() => navigate(link)}
          >
            {link}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download="Vora_Sakib_Resume.pdf"
          className="nav__resume-btn"
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
