import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCubes, faToolbox } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
    "Java",
    "Python",
    "C#",
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Go",
    "HTML5",
    "CSS",
    "Swift",
];

const frameworks = [
    "React",
    "Node.js",
    "Flask",
    ".NET 8",
    "PyTorch",
    "Hugging Face Transformers",
    "AWS (DynamoDB, Cognito, EC2, Lambda)",
];

const tools = [
    "REST APIs",
    "Postman",
    "Git",
    "Docker",
    "CI/CD",
    "Hadoop",
    "Spark",
    "Jira",
    "Linux",
    "Splunk",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Languages</h3>
                    <p>Proficient across systems-level and application-level languages, from low-level C to modern TypeScript and Swift.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Proficiencies:</span>
                        {languages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCubes} size="3x"/>
                    <h3>Frameworks</h3>
                    <p>Experience building full-stack applications, ML pipelines, and cloud-native services using industry-standard frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {frameworks.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faToolbox} size="3x"/>
                    <h3>Tools & Technologies</h3>
                    <p>Skilled in DevOps, data engineering, and developer tooling to ship reliable software at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {tools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
