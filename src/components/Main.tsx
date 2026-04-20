import React, { useEffect, useRef, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../assets/styles/Main.scss';

const ROLES = [
  "Software Engineer",
  "iOS Developer",
  "Builder",
  "Hybrid Athlete",
];

function Main() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const atFull = !deleting && displayed === current;
    const atEmpty = deleting && displayed === "";

    if (atFull) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (atEmpty) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = imageRef.current;
      if (!el) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="hero-bg-layer" />
        <div className="hero-grid" />

        <div className="image-wrapper" ref={imageRef}>
          <div className="image-ring" />
          <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="Akshat Rohella" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ARohella" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/akshatrohella/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>

          <h1>Akshat Rohella</h1>

          <p className="tagline">
            <span className="tagline-static">I'm a </span>
            <span className="tagline-dynamic">{displayed}</span>
            <span className="caret" aria-hidden="true">|</span>
          </p>

          <p className="sub-tagline">CS + Statistics & Data Science @ UT Austin '26</p>

          <div className="hero-cta">
            <button className="cta-primary" onClick={scrollToProjects}>
              See my work
              <ArrowDownwardIcon />
            </button>
            <a
              className="cta-secondary"
              href="https://www.linkedin.com/in/akshatrohella/"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/ARohella" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/akshatrohella/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
