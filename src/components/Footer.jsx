import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="8" fill="var(--color-accent)" />
                                <path d="M8 14L12 18L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="footer__brand-name">Bruce Médica</span>
                        </div>
                        <p className="footer__brand-desc">
                            Distribuidor exclusivo de CUREO® en México. Tecnología médica para rehabilitación con realidad virtual.
                        </p>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Navegación</h4>
                        <ul className="footer__links">
                            <li><a href="#que-es">¿Qué es CUREO?</a></li>
                            <li><a href="#modulos">Módulos</a></li>
                            <li><a href="#comparacion">CUREO 5.0</a></li>
                            <li><a href="#aplicaciones">Aplicaciones</a></li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Contacto</h4>
                        <ul className="footer__links">
                            <li><a href="tel:+525576182226">+52 55 7618 2226</a></li>
                            <li><a href="tel:+525555750108">+52 55 5575 0108</a></li>
                            <li><a href="https://wa.link/wpi25j" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href="https://www.brucemedica.com.mx" target="_blank" rel="noopener noreferrer">brucemedica.com.mx</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">© {year} Bruce Médica. Todos los derechos reservados.</p>
                    <p className="footer__legal">CUREO® es una marca registrada de Cureosity GmbH.</p>
                </div>
            </div>
        </footer>
    );
}
