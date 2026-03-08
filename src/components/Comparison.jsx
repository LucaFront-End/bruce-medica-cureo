import { useScrollReveal } from '../hooks/useScrollReveal';
import { comparisonContent } from '../data/content';
import './Comparison.css';

export default function Comparison() {
    const ref = useScrollReveal();

    const renderValue = (val) => {
        if (val === true) return <span className="comparison__check">✓</span>;
        if (val === false) return <span className="comparison__cross">✕</span>;
        return <span className="comparison__text-val">{val}</span>;
    };

    return (
        <section className="comparison section section--alt" id="comparacion" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {comparisonContent.tag}
                    </span>
                    <h2 className="section-header__title">{comparisonContent.title}</h2>
                    <p className="section-header__subtitle">{comparisonContent.subtitle}</p>
                </div>

                {/* Version cards header */}
                <div className="comparison__versions reveal reveal-delay-1">
                    <div className="comparison__version comparison__version--old">
                        <span className="comparison__version-label">Versión anterior</span>
                        <span className="comparison__version-number">4.0</span>
                    </div>
                    <div className="comparison__version-arrow">
                        <div className="comparison__version-arrow-line" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="comparison__version comparison__version--new">
                        <span className="comparison__version-label">Disponible ahora</span>
                        <span className="comparison__version-number">5.0</span>
                        <span className="comparison__new-badge">NUEVO</span>
                        <div className="comparison__version-glow" />
                    </div>
                </div>

                {/* Feature rows */}
                <div className="comparison__table reveal reveal-delay-2">
                    <div className="comparison__table-header">
                        <span className="comparison__table-header-label">Característica</span>
                        <div className="comparison__table-header-versions">
                            <span>4.0</span>
                            <span className="comparison__table-header-v5">5.0</span>
                        </div>
                    </div>
                    {comparisonContent.features.map((feat, i) => (
                        <div
                            className={`comparison__row ${feat.isHighlight ? 'comparison__row--highlight' : ''}`}
                            key={i}
                        >
                            <div className="comparison__row-info">
                                {feat.isHighlight && <span className="comparison__row-new-tag">Nuevo</span>}
                                <h4 className="comparison__row-name">{feat.name}</h4>
                                <p className="comparison__row-desc">{feat.description}</p>
                            </div>
                            <div className="comparison__row-values">
                                <div className="comparison__row-v4">
                                    {renderValue(feat.v4)}
                                </div>
                                <div className="comparison__row-v5">
                                    {renderValue(feat.v5)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
