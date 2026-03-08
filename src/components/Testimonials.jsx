import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { testimonialsContent } from '../data/content';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const ref = useScrollReveal();
    const items = testimonialsContent.testimonials;

    const go = useCallback((dir) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent(prev => {
                if (dir === 'next') return (prev + 1) % items.length;
                return (prev - 1 + items.length) % items.length;
            });
            setIsTransitioning(false);
        }, 300);
    }, [isTransitioning, items.length]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => go('next'), 6000);
        return () => clearInterval(timer);
    }, [go]);

    const t = items[current];

    return (
        <section className="testimonials section section--alt" id="testimonios" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {testimonialsContent.tag}
                    </span>
                    <h2 className="section-header__title">{testimonialsContent.title}</h2>
                    <p className="section-header__subtitle">{testimonialsContent.subtitle}</p>
                </div>

                <div className="testimonials__stage reveal reveal-delay-1">
                    {/* Large quote card */}
                    <div className={`testimonials__card ${isTransitioning ? 'testimonials__card--out' : ''}`}>
                        <div className="testimonials__quote-icon">
                            <Quote size={32} strokeWidth={1.5} />
                        </div>

                        <blockquote className="testimonials__quote">
                            "{t.quote}"
                        </blockquote>

                        <div className="testimonials__stars">
                            {Array.from({ length: t.rating }, (_, i) => (
                                <Star key={i} size={16} fill="var(--color-accent)" stroke="none" />
                            ))}
                        </div>

                        <div className="testimonials__author">
                            <div className="testimonials__avatar" style={{ '--avatar-hue': current * 60 }}>
                                {t.initials}
                            </div>
                            <div className="testimonials__author-info">
                                <span className="testimonials__name">{t.name}</span>
                                <span className="testimonials__role">{t.role}</span>
                                <span className="testimonials__institution">{t.institution}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="testimonials__nav">
                        <button className="testimonials__nav-btn" onClick={() => go('prev')} aria-label="Anterior">
                            <ChevronLeft size={20} strokeWidth={2} />
                        </button>

                        <div className="testimonials__dots">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    className={`testimonials__dot ${current === i ? 'testimonials__dot--active' : ''}`}
                                    onClick={() => { setIsTransitioning(true); setTimeout(() => { setCurrent(i); setIsTransitioning(false); }, 300); }}
                                    aria-label={`Testimonio ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button className="testimonials__nav-btn" onClick={() => go('next')} aria-label="Siguiente">
                            <ChevronRight size={20} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
