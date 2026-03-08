import { useScrollReveal } from '../hooks/useScrollReveal';
import { whyChooseContent } from '../data/content';
import './WhyChoose.css';

export default function WhyChoose() {
    const ref = useScrollReveal();

    return (
        <section className="why section" id="ventajas" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {whyChooseContent.tag}
                    </span>
                    <h2 className="section-header__title">{whyChooseContent.title}</h2>
                </div>

                <div className="why__grid">
                    {whyChooseContent.benefits.map((b, i) => (
                        <div className={`why__card reveal reveal-delay-${i + 1}`} key={i}>
                            <div className="why__card-number">0{i + 1}</div>
                            <div className="why__card-icon">{b.icon}</div>
                            <h3 className="why__card-title">{b.title}</h3>
                            <p className="why__card-desc">{b.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
