import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ctaContent } from '../data/content';
import { Send, User, Mail, Building2, MessageSquare, Phone } from 'lucide-react';
import './CTA.css';

export default function CTA() {
    const ref = useScrollReveal();
    const [formState, setFormState] = useState({ name: '', email: '', institution: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would POST to an API
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="cta section" id="contacto" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        Contacto
                    </span>
                    <h2 className="section-header__title">{ctaContent.title}</h2>
                    <p className="section-header__subtitle">{ctaContent.subtitle}</p>
                </div>

                <div className="cta__layout reveal reveal-delay-1">
                    {/* Left: Contact info */}
                    <div className="cta__info">
                        <div className="cta__info-card">
                            <div className="cta__info-card-icon">
                                <Phone size={20} strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="cta__info-card-title">Teléfonos</h4>
                                {ctaContent.phones.map((phone, i) => (
                                    <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="cta__info-phone">
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="cta__info-card">
                            <div className="cta__info-card-icon">
                                <MessageSquare size={20} strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="cta__info-card-title">WhatsApp</h4>
                                <a
                                    href={ctaContent.whatsappUrl}
                                    className="cta__whatsapp-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Enviar mensaje directo
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="cta__exclusive">
                            <img src="/bruce-medica-logo.png" alt="Bruce Médica" className="cta__exclusive-logo" />
                            <p>{ctaContent.exclusiveText}</p>
                        </div>
                    </div>

                    {/* Right: Contact form */}
                    <form className="cta__form" onSubmit={handleSubmit}>
                        <div className="cta__form-row">
                            <div className="cta__field">
                                <label className="cta__label" htmlFor="contact-name">
                                    <User size={14} strokeWidth={2} />
                                    Nombre completo
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Dr. / Lic. ..."
                                    required
                                    className="cta__input"
                                />
                            </div>
                            <div className="cta__field">
                                <label className="cta__label" htmlFor="contact-email">
                                    <Mail size={14} strokeWidth={2} />
                                    Correo electrónico
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="correo@institucion.com"
                                    required
                                    className="cta__input"
                                />
                            </div>
                        </div>

                        <div className="cta__field">
                            <label className="cta__label" htmlFor="contact-institution">
                                <Building2 size={14} strokeWidth={2} />
                                Institución / Clínica
                            </label>
                            <input
                                id="contact-institution"
                                type="text"
                                name="institution"
                                value={formState.institution}
                                onChange={handleChange}
                                placeholder="Hospital, clínica o centro de rehabilitación"
                                className="cta__input"
                            />
                        </div>

                        <div className="cta__field">
                            <label className="cta__label" htmlFor="contact-message">
                                <MessageSquare size={14} strokeWidth={2} />
                                Mensaje
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder="Cuéntanos sobre tu necesidad de rehabilitación..."
                                rows={4}
                                className="cta__input cta__textarea"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`btn btn--primary btn--lg cta__submit ${submitted ? 'cta__submit--sent' : ''}`}
                        >
                            {submitted ? (
                                <>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M4 9L8 13L14 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    ¡Mensaje enviado!
                                </>
                            ) : (
                                <>
                                    <Send size={16} strokeWidth={2} />
                                    Solicitar Demo Gratuita
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
