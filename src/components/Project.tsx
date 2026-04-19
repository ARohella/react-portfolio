import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/styles/Project.scss';

type ProjectItem = {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    videoId?: string;
    github?: string;
    liveDemo?: string;
    devpost?: string;
    internal?: string;
    inProgress?: boolean;
    gradient?: string;
};

const featured: ProjectItem[] = [
    {
        title: "Hoot",
        subtitle: "AI Market Tutor",
        description: "An AI owl tutor that turns any stock chart into an interactive lesson. Drag across a chart region and Gemini explains why the price moved, then generates quizzes and spaced-repetition flashcards. Built in 24 hours at Hook 'Em Hacks 2026.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Gemini"],
        videoId: "4kQi3DuMSqk",
        github: "https://github.com/ARohella/hoot",
        liveDemo: "https://use-hoot.vercel.app/",
        devpost: "https://devpost.com/software/nnnn-gxjt1f",
    },
    {
        title: "ReadNotes",
        subtitle: "iOS AI Retention App",
        description: "A production iOS app built in Swift/SwiftUI using Apple Speech Recognition and the Gemini API to convert spoken reading notes into single-sentence insights. Features an offline-first SwiftData + CloudKit architecture.",
        tags: ["Swift", "SwiftUI", "SwiftData", "Gemini"],
        internal: "/readnotes",
        gradient: "linear-gradient(135deg, #1a1f2e 0%, #BF5700 100%)",
    },
    {
        title: "Momentum",
        subtitle: "AI Productivity Dashboard",
        description: "An integrated productivity dashboard combining calendar management, task tracking, habit monitoring, and AI-assisted scheduling. Built with Next.js, TypeScript, Tailwind CSS, and Gemini API.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Gemini"],
        videoId: "i-ckLLprsCw",
        github: "https://github.com/ARohella/Momentum_webapp",
        liveDemo: "https://use-momentum-one.vercel.app/",
    },
    {
        title: "Allocare",
        subtitle: "AI Budgeting & Financial Insights App",
        description: "An AI-powered personal finance app using React Native, Node.js, and Plaid APIs for automated budgeting. Features OCR receipt categorization, recurring payment detection, an LLM financial advisor chat, and real-time spending alerts. Leading a team of 8 engineers.",
        tags: ["React Native", "Node.js", "Plaid", "OpenAI"],
        inProgress: true,
        gradient: "linear-gradient(135deg, #0d1116 0%, #1e3a5f 50%, #BF5700 100%)",
    },
];

const others: ProjectItem[] = [
    {
        title: "Bruh",
        subtitle: "iOS Screen Time Intervention App",
        description: "A native iOS app that intercepts shielded app launches with personalized nudges — showing your own reasons for quitting, attempt counts, and alternative suggestions. Built with 3 app extension targets using FamilyControls + DeviceActivity.",
        tags: ["Swift", "SwiftUI", "SwiftData", "FamilyControls"],
        videoId: "hGFYjuOtjxs",
        github: "https://github.com/ARohella/bruh_screentime_app",
    },
    {
        title: "IronPace",
        subtitle: "Hybrid Athlete Training App",
        description: "A native iOS training app that merges lifting and cardio with an ACWR-based readiness engine. Uses TRIMP, EWMA, and weighted signals to auto-adjust lifting targets based on fatigue. Integrates HealthKit and Strava with a merge layer.",
        tags: ["Swift", "SwiftUI", "HealthKit", "Strava"],
        videoId: "TcMRbh4GGtQ",
        github: "https://github.com/ARohella/ironpace_app",
    },
    {
        title: "Stampr",
        subtitle: "iOS City Exploration App",
        description: "A native iOS app for documenting city exploration through check-in journaling with AI-powered location recommendations. Features map interface with emoji pins and gamification.",
        tags: ["Swift", "SwiftUI", "MapKit", "Gemini"],
        videoId: "OXXiUoutLqk",
        github: "https://github.com/ARohella/Stampr_app",
    },
    {
        title: "Second Read",
        subtitle: "AI Communication Tool",
        description: "A lightweight AI-assisted communication tool that analyzes message tone in real time and helps users craft emotionally aware replies.",
        tags: ["React Native", "TypeScript", "Expo", "Gemini"],
        videoId: "eRtL4cs831M",
        github: "https://github.com/ARohella/second_read_app1",
    },
    {
        title: "noFlake",
        subtitle: "Social Accountability App",
        description: "An Evite-style social invitation app with AI-verified photo check-ins and reliability scoring to improve event attendance.",
        tags: ["React Native", "Firebase", "Gemini"],
        videoId: "3lTIhl7wRqs",
        github: "https://github.com/ARohella/noFlake",
    },
    {
        title: "TradeTorch",
        subtitle: "Stock Forecasting Tool",
        description: "A full-stack ML stock forecaster using React, Flask, and a GRU-TCN ensemble trained on 10+ years of Yahoo Finance data. Test loss of 0.0283 with GRU contributing 80%+ of ensemble weight.",
        tags: ["Python", "React", "Flask", "PyTorch"],
        github: "https://github.com/ARohella/myCandleStick",
        gradient: "linear-gradient(135deg, #0d1116 0%, #3a1f0d 100%)",
    },
    {
        title: "Capital One Together",
        subtitle: "Peer-to-Peer Investment Platform",
        description: "A peer-to-peer lending platform with a real-time auto-matching engine and dynamic Trust Scores. Built with React, Node.js, Gemini API, and Supabase.",
        tags: ["React", "Node.js", "Supabase", "Gemini"],
        videoId: "OHiCRaskXx0",
        github: "https://github.com/adavidryu/c1-together",
        devpost: "https://devpost.com/software/c1-together",
    },
    {
        title: "Scheduling & Payments Platform",
        subtitle: "Full-Stack Web App",
        description: "A full-stack scheduling web app using React, Node.js, and AWS (DynamoDB, Cognito). Integrated Stripe for payments, enabling 75+ bookings and 25+ users during pilot testing.",
        tags: ["React", "Node.js", "AWS", "Stripe"],
        github: "https://github.com/Akshat-and-Aryan/RezHive-React",
        gradient: "linear-gradient(135deg, #0d1116 0%, #1a3a4f 100%)",
    },
    {
        title: "Data Structures Visualizer",
        subtitle: "Interactive Web Tool",
        description: "An interactive tool for visualizing common data structures and their operations.",
        tags: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/Akshat-and-Aryan/Data-Structures-Visualizer",
        gradient: "linear-gradient(135deg, #0d1116 0%, #2a1f3a 100%)",
    },
    {
        title: "ToDo Chrome Extension",
        subtitle: "Browser Extension",
        description: "A Chrome extension that provides a quickly accessible todo list with functionality to add, remove, and reorder items.",
        tags: ["JavaScript", "HTML", "Chrome"],
        github: "https://github.com/ARohella/ToDo-Chrome-Extension",
        gradient: "linear-gradient(135deg, #0d1116 0%, #3a2f1a 100%)",
    },
    {
        title: "COVID Tracker",
        subtitle: "Python GUI Application",
        description: "A GUI application to track COVID-19 cases using Python libraries tkinter, matplotlib, and covid.",
        tags: ["Python", "Tkinter", "Matplotlib"],
        github: "https://github.com/ARohella/CovidTracker",
        gradient: "linear-gradient(135deg, #0d1116 0%, #1a3a1f 100%)",
    },
    {
        title: "Sudoku Puzzle Solver",
        subtitle: "Algorithm Project",
        description: "A Python program that solves sudoku puzzles using recursion and backtracking algorithms.",
        tags: ["Python"],
        github: "https://github.com/ARohella/PuzzleSolver",
        gradient: "linear-gradient(135deg, #0d1116 0%, #3a1f1f 100%)",
    },
    {
        title: "Weather Forecast",
        subtitle: "API Project",
        description: "A weather forecasting application that provides forecasts based on city name using Python.",
        tags: ["Python", "REST API"],
        github: "https://github.com/ARohella/WeatherForecast",
        gradient: "linear-gradient(135deg, #0d1116 0%, #1f2a3a 100%)",
    },
];

