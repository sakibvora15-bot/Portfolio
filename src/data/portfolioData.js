const DATA = {
  name: "Vora Sakib",
  title: "Frontend Developer",
  subtitle: "React.js · JavaScript · UI Design",
  email: "sakibvora.15@gmail.com",
  phone: "+91 9157571090",
  github: "github.com/sakibvora15-bot",
  location: "Ahmedabad, Gujarat",
  summary:
    "Frontend Web Developer and Software Engineer with hands-on experience building responsive, accessible web applications using React.js, JavaScript (ES6+), HTML5, and CSS3. Currently pursuing a Master of Computer Applications (MCA) at JG University.",
  skills: [
    { cat: "Frontend", items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3"] },
    { cat: "Layout & Style", items: ["CSS Flexbox", "CSS Grid", "Responsive Design", "UI/UX Principles"] },
    { cat: "Integration", items: ["REST API", "DOM Manipulation", "Client-Side Validation"] },
    { cat: "Tools", items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "npm"] },
    { cat: "Other", items: ["Python (Fundamentals)", "Problem Solving", "Team Collaboration"] },
  ],
  projects: [
    {
      name: "Currency Converter",
      stack: ["HTML5", "CSS3", "JavaScript", "REST API"],
      bullets: [
        "Integrates live exchange rate REST API — real-time conversion across 150+ currencies.",
        "Mobile-first, fully responsive UI with progressive enhancement.",
        "Robust client-side validation & error handling; zero user-facing failures in testing.",
        "Optimised DOM manipulation to minimise reflows without external libraries.",
      ],
      icon: "💱",
      color: "#00c6a2",
    },
    {
      name: "Cafe Website Interface",
      stack: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
      bullets: [
        "Multi-section production site: Menu, Gallery, About, Contact.",
        "Pixel-perfect responsive layouts via CSS Grid & Flexbox.",
        "CSS animations, scroll transitions, cohesive brand design system.",
        "Semantic HTML5 for SEO and WCAG accessibility compliance.",
      ],
      icon: "☕",
      color: "#f4a261",
    },
    {
      name: "Personal Portfolio Website",
      stack: ["HTML5", "CSS3", "JavaScript", "React.js"],
      bullets: [
        "Fully responsive portfolio showcasing skills and live projects.",
        "Functional contact form with client-side validation + social links.",
        "SEO best practices: semantic HTML, optimised images, meta tags.",
        "Reusable React.js component architecture for maintainability.",
      ],
      icon: "🚀",
      color: "#457b9d",
    },
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", school: "JG University, Ahmedabad", year: "2025 – Present", grade: "Currently Pursuing" },
    { degree: "Bachelor of Commerce — Accounting (B.Com)", school: "Gujarat University, Ahmedabad", year: "2022 – 2025", grade: "CGPA: 7.04 / 10" },
    { degree: "Higher Secondary (HSC — Grade 12)", school: "GSEB Board, Ahmedabad", year: "2022", grade: "Score: 75%" },
    { degree: "Secondary School (SSC — Grade 10)", school: "GSEB Board, Ahmedabad", year: "2020", grade: "Score: 70%" },
  ],
};

export default DATA;
