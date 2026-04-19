import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Certifications,
} from "./components";
import FadeIn from './components/FadeIn';
import Reveal from './components/Reveal';
import ReadNotesPage from './components/ReadNotesPage';
import './index.scss';

function Portfolio({mode, handleModeChange}: {mode: string, handleModeChange: () => void}) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
        </FadeIn>
        <Reveal><Expertise/></Reveal>
        <Reveal><Timeline/></Reveal>
        <Reveal><Project/></Reveal>
        <Reveal><Certifications/></Reveal>
        <Reveal><Contact/></Reveal>
        <Footer />
    </div>
    );
}

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio mode={mode} handleModeChange={handleModeChange} />} />
            <Route path="/readnotes" element={
                <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                    <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                    <ReadNotesPage />
                    <Footer />
                </div>
            } />
        </Routes>
    </Router>
    );
}

export default App;
