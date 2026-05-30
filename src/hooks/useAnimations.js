import { useState, useEffect, useRef } from "react";

/**
 * Intersection observer hook — triggers a one-time fade-in-up animation
 * when the target element enters the viewport.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/**
 * Tracks which portfolio section is currently in the viewport
 * and returns [activeSection, setActiveSection].
 */
export function useActiveSection() {
  const [active, setActiveState] = useState("Home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "education", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActiveState(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.4 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return [active, setActiveState];
}
