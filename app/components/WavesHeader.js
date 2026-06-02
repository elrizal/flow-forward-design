'use client';

import { useEffect, useRef } from 'react';

export default function WavesHeader({ title, subtitle }) {
  const filterRef = useRef(null);

  useEffect(() => {
    let frames = 0;
    const rad = Math.PI / 180;
    let animationId;

    function freqAnimation() {
      if (!filterRef.current) return;

      let bfx = 0.10;
      let bfy = 0.07;
      frames += 0.3;
      bfx += 0.001 * Math.cos(frames * rad);
      bfy += 0.005 * Math.sin(frames * rad);

      const bf = bfx.toString() + ' ' + bfy.toString();
      filterRef.current.setAttributeNS(null, 'baseFrequency', bf);
      animationId = window.requestAnimationFrame(freqAnimation);
    }

    animationId = window.requestAnimationFrame(freqAnimation);

    return () => {
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="waves-header">
      <svg className="waves-svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wave">
            <feTurbulence
              ref={filterRef}
              id="turbulence"
              baseFrequency="0.019510 0.08399"
              numOctaves="1"
              result="noise"
              seed="15"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
          
              scale="190"
            />
          </filter>
        </defs>
      </svg>

      <div className="waves-wrap">
  
          <div key={0} className="waves-inner">
            <div className="waves-filtered">
              <div className="waves-frame"></div>
              <div className="waves-clouds"></div>
            </div>
          </div>
    
      </div>

      <div className="waves-content">
        {title && <h1 className="waves-title">{title}</h1>}
        {subtitle && <p className="waves-subtitle">{subtitle}</p>}
      </div>

      <div className="waves-arrow">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
