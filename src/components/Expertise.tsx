import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCubes, faToolbox, faTerminal } from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faPython,
    faJs,
    faHtml5,
    faCss3Alt,
    faJava,
    faSwift,
    faNodeJs,
    faAws,
    faDocker,
    faGitAlt,
    faLinux,
    faGolang,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import '../assets/styles/Expertise.scss';

const ICON_MAP: Record<string, IconDefinition> = {
    "Swift": faSwift,
    "TypeScript": faJs,
    "JavaScript": faJs,
    "Python": faPython,
    "Java": faJava,
    "Go": faGolang,
    "HTML5": faHtml5,
    "CSS": faCss3Alt,
    "React": faReact,
    "React Native": faReact,
    "Next.js": faReact,
    "Node.js": faNodeJs,
    "AWS": faAws,
    "Docker": faDocker,
    "Git": faGitAlt,
    "Linux": faLinux,
};

const languages = [
    "Swift",
    "TypeScript",
    "Java",
    "Python",
    "JavaScript",
    "C#",
    "C++",
    "C",
    "Go",
    "SQL",
    "HTML5",
    "CSS",
];

const frameworks = [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "SwiftUI",
    "SwiftData",
    "Flask",
    ".NET 8",
    "PyTorch",
    "Hugging Face",
    "AWS",
    "Expo",
];

const tools = [
    "Git",
    "Docker",
    "Linux",
    "REST APIs",
    "CI/CD",
    "Postman",
    "Jira",
    "Hadoop",
    "Spark",
    "Splunk",
    "HealthKit",
    "Firebase",
];

function Pill({ label }: { label: string }) {
    const icon = ICON_MAP[label] || faTerminal;
    return (
        <span className="skill-pill">
            <FontAwesomeIcon icon={icon} className="pill-icon" />
            <span>{label}</span>
        </span>
    );
}

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill-group">
                        <div className="group-header">
                            <FontAwesomeIcon icon={faCode} />
                            <h3>Languages</h3>
                        </div>
                        <p>From low-level C to modern TypeScript and Swift.</p>
                        <div className="pill-list">
                            {languages.map((label) => <Pill key={label} label={label} />)}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="group-header">
                            <FontAwesomeIcon icon={faCubes} />
                            <h3>Frameworks</h3>
                        </div>
                        <p>Building full-stack apps, ML pipelines, and cloud-native services.</p>
                        <div className="pill-list">
                            {frameworks.map((label) => <Pill key={label} label={label} />)}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="group-header">
                            <FontAwesomeIcon icon={faToolbox} />
                            <h3>Tools & Platforms</h3>
                        </div>
                        <p>DevOps, data engineering, and developer tooling to ship reliably.</p>
                        <div className="pill-list">
                            {tools.map((label) => <Pill key={label} label={label} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
