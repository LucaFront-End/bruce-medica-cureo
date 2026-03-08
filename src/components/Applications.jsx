import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { applicationsContent } from '../data/content';
import { Brain, Bone, Stethoscope, ChevronRight } from 'lucide-react';
import './Applications.css';

const categoryMeta = [
    { icon: Brain, accent: '#A78BFA', bgAccent: 'rgba(167, 139, 250, 0.08)' },
    { icon: Bone, accent: '#34D399', bgAccent: 'rgba(52, 211, 153, 0.08)' },
    { icon: Stethoscope, accent: '#F472B6', bgAccent: 'rgba(244, 114, 182, 0.08)' },
];

export default function Applications() {
    const [activeCategory, setActiveCategory] = useState(0);
    const ref = useScrollReveal();

    const activeCat = applicationsContent.categories[activeCategory];
    const activeMeta = categoryMeta[activeCategory];
    const ActiveIcon = activeMeta.icon;

    return (
        <section className="apps section" id="aplicaciones" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {applicationsContent.tag}
                    </span>
                    <h2 className="section-header__title">{applicationsContent.title}</h2>
                </div>

                <div className="apps__layout reveal reveal-delay-1">
                    {/* Left: Interactive body with highlighted zones */}
                    <div className="apps__body-panel">
                        <div className="apps__body-container">
                            {/* Scan line animation */}
                            <div className="apps__scan-line" />

                            {/* SVG anatomical figure */}
                            <svg className="apps__figure" viewBox="0 0 200 340" fill="none">
                                <defs>
                                    <linearGradient id="bodyStroke" x1="100" y1="0" x2="100" y2="340" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
                                        <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                                    </linearGradient>
                                    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Head */}
                                <ellipse cx="100" cy="42" rx="22" ry="26" stroke="url(#bodyStroke)" strokeWidth="1.2" />
                                <ellipse cx="100" cy="42" rx="22" ry="26" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.15" filter="url(#neonGlow)" />

                                {/* Neck */}
                                <path d="M92 68 L92 80 M108 68 L108 80" stroke="url(#bodyStroke)" strokeWidth="1" />

                                {/* Shoulders & upper torso */}
                                <path d="M92 80 Q80 82 50 95" stroke="url(#bodyStroke)" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M108 80 Q120 82 150 95" stroke="url(#bodyStroke)" strokeWidth="1.2" strokeLinecap="round" />

                                {/* Torso outline */}
                                <path d="M70 100 L65 175 L80 220 L100 230 L120 220 L135 175 L130 100" stroke="url(#bodyStroke)" strokeWidth="1" />

                                {/* Ribcage hints */}
                                <path d="M78 110 Q100 118 122 110" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.2" />
                                <path d="M76 125 Q100 133 124 125" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.15" />
                                <path d="M74 140 Q100 148 126 140" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.1" />

                                {/* Spine */}
                                <line x1="100" y1="80" x2="100" y2="225" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

                                {/* Left arm */}
                                <path d="M50 95 Q40 130 35 160" stroke="url(#bodyStroke)" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M35 160 Q30 185 28 200" stroke="url(#bodyStroke)" strokeWidth="1" strokeLinecap="round" />
                                {/* Left hand */}
                                <path d="M28 200 Q22 215 20 225" stroke="url(#bodyStroke)" strokeWidth="0.8" strokeLinecap="round" />
                                <circle cx="20" cy="226" r="4" stroke="url(#bodyStroke)" strokeWidth="0.8" />
                                {/* Finger lines */}
                                <path d="M17 228 L12 238 M19 229 L16 240 M21 230 L20 242 M23 229 L25 240" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.25" strokeLinecap="round" />

                                {/* Right arm */}
                                <path d="M150 95 Q160 130 165 160" stroke="url(#bodyStroke)" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M165 160 Q170 185 172 200" stroke="url(#bodyStroke)" strokeWidth="1" strokeLinecap="round" />
                                {/* Right hand */}
                                <path d="M172 200 Q178 215 180 225" stroke="url(#bodyStroke)" strokeWidth="0.8" strokeLinecap="round" />
                                <circle cx="180" cy="226" r="4" stroke="url(#bodyStroke)" strokeWidth="0.8" />
                                {/* Finger lines */}
                                <path d="M183 228 L188 238 M181 229 L184 240 M179 230 L180 242 M177 229 L175 240" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.25" strokeLinecap="round" />

                                {/* Joints — shoulder */}
                                <circle cx="50" cy="95" r="5" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
                                <circle cx="50" cy="95" r="2" fill="var(--color-accent)" opacity="0.2" />
                                <circle cx="150" cy="95" r="5" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
                                <circle cx="150" cy="95" r="2" fill="var(--color-accent)" opacity="0.2" />

                                {/* Joints — elbow */}
                                <circle cx="35" cy="160" r="4" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
                                <circle cx="165" cy="160" r="4" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />

                                {/* Joints — wrist */}
                                <circle cx="28" cy="200" r="3" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
                                <circle cx="172" cy="200" r="3" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />

                                {/* Highlight zones based on active category */}
                                {activeCategory === 0 && (
                                    <g className="apps__zone apps__zone--active">
                                        {/* Brain/Head glow for cognitive deficits */}
                                        <ellipse cx="100" cy="42" rx="26" ry="30" fill="rgba(167, 139, 250, 0.08)" stroke="#A78BFA" strokeWidth="1" filter="url(#neonGlow)" />
                                        {/* Eye indicators */}
                                        <circle cx="90" cy="40" r="3" fill="rgba(167, 139, 250, 0.3)" />
                                        <circle cx="110" cy="40" r="3" fill="rgba(167, 139, 250, 0.3)" />
                                    </g>
                                )}
                                {activeCategory === 1 && (
                                    <g className="apps__zone apps__zone--active">
                                        {/* Shoulder region */}
                                        <ellipse cx="50" cy="95" rx="12" ry="10" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="0.8" filter="url(#neonGlow)" />
                                        <ellipse cx="150" cy="95" rx="12" ry="10" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="0.8" filter="url(#neonGlow)" />
                                        {/* Arms highlight */}
                                        <path d="M50 95 Q40 130 35 160 Q30 185 28 200 Q22 215 20 225" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" filter="url(#neonGlow)" />
                                        <path d="M150 95 Q160 130 165 160 Q170 185 172 200 Q178 215 180 225" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" filter="url(#neonGlow)" />
                                        {/* Hands highlight */}
                                        <circle cx="20" cy="226" r="8" fill="rgba(52, 211, 153, 0.08)" stroke="#34D399" strokeWidth="0.6" />
                                        <circle cx="180" cy="226" r="8" fill="rgba(52, 211, 153, 0.08)" stroke="#34D399" strokeWidth="0.6" />
                                        {/* Trunk */}
                                        <path d="M70 100 L65 175 L80 220 L100 230 L120 220 L135 175 L130 100" stroke="#34D399" strokeWidth="0.8" opacity="0.3" filter="url(#neonGlow)" />
                                    </g>
                                )}
                                {activeCategory === 2 && (
                                    <g className="apps__zone apps__zone--active">
                                        {/* Full body subtle glow for clinical */}
                                        <ellipse cx="100" cy="42" rx="26" ry="30" fill="rgba(244, 114, 182, 0.05)" stroke="#F472B6" strokeWidth="0.5" />
                                        {/* Shoulder surgery zones */}
                                        <circle cx="50" cy="95" r="14" fill="rgba(244, 114, 182, 0.1)" stroke="#F472B6" strokeWidth="0.8" filter="url(#neonGlow)" />
                                        <circle cx="150" cy="95" r="14" fill="rgba(244, 114, 182, 0.1)" stroke="#F472B6" strokeWidth="0.8" filter="url(#neonGlow)" />
                                        {/* Elbow surgery zone */}
                                        <circle cx="35" cy="160" r="10" fill="rgba(244, 114, 182, 0.08)" stroke="#F472B6" strokeWidth="0.6" />
                                        <circle cx="165" cy="160" r="10" fill="rgba(244, 114, 182, 0.08)" stroke="#F472B6" strokeWidth="0.6" />
                                        {/* Cross markers for surgical */}
                                        <path d="M46 95 L54 95 M50 91 L50 99" stroke="#F472B6" strokeWidth="1" opacity="0.6" />
                                        <path d="M146 95 L154 95 M150 91 L150 99" stroke="#F472B6" strokeWidth="1" opacity="0.6" />
                                    </g>
                                )}
                            </svg>

                            {/* Decorative grid */}
                            <div className="apps__body-grid" />
                        </div>
                    </div>

                    {/* Right: Content panel */}
                    <div className="apps__content-panel">
                        {/* Tab selector */}
                        <div className="apps__tabs">
                            {applicationsContent.categories.map((cat, i) => {
                                const Icon = categoryMeta[i].icon;
                                const isActive = activeCategory === i;
                                return (
                                    <button
                                        key={i}
                                        className={`apps__tab ${isActive ? 'apps__tab--active' : ''}`}
                                        onClick={() => setActiveCategory(i)}
                                        style={{ '--tab-color': categoryMeta[i].accent }}
                                    >
                                        <span className="apps__tab-icon">
                                            <Icon size={18} strokeWidth={isActive ? 2.2 : 1.5} />
                                        </span>
                                        <span className="apps__tab-text">{cat.title}</span>
                                        {isActive && <span className="apps__tab-bar" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active content */}
                        <div className="apps__detail" key={activeCategory} style={{ '--detail-color': activeMeta.accent }}>
                            <div className="apps__detail-header">
                                <div className="apps__detail-icon-wrap">
                                    <ActiveIcon size={24} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <h3 className="apps__detail-title">{activeCat.title}</h3>
                                    <p className="apps__detail-count">{activeCat.items.length} áreas identificadas</p>
                                </div>
                            </div>

                            <ul className="apps__detail-list">
                                {activeCat.items.map((item, j) => (
                                    <li className="apps__detail-item" key={j} style={{ animationDelay: `${j * 60}ms` }}>
                                        <span className="apps__detail-check">
                                            <ChevronRight size={14} strokeWidth={2.5} />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
