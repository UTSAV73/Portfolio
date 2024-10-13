import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar';  
import Home from '../contents/Home';
import About from '../contents/About';
import Education from '../contents/Education';
import Skills from '../contents/Skills';
import Contact from '../contents/Contact';
import Resume from '../contents/PDF';
import ParticlesComponent from '../components/Particles';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                    <ParticlesComponent id="particles" />
            </div>
        </Router>
    );
}

export default App;
