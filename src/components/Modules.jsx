import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { modulesContent } from '../data/content';
import {
    Eye,
    Dumbbell,
    Brain,
    Home,
    Hand,
    Sparkles,
    Gamepad2,
} from 'lucide-react';
import './Modules.css';

const moduleIcons = {
    active: Eye,
    moto: Dumbbell,
    cogni: Brain,
    daily: Home,
    finger: Hand,
    relax: Sparkles,
    activities: Gamepad2,
};

export default function Modules() {
    const [activeModule, setActiveModule] = useState(modulesContent.modules[0].id);
    const ref = useScrollReveal();

    const active = modulesContent.modules.find(m => m.id === activeModule);
    const activeIndex = modulesContent.modules.findIndex(m => m.id === activeModule);

    return (
        <section className="modules section" id="modulos" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {modulesContent.tag}
                    </span>
                    <h2 className="section-header__title">{modulesContent.title}</h2>
                    <p className="section-header__subtitle">{modulesContent.subtitle}</p>
                </div>

                <div className="modules__layout reveal reveal-delay-1">
                    {/* Module selector grid */}
                    <div className="modules__grid">
                        {modulesContent.modules.map((mod) => {
                            const Icon = moduleIcons[mod.id];
                            return (
                                <button
                                    key={mod.id}
                                    className={`modules__tab ${activeModule === mod.id ? 'modules__tab--active' : ''}`}
                                    onClick={() => setActiveModule(mod.id)}
                                    style={{ '--module-color': mod.color }}
                                >
                                    <span className="modules__tab-icon">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </span>
                                    <span className="modules__tab-name">{mod.name}</span>
                                    <span className="modules__tab-tagline">{mod.tagline}</span>
                                    {activeModule === mod.id && <span className="modules__tab-indicator" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active module detail */}
                    <div className="modules__detail" key={active.id}>
                        <div className="modules__detail-visual" style={{ '--module-color': active.color }}>
                            {active.image ? (
                                <img
                                    src={active.image}
                                    alt={`Módulo ${active.name} — ${active.tagline}`}
                                    className="modules__detail-image"
                                />
                            ) : (() => {
                                const Icon = moduleIcons[active.id];
                                return (
                                    <div className="modules__detail-icon-wrap">
                                        <Icon size={48} strokeWidth={1.5} />
                                    </div>
                                );
                            })()}
                            <div className="modules__detail-orbits">
                                <div className="modules__orbit modules__orbit--1" />
                                <div className="modules__orbit modules__orbit--2" />
                            </div>
                            <span className="modules__detail-number">0{activeIndex + 1}</span>
                        </div>
                        <div className="modules__detail-info">
                            <div className="modules__detail-badge" style={{ background: `${active.color}12`, color: active.color, borderColor: `${active.color}30` }}>
                                {active.tagline}
                            </div>
                            <h3 className="modules__detail-title">Módulo {active.name}</h3>
                            <p className="modules__detail-desc">{active.description}</p>

                            <div className="modules__detail-meta">
                                <div className="modules__detail-meta-item">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 1v14M1 8h14" stroke={active.color} strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <span>Ejercicios personalizables</span>
                                </div>
                                <div className="modules__detail-meta-item">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 8L7 11L12 5" stroke={active.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Métricas de progreso</span>
                                </div>
                            </div>

                            <a href="#contacto" className="btn btn--primary">
                                Probar este módulo
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
