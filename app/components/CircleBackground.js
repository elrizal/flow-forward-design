'use client';

import { useEffect, useState } from 'react';

export default function CircleBackground() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate overall scroll progress
      const totalScroll = documentHeight - windowHeight;
      const progress = scrollPosition / totalScroll;
      setScrollProgress(progress);

      // Determine active section
      const sections = document.querySelectorAll('[data-section]');
      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          current = index;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color transitions based on section
  const colors = [
    { bg: '#1a2332', circle: '#8b2635' },  // Dark blue / Burgundy
    { bg: '#2a3442', circle: '#d4af37' },  // Dark blue light / Gold
    { bg: '#1a2332', circle: '#a53545' },  // Dark blue / Burgundy light
    { bg: '#2a3442', circle: '#f0cb5c' },  // Dark blue light / Gold light
  ];

  const currentColor = colors[activeSection % colors.length];
  const nextColor = colors[(activeSection + 1) % colors.length];

  return (
    <div className="circle-background">
      {/* Base background layer */}
      <div
        className="circle-bg-layer"
        style={{
          backgroundColor: currentColor.bg
        }}
      />

      {/* Animated SVG circles */}
      <svg className="circle-bg-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="circleGradient1">
            <stop offset="0%" stopColor={currentColor.circle} stopOpacity="0.4" />
            <stop offset="50%" stopColor={currentColor.circle} stopOpacity="0.2" />
            <stop offset="100%" stopColor={currentColor.circle} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="circleGradient2">
            <stop offset="0%" stopColor={nextColor.circle} stopOpacity="0.3" />
            <stop offset="50%" stopColor={nextColor.circle} stopOpacity="0.15" />
            <stop offset="100%" stopColor={nextColor.circle} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Large background circle - moves up */}
        <circle
          cx="50"
          cy={100 + scrollProgress * -50}
          r="60"
          fill="url(#circleGradient1)"
          className="circle-bg-shape circle-bg-large"
        />

        {/* Medium circle - moves diagonally */}
        <circle
          cx={70 - scrollProgress * 20}
          cy={30 + scrollProgress * 40}
          r="40"
          fill="url(#circleGradient2)"
          className="circle-bg-shape circle-bg-medium"
        />

        {/* Small accent circle - moves opposite */}
        <circle
          cx={20 + scrollProgress * 30}
          cy={60 - scrollProgress * 30}
          r="25"
          fill="url(#circleGradient1)"
          className="circle-bg-shape circle-bg-small"
          opacity="0.6"
        />

        {/* Transitioning circle - expands on section change */}
        <circle
          cx="50"
          cy="50"
          r={activeSection * 15 + 20}
          fill={currentColor.circle}
          className="circle-bg-transition"
          opacity="0.1"
        />
      </svg>

      {/* Floating orbs overlay */}
      <div className="circle-bg-orbs">
        <div
          className="orb orb-1"
          style={{ backgroundColor: currentColor.circle }}
        />
        <div
          className="orb orb-2"
          style={{ backgroundColor: nextColor.circle }}
        />
        <div
          className="orb orb-3"
          style={{ backgroundColor: currentColor.circle }}
        />
      </div>
    </div>
  );
}
