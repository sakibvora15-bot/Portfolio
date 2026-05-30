import { useState } from "react";
import DATA from "../data/portfolioData";
import { Section, SectionTitle } from "./Section";

const INFO_ITEMS = [
  { icon: "📧", label: "Email", val: DATA.email },
  { icon: "📞", label: "Phone", val: DATA.phone },
  { icon: "🐙", label: "GitHub", val: DATA.github },
  { icon: "📍", label: "Location", val: DATA.location },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <Section id="contact" className="contact">
      <SectionTitle label="05 · Contact" title="Let's Work Together" />

      <div className="contact__grid">
        {/* Left — intro & info */}
        <div>
          <p className="contact__intro">
            I'm actively seeking internship and entry-level frontend / software
            engineering roles. Whether you have a project in mind or just want to
            connect — let's talk!
          </p>

          {INFO_ITEMS.map(({ icon, label, val }) => (
            <div key={label} className="contact__info-item">
              <span className="contact__info-icon">{icon}</span>
              <div>
                <p className="contact__info-label">{label}</p>
                <p className="contact__info-value">{val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div className="contact__form-card">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✅</div>
              <h3 className="contact__success-title">Message Received!</h3>
              <p className="contact__success-text">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  className="contact__input"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  className="contact__input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field" style={{ marginBottom: 24 }}>
                <label className="contact__label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="contact__textarea"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact__submit">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
