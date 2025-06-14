'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Integration from './components/Integration';
import Footer from './components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'dashboard', 'features', 'analytics', 'integration'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header currentSection={currentSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="dashboard">
          <Dashboard />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="analytics">
          <Analytics />
        </section>
        
        <section id="integration">
          <Integration />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}