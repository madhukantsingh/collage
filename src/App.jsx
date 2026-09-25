import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import NavigationControls from './components/NavigationControls';
import { SLIDES } from './data/slidesData';

import SlideCover from './components/slides/SlideCover';
import SlideSkills from './components/slides/SlideSkills';
import SlideMistakes from './components/slides/SlideMistakes';
import SlideCareerPaths from './components/slides/SlideCareerPaths';
import SlideProjectExecution from './components/slides/SlideProjectExecution';
import SlideStopTodoApps from './components/slides/SlideStopTodoApps';
import SlideIdentity from './components/slides/SlideIdentity';
import SlideRoadmap from './components/slides/SlideRoadmap';
import SlideFiveThings from './components/slides/SlideFiveThings';
import SlideAiReplace from './components/slides/SlideAiReplace';
import SlideBuildAi from './components/slides/SlideBuildAi';
import SlideQA from './components/slides/SlideQA';

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'
  const [theme, setTheme] = useState('dark');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentSlide = SLIDES[currentIdx];
  const totalSlides = SLIDES.length;

  // Change active theme on root document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleNext = () => {
    if (currentIdx < totalSlides - 1) {
      setDirection('next');
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setDirection('prev');
      setCurrentIdx(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        // Toggle fullscreen shortcut
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx, totalSlides]);

  // Touch Swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      // Swiped Left -> Next
      handleNext();
    } else if (diffX < -50) {
      // Swiped Right -> Prev
      handlePrev();
    }
  };

  // Render Slide View
  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'cover':
        return <SlideCover />;
      case 'skills':
        return <SlideSkills />;
      case 'mistakes':
        return <SlideMistakes />;
      case 'career':
        return <SlideCareerPaths />;
      case 'execution':
        return <SlideProjectExecution />;
      case 'todo':
        return <SlideStopTodoApps />;
      case 'identity':
        return <SlideIdentity />;
      case 'roadmap':
        return <SlideRoadmap />;
      case 'fivethings':
        return <SlideFiveThings />;
      case 'aireplace':
        return <SlideAiReplace />;
      case 'buildai':
        return <SlideBuildAi />;
      case 'qa':
        return <SlideQA />;
      default:
        return <SlideCover />;
    }
  };

  const progressPercent = ((currentIdx + 1) / totalSlides) * 100;
  const formattedIndex = String(currentIdx + 1).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');

  return (
    <div
      className="app-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Progress Bar */}
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Header Bar */}
      <Header
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        currentTheme={theme}
        setTheme={setTheme}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />

      {/* Side Arrow Buttons Overlay */}
      <NavigationControls
        currentIdx={currentIdx}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Main Presentation Viewport */}
      <main className="presentation-viewport">
        <div
          key={currentSlide.id}
          className={`slide-stage ${direction === 'next' ? 'slide-enter-next' : 'slide-enter-prev'}`}
        >
          {currentSlide.type !== 'cover' && currentSlide.type !== 'qa' && (
            <>
              <div className="section-tag">{currentSlide.section}</div>
              <h1 className="slide-title">{currentSlide.title}</h1>
            </>
          )}

          {renderSlideContent()}

          {/* Slide Footer */}
          <footer className="slide-footer">
            <span className="footer-badge">TEKKI WEB SOLUTIONS • FROM COLLEGE TO CODE</span>
            <span style={{ fontWeight: 700 }}>{formattedIndex} / {formattedTotal}</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
