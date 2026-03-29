'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  autoplay?: number;
  children: React.ReactNode;
}

export default function Carousel({ autoplay = 0, children }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const slides = React.Children.toArray(children);
  const length = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % length), [length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + length) % length), [length]);

  useEffect(() => {
    if (!autoplay || length <= 1) return;
    const timer = setInterval(next, autoplay);
    return () => clearInterval(timer);
  }, [autoplay, next, length]);

  if (length === 0) return null;

  return (
    // Blindamos el contenedor para que NUNCA rebase su espacio
    <div className="carousel" style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          width: '100%',
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {slides.map((slide, i) => (
          <div
            className="carousel-slide"
            key={i}
            style={{
              flex: '0 0 100%',
              width: '100%',
              minWidth: '100%' // Obligamos a la imagen a no estirar el contenedor
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>
          <button className="carousel-btn next" onClick={next} aria-label="Siguiente">›</button>
          <div className="carousel-controls">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}