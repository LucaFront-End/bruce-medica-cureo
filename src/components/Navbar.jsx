import { useState, useEffect } from 'react';
import { navContent } from '../data/content';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner container--wide">
                <a href="#" className="navbar__brand">
                    <span className="navbar__logo-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <rect width="28" height="28" rx="8" fill="var(--color-accent)" />
                            <path d="M8 14L12 18L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className="navbar__brand-text">
                        <span className="navbar__brand-name">{navContent.brand}</span>
                        <span className="navbar__brand-sub">Tecnología Médica</span>
                    </span>
                </a>

                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {navContent.links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__links-cta-mobile">
                        <a href="#contacto" className="btn btn--primary" onClick={() => setMobileOpen(false)}>
                            {navContent.cta}
                        </a>
                    </li>
                </ul>

                <a href="#contacto" className="btn btn--primary navbar__cta-desktop">
                    {navContent.cta}
                </a>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {mobileOpen && <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />}
        </nav>
    );
}
