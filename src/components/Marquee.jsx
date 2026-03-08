import './Marquee.css';

export default function Marquee() {
    const items = [
        '🧠 Rehabilitación Cognitiva',
        '🤸 Entrenamiento Motor',
        '🎮 Terapia Gamificada',
        '📊 Métricas en Tiempo Real',
        '☁️ CUREO HUB Cloud',
        '🏥 Dispositivo Médico Certificado',
        '✋ Motricidad Fina',
        '🧘 Neurregulación',
    ];

    return (
        <div className="marquee">
            <div className="marquee__track">
                {[...items, ...items].map((item, i) => (
                    <div className="marquee__item" key={i}>
                        <span>{item}</span>
                        <span className="marquee__sep">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