function ProjectCard({ project, featured: isFeatured }: { project: ProjectItem; featured?: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.setProperty('--rx', `0deg`);
        card.style.setProperty('--ry', `0deg`);
    };

    const thumbnail = project.videoId
        ? `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`
        : null;

    const handleMediaClick = (e: React.MouseEvent) => {
        if (project.videoId) {
            e.preventDefault();
            e.stopPropagation();
            setModalOpen(true);
        }
    };

    return (
        <>
            <div
                ref={cardRef}
                className={`project-card ${isFeatured ? 'featured' : 'compact'}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="card-glow" />
                <div className="card-inner">
                    <div
                        className="card-media"
                        onClick={handleMediaClick}
                        style={!thumbnail ? { background: project.gradient || 'linear-gradient(135deg, #0d1116, #BF5700)' } : undefined}
                    >
                        {thumbnail ? (
                            <>
                                <img src={thumbnail} alt={`${project.title} demo`} loading="lazy" />
                                <div className="play-overlay">
                                    <PlayCircleOutlineIcon />
                                    <span>Watch Demo</span>
                                </div>
                            </>
                        ) : (
                            <div className="gradient-placeholder">
                                <span className="placeholder-title">{project.title}</span>
                            </div>
                        )}
                        {project.inProgress && <span className="in-progress-badge">In Progress</span>}
                    </div>

                    <div className="card-body">
                        <div className="card-header">
                            {project.internal ? (
                                <Link to={project.internal}><h2>{project.title}</h2></Link>
                            ) : project.github || project.liveDemo ? (
                                <a href={project.liveDemo || project.github} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                            ) : (
                                <h2>{project.title}</h2>
                            )}
                            <h3 className="project-subtitle">{project.subtitle}</h3>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="card-tags">
                            {project.tags.map((tag, i) => (
                                <span className="tag" key={i}>{tag}</span>
                            ))}
                        </div>

                        <div className="card-links">
                            {project.internal && (
                                <Link to={project.internal} className="card-link primary">
                                    <LaunchIcon /> Details
                                </Link>
                            )}
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="card-link primary">
                                    <LaunchIcon /> Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="card-link">
                                    <GitHubIcon /> Code
                                </a>
                            )}
                            {project.devpost && (
                                <a href={project.devpost} target="_blank" rel="noreferrer" className="card-link">
                                    <EmojiEventsIcon /> Devpost
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && project.videoId && (
                <VideoModal videoId={project.videoId} title={project.title} onClose={() => setModalOpen(false)} />
            )}
        </>
    );
}

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return createPortal(
        <div className="video-modal-backdrop" onClick={onClose}>
            <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <CloseIcon />
                </button>
                <div className="video-wrapper">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="featured-grid">
                {featured.map((project, index) => (
                    <ProjectCard key={`featured-${index}`} project={project} featured />
                ))}
            </div>

            <h2 className="more-projects-heading">More projects</h2>
            <div className="compact-grid">
                {others.map((project, index) => (
                    <ProjectCard key={`other-${index}`} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Project;
