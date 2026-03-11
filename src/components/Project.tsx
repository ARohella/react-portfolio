import React from "react";
import '../assets/styles/Project.scss';

const projects = [
    {
        title: "ReadNotes",
        subtitle: "iOS AI Retention App",
        description: "A production iOS app built in Swift/SwiftUI using Apple Speech Recognition and the Gemini API to convert spoken reading notes into single-sentence insights. Features an offline-first SwiftData + CloudKit architecture.",
        url: "https://github.com/ARohella",
    },
    {
        title: "TradeTorch",
        subtitle: "Stock Market Forecasting Tool",
        description: "A full-stack ML stock forecaster using React, Flask, and a GRU-TCN ensemble trained on 10+ years of Yahoo Finance data. Achieved a test loss of 0.0283 with GRU contributing 80%+ of ensemble weight.",
        url: "https://github.com/ARohella",
    },
    {
        title: "Capital One Together",
        subtitle: "Peer-to-Peer Investment Platform",
        description: "An AI-powered peer-to-peer lending platform using React, Node.js, Express, Tailwind, Gemini API, and Supabase. Features a real-time auto-matching engine with dynamic Trust Scores.",
        url: "https://github.com/ARohella",
    },
    {
        title: "Scheduling & Payments Platform",
        subtitle: "Full-Stack Web App",
        description: "A full-stack scheduling web app using React, Node.js, and AWS services (DynamoDB, Cognito). Integrated Stripe for payments, enabling 75+ bookings and 25+ users during pilot testing.",
        url: "https://github.com/ARohella",
    },
    {
        title: "Candlestick Predictor",
        subtitle: "Python ML Project",
        description: "A machine learning project for predicting candlestick patterns in financial markets using Python.",
        url: "https://github.com/ARohella/Candlestick_Predictor",
    },
    {
        title: "Data Structures Visualizer",
        subtitle: "Educational Tool",
        description: "An interactive tool for visualizing common data structures and their operations.",
        url: "https://github.com/ARohella/Data_Structures_Visualizer",
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
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <h3 className="project-subtitle">{project.subtitle}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
