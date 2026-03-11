import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Project.scss';

const projects = [
    {
        title: "ReadNotes",
        subtitle: "iOS AI Retention App",
        description: "A production iOS app built in Swift/SwiftUI using Apple Speech Recognition and the Gemini API to convert spoken reading notes into single-sentence insights. Features an offline-first SwiftData + CloudKit architecture.",
        url: "/readnotes",
        internal: true,
    },
    {
        title: "Momentum",
        subtitle: "AI Productivity Dashboard",
        description: "An integrated productivity dashboard combining calendar management, task tracking, habit monitoring, and AI-assisted scheduling. Built with Next.js, TypeScript, Tailwind CSS, and Gemini API.",
        url: "https://github.com/ARohella/Momentum_webapp",
    },
    {
        title: "Stampr",
        subtitle: "iOS City Exploration App",
        description: "A native iOS app for documenting city exploration through check-in journaling with AI-powered location recommendations. Features map interface with emoji pins, gamification, and Gemini-powered suggestions. Built with SwiftUI and MapKit.",
        url: "https://github.com/ARohella/Stampr_app",
    },
    {
        title: "Second Read",
        subtitle: "AI Communication Tool",
        description: "A lightweight AI-assisted communication tool that analyzes message tone in real time and helps users craft emotionally aware replies. Built with React Native (Expo), TypeScript, and Gemini API.",
        url: "https://github.com/ARohella/second_read_app1",
    },
    {
        title: "noFlake",
        subtitle: "Social Accountability App",
        description: "An Evite-style social invitation app with AI-verified photo check-ins and reliability scoring to improve event attendance. Built with React Native, Firebase, and Gemini API.",
        url: "https://github.com/ARohella/noFlake",
    },
    {
        title: "TradeTorch",
        subtitle: "Stock Market Forecasting Tool",
        description: "A full-stack ML stock forecaster using React, Flask, and a GRU-TCN ensemble trained on 10+ years of Yahoo Finance data. Achieved a test loss of 0.0283 with GRU contributing 80%+ of ensemble weight.",
        url: "https://github.com/ARohella/myCandleStick",
    },
    {
        title: "Capital One Together",
        subtitle: "Peer-to-Peer Investment Platform",
        description: "An AI-powered peer-to-peer lending platform using React, Node.js, Express, Tailwind, Gemini API, and Supabase. Features a real-time auto-matching engine with dynamic Trust Scores.",
        url: "https://github.com/adavidryu/c1-together",
    },
    {
        title: "Scheduling & Payments Platform",
        subtitle: "Full-Stack Web App",
        description: "A full-stack scheduling web app using React, Node.js, and AWS services (DynamoDB, Cognito). Integrated Stripe for payments, enabling 75+ bookings and 25+ users during pilot testing.",
        url: "https://github.com/Akshat-and-Aryan/RezHive-React",
    },
    {
        title: "Data Structures Visualizer",
        subtitle: "Educational Tool",
        description: "An interactive tool for visualizing common data structures and their operations.",
        url: "https://github.com/Akshat-and-Aryan/Data-Structures-Visualizer",
    },
    {
        title: "ToDo Chrome Extension",
        subtitle: "Browser Extension",
        description: "A Chrome extension that provides a quickly accessible todo list with functionalities to add, remove, and reorder items. Built with JavaScript and HTML.",
        url: "https://github.com/ARohella/ToDo-Chrome-Extension",
    },
    {
        title: "COVID Tracker",
        subtitle: "Python GUI Application",
        description: "A GUI application to track COVID-19 cases using Python libraries tkinter, matplotlib, and covid.",
        url: "https://github.com/ARohella/CovidTracker",
    },
    {
        title: "Sudoku Puzzle Solver",
        subtitle: "Python Algorithm",
        description: "A Python program that solves sudoku puzzles using recursion and backtracking algorithms.",
        url: "https://github.com/ARohella/PuzzleSolver",
    },
    {
        title: "Weather Forecast",
        subtitle: "Python API Project",
        description: "A weather forecasting application that provides forecasts based on city name using Python.",
        url: "https://github.com/ARohella/WeatherForecast",
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    {(project as any).internal ? (
                        <Link to={project.url}><h2>{project.title}</h2></Link>
                    ) : (
                        <a href={project.url} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    )}
                    <h3 className="project-subtitle">{project.subtitle}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
