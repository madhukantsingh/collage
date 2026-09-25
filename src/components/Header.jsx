import React from 'react';
import { Maximize, Minimize, Moon, Sun, Sparkles } from 'lucide-react';

export default function Header({
  currentSlide,
  totalSlides,
  currentTheme,
  setTheme,
  isFullscreen,
  toggleFullscreen
}) {
  const formattedCurrent = String(currentSlide.id).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');

  return (
    <header className="top-nav">
      <div className="header-left">
        {/* Quality TWS Logo Wrapper - Glassmorphic, non-breaking on white screen */}
        <div className="logo-wrapper" title="Tekki Web Solutions">
          <img
            src="/logoTws.png"
            alt="Tekki Web Solutions Logo"
            className="logo-img"
          />
        </div>

        {/* Upside Slide Numbering Badge */}
        <div className="upside-number-badge" title="Current Slide Number">
          <span className="curr-num">{formattedCurrent}</span>
          <span className="total-num">/ {formattedTotal}</span>
          <span className="label">{currentSlide.section}</span>
        </div>
      </div>

      <div className="header-right">
        {/* Theme Picker */}
        <div className="theme-picker">
          <button
            className={`theme-btn theme-btn-dark ${currentTheme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
            title="Dark Theme"
            aria-label="Dark Theme"
          />
          <button
            className={`theme-btn theme-btn-light ${currentTheme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
            title="Light Theme (White Screen)"
            aria-label="Light Theme"
          />
          <button
            className={`theme-btn theme-btn-purple ${currentTheme === 'purple' ? 'active' : ''}`}
            onClick={() => setTheme('purple')}
            title="Purple Cyberpunk Theme"
            aria-label="Purple Theme"
          />
        </div>

        {/* Fullscreen Toggle App Button */}
        <button
          className="btn-action"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
        >
          {isFullscreen ? (
            <>
              <Minimize size={16} />
              <span>Exit Fullscreen</span>
            </>
          ) : (
            <>
              <Maximize size={16} />
              <span>Fullscreen App</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
