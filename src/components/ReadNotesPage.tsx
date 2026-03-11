import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/ReadNotesPage.scss';

const techStack = [
    { category: "Language", items: "Swift, SwiftUI" },
    { category: "AI / NLP", items: "Gemini API, Apple Speech Recognition" },
    { category: "Data", items: "SwiftData, CloudKit" },
    { category: "Architecture", items: "Offline-first, MVVM" },
];

const features = [
    {
        title: "Capture what matters",
        description: "Take voice or text notes while reading. ReadNotes organizes them by book and chapter automatically.",
        image: "/readnotes/1.png",
    },
    {
        title: "Speak while reading",
        description: "Tap to speak your thoughts as you read. Apple Speech Recognition transcribes your notes in real-time.",
        image: "/readnotes/2.png",
    },
    {
        title: "Instant key takeaways",
        description: "Generate AI-powered single-sentence insights from your raw notes using the Gemini API. Get a cleaned note and a key takeaway instantly.",
        image: "/readnotes/3.png",
    },
    {
        title: "Track your books",
        description: "Manage your reading list with To Read, Reading, and Finished categories. Track page progress for each book.",
        image: "/readnotes/4.png",
    },
    {
        title: "See your progress",
        description: "View detailed book information including reading dates, page progress, and completion status.",
        image: "/readnotes/5.png",
    },
    {
        title: "Make it a habit",
        description: "Track reading streaks, total time, books read, notes taken, and average reading speed. Set daily goals and build consistency.",
        image: "/readnotes/6.png",
    },
];

function ReadNotesPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="readnotes-page">
            <div className="readnotes-hero">
                <Link to="/" className="back-link">
                    <ArrowBackIcon /> Back to Portfolio
                </Link>
                <div className="hero-content">
                    <img
                        src={`${process.env.PUBLIC_URL}/readnotes/title.png`}
                        alt="ReadNotes Logo"
                        className="readnotes-logo"
                    />
                    <div className="hero-text">
                        <h1>ReadNotes</h1>
                        <p className="tagline">Turn your reading into lasting knowledge</p>
                        <p className="description">
                            ReadNotes is an iOS app that helps you capture spoken reading notes and transforms them into
                            single-sentence insights using AI. Built for readers who want to retain more from every book.
                        </p>
                        <a
                            href="https://apps.apple.com/us/app/readnotes/id6757447671"
                            target="_blank"
                            rel="noreferrer"
                            className="app-store-btn"
                        >
                            <AppleIcon /> Download on the App Store
                        </a>
                    </div>
                </div>
            </div>

            <div className="readnotes-tech">
                <h2>Built With</h2>
                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <div className="tech-item" key={index}>
                            <h3>{tech.category}</h3>
                            <p>{tech.items}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="readnotes-features">
                <h2>Features</h2>
                <div className="features-list">
                    {features.map((feature, index) => (
                        <div className={`feature-row ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
                            <div className="feature-image">
                                <img
                                    src={`${process.env.PUBLIC_URL}${feature.image}`}
                                    alt={feature.title}
                                />
                            </div>
                            <div className="feature-text">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReadNotesPage;
