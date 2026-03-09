import { useScrollReveal } from '../hooks/useScrollReveal';
import { whatIsContent, media } from '../data/content';
import './WhatIsCureo.css';

export default function WhatIsCureo() {
    const ref = useScrollReveal();

    return (
        <section className="what-is section" id="que-es" ref={ref}>
            <div className="container">
                <div className="what-is__layout">
                    <div className="what-is__left reveal">
                        <img src="/cureo-logo.png" alt="CUREO®" className="what-is__cureo-logo" />
                        <span className="tag">
                            <span className="tag__dot" />
                            {whatIsContent.tag}
                        </span>
                        <h2 className="what-is__title">{whatIsContent.title}</h2>
                        <p className="what-is__desc">{whatIsContent.description}</p>

                        {/* Inline stats */}
                        <div className="what-is__inline-stats">
                            <div className="what-is__inline-stat">
                                <div className="what-is__inline-stat-ring">
                                    <svg viewBox="0 0 36 36" className="what-is__ring-svg">
                                        <path className="what-is__ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="what-is__ring-fill" strokeDasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="what-is__ring-value">94%</span>
                                </div>
                                <span className="what-is__inline-stat-label">Adherencia terapéutica</span>
                            </div>
                            <div className="what-is__inline-stat">
                                <div className="what-is__inline-stat-ring">
                                    <svg viewBox="0 0 36 36" className="what-is__ring-svg">
                                        <path className="what-is__ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="what-is__ring-fill" strokeDasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="what-is__ring-value">87%</span>
                                </div>
                                <span className="what-is__inline-stat-label">Satisfacción del paciente</span>
                            </div>
                        </div>
                    </div>

                    <div className="what-is__right">
                        {whatIsContent.features.map((feat, i) => (
                            <div className={`what-is__card reveal reveal-delay-${i + 1}`} key={i}>
                                <div className="what-is__card-line" />
                                <div className="what-is__card-icon">{feat.icon}</div>
                                <div className="what-is__card-text">
                                    <h3 className="what-is__card-title">{feat.title}</h3>
                                    <p className="what-is__card-desc">{feat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video showcase */}
                <div className="what-is__video-wrap reveal reveal-delay-2">
                    <div className="what-is__video-container">
                        <video
                            className="what-is__video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={media.sectionBg}
                        >
                            <source src={media.video} type="video/mp4" />
                        </video>
                        <div className="what-is__video-overlay">
                            <img
                                src={media.deviceMockup}
                                alt="Dispositivo CUREO®"
                                className="what-is__device-img"
                            />
                        </div>
                    </div>
                    <p className="what-is__video-caption">
                        CUREO® en acción — Sistema completo de hardware y software para rehabilitación inmersiva
                    </p>
                </div>
            </div>
        </section>
    );
}
