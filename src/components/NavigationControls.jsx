import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavigationControls({
  currentIdx,
  totalSlides,
  onPrev,
  onNext
}) {
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === totalSlides - 1;

  return (
    <>
      {/* Floating Side Arrow Left (Previous Slide) */}
      <button
        className="nav-side-arrow left"
        onClick={onPrev}
        disabled={isFirst}
        title="Previous Slide (Left Arrow)"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Floating Side Arrow Right (Next Slide) */}
      <button
        className="nav-side-arrow right"
        onClick={onNext}
        disabled={isLast}
        title="Next Slide (Right Arrow / Space)"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>
    </>
  );
}
