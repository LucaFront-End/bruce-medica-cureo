import { useScrollReveal } from '../hooks/useScrollReveal';
import { heroContent, media } from '../data/content';
import './Hero.css';

export default function Hero() {
    const ref = useScrollReveal();

    return (
        <section className="hero" id="hero" ref={ref}>
            {/* Background decoration */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
                <div className="hero__grid-pattern" />
            </div>

            <div className="hero__content container">
                <div className="hero__text">
                    <div className="reveal">
                        <span className="tag">
                            <span className="tag__dot" />
                            {heroContent.badge}
                        </span>
                    </div>

                    <h1 className="hero__title reveal reveal-delay-1">
                        {heroContent.title}{' '}
                        <span className="hero__title-highlight">{heroContent.titleHighlight}</span>
                    </h1>

                    <p className="hero__subtitle reveal reveal-delay-2">
                        {heroContent.subtitle}
                    </p>

                    <div className="hero__actions reveal reveal-delay-3">
                        <a href="#contacto" className="btn btn--primary btn--lg hero__btn-glow">
                            {heroContent.ctaPrimary}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#que-es" className="btn btn--secondary btn--lg">
                            {heroContent.ctaSecondary}
                        </a>
                    </div>

                    <div className="hero__metrics reveal reveal-delay-4">
                        {heroContent.stats.map((stat, i) => (
                            <span className="hero__metric" key={i}>
                                <strong>{stat.value}</strong> {stat.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right side: Real product image */}
                <div className="hero__visual reveal reveal-delay-2">
                    <div className="hero__image-wrap">
                        <img
                            src={media.heroImage}
                            alt="Paciente usando CUREO® realidad virtual para rehabilitación"
                            className="hero__image"
                            loading="eager"
                        />
                        <div className="hero__image-overlay" />
                    </div>
                    {/* Floating badges */}
                    <div className="hero__float-badge hero__float-badge--1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="7" width="22" height="10" rx="3" />
                            <path d="M10 12h4" />
                            <circle cx="6.5" cy="12" r="2.5" />
                            <circle cx="17.5" cy="12" r="2.5" />
                            <path d="M4 7V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" />
                        </svg>
                        VR Terapia
                    </div>
                    <div className="hero__float-badge hero__float-badge--2">
                        <span>☁️</span> CUREO HUB
                    </div>
                    <div className="hero__float-badge hero__float-badge--3">
                        <span>✓</span> CE Certificado
                    </div>
                </div>
            </div>

            <div className="hero__scroll-hint">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-dot" />
                </div>
                <span className="hero__scroll-text">Scroll</span>
                <svg className="hero__scroll-chevron" width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}
