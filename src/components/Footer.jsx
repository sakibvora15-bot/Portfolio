export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <span className="footer__logo">
        VS<span className="footer__logo-dot">.</span>
      </span>

      <p className="footer__copy">© 2025 Vora Sakib · Built with React.js</p>

      <div className="footer__links">
        {["Home", "Projects", "Contact"].map((link) => (
          <button
            key={link}
            className="footer__link"
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}
