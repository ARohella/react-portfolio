import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFlask, faGraduationCap, faMicrochip, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import DotGrid from './DotGrid';
import '../assets/styles/Timeline.scss';

type Role = {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string;
    tags: string[];
    icon: IconDefinition;
};

const roles: Role[] = [
    {
        title: "SWE Intern — Wire Transfer Team",
        company: "Charles Schwab",
        location: "Southlake, TX",
        date: "Jun 2025 – Aug 2025",
        description: "Built internal systems supporting wire transfers and payment operations.",
        tags: ["C#", ".NET 8", "REST APIs", "CI/CD", "Agile"],
        icon: faBriefcase,
    },
    {
        title: "Fintech Foundations Program Fellow",
        company: "Visa",
        location: "Austin, TX",
        date: "Oct 2025 – Nov 2025",
        description: "Fintech innovation case studies; won 3rd place at capstone.",
        tags: ["Fintech", "Case Studies", "Capstone"],
        icon: faGraduationCap,
    },
    {
        title: "Resident Assistant",
        company: "UTCS Academy for Machine Learning",
        location: "Austin, TX",
        date: "Jun 2025",
        description: "Mentored students through ML fundamentals and coordinated technical workshops.",
        tags: ["ML Mentorship", "Workshops", "Logistics"],
        icon: faChalkboardUser,
    },
    {
        title: "Undergraduate Researcher",
        company: "Living with Robots Laboratory · Texas Robotics",
        location: "Austin, TX",
        date: "Jul 2024 – Oct 2025",
        description: "Human-robot interaction research with NLP and ASR pipelines.",
        tags: ["HRI", "NLP", "ML", "ASR"],
        icon: faFlask,
    },
    {
        title: "Program Assistant",
        company: "The UTCS Academy for Robotics",
        location: "Austin, TX",
        date: "Jun 2024",
        description: "Taught robotics foundations: Linux, C++, Arduino, PID control.",
        tags: ["Linux", "C++", "Arduino", "PID"],
        icon: faMicrochip,
    },
];

function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--tx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--ty', `${e.clientY - rect.top}px`);
    };

    return (
        <div id="history" className="timeline-section" ref={sectionRef} onMouseMove={handleMouseMove}>
            <DotGrid />
            <div className="timeline-bg" />
            <div className="items-container">
                <h1>Career History</h1>
                <div className="timeline">
                    <div className="timeline-rail" />
                    {roles.map((role, i) => (
                        <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-node">
                                <FontAwesomeIcon icon={role.icon} />
                            </div>
                            <div className="timeline-card">
                                <span className="timeline-date">{role.date}</span>
                                <h3 className="timeline-title">{role.title}</h3>
                                <h4 className="timeline-company">{role.company} · <span>{role.location}</span></h4>
                                <p className="timeline-desc">{role.description}</p>
                                <div className="timeline-tags">
                                    {role.tags.map((t) => <span key={t} className="tl-tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
