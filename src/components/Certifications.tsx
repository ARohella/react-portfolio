import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Certifications.scss';

const certifications = [
    {
        title: "Junior Software Developer",
        issuer: "Amazon",
        issued: "Jul 2025",
        skills: ["JUnit", "Git", "Java", "Software Development", "OOP"],
        url: "https://www.coursera.org/account/accomplishments/professional-cert/D81S3GDS96HO",
        logo: "/logos/amazon.png",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        issued: "Aug 2024",
        expires: "Aug 2027",
        skills: ["AWS"],
        url: "https://www.credly.com/badges/c74753e3-4d2d-4eb4-a983-6ee6420b7b2e/linked_in_profile",
        logo: "/logos/aws.png",
    },
    {
        title: "Learning Cloud Computing: Core Concepts",
        issuer: "LinkedIn",
        issued: "Jun 2024",
        skills: ["Cloud Computing"],
        url: "https://www.linkedin.com/learning/certificates/b688d0bf12f4b53856c83ebd3458d0a742ed7ea731174826beeca12a311b961c?accountId=36306084&u=36306084&success=true&authUUID=KUulKfM0QaKhTudOKi0EAA%3D%3D",
        logo: "/logos/linkedin.png",
    },
    {
        title: "IBM - Python for Data Science, AI & Development",
        issuer: "Coursera",
        issued: "Jun 2022",
        credentialId: "NMKB238J45BQ",
        skills: ["Python"],
        url: "https://www.coursera.org/account/accomplishments/certificate/NMKB238J45BQ",
        logo: "/logos/coursera.png",
    },
    {
        title: "IBM - Data Analysis with Python",
        issuer: "Coursera",
        issued: "Jun 2022",
        credentialId: "E6T9NBY4VMSN",
        skills: ["Python"],
        url: "https://www.coursera.org/account/accomplishments/certificate/E6T9NBY4VMSN",
        logo: "/logos/coursera.png",
    },
    {
        title: "IBM - Python Project for Data Science",
        issuer: "Coursera",
        issued: "Jun 2022",
        credentialId: "874AWDGVUA8K",
        skills: ["Python"],
        url: "https://www.coursera.org/account/accomplishments/certificate/E6T9NBY4VMSN",
        logo: "/logos/coursera.png",
    },
    {
        title: "IBM - Data Visualization with Python",
        issuer: "Coursera",
        issued: "Jul 2022",
        credentialId: "MDA6LZFMBPXJ",
        skills: ["Python"],
        url: "https://www.coursera.org/account/accomplishments/certificate/MDA6LZFMBPXJ",
        logo: "/logos/coursera.png",
    },
];

function Certifications() {
    return (
        <div className="certifications-container" id="certifications">
            <h1>Certifications</h1>
            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div className="certification" key={index}>
                        <div className="cert-header">
                            <img
                                src={cert.logo}
                                alt={`${cert.issuer} logo`}
                                className="cert-logo"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <FontAwesomeIcon icon={faCertificate} className="cert-logo-fallback hidden" size="2x" />
                            <div className="cert-info">
                                <a href={cert.url} target="_blank" rel="noreferrer">
                                    <h3>{cert.title}</h3>
                                </a>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">
                                    Issued {cert.issued}
                                    {cert.expires && ` · Expires ${cert.expires}`}
                                </p>
                                {cert.credentialId && (
                                    <p className="cert-credential">Credential ID {cert.credentialId}</p>
                                )}
                            </div>
                        </div>
                        <div className="cert-skills">
                            {cert.skills.map((skill, i) => (
                                <span className="cert-skill-tag" key={i}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
