/**
 * CUREO® Landing Page — Content Data Layer
 * 
 * All text content is centralized here for easy CMS replacement.
 * When Wix Headless is connected, this file will be replaced by API calls.
 */

// ─── Media URLs from Bruce Medica / Cureosity ──────────────
export const media = {
  video: 'https://video.wixstatic.com/video/45119e_1c5d47a8543d42aaad6485fd4fb7f4cf/480p/mp4/file.mp4',
  heroImage: '/hero-cureo.jpg',
  cureoLogo: 'https://cdn.prod.website-files.com/66aca0e183174aa54a79c5e2/66aca0e183174aa54a79c66c_cureo-logo.svg',
  deviceMockup: 'https://static.wixstatic.com/media/45119e_0c3886e0e6ff49bf9b8dff046fc01c91~mv2.png',
  sectionBg: 'https://static.wixstatic.com/media/45119e_5bcc34e8cfd44c2c95824f6df1bb8bd8~mv2.jpg',
  doctor: 'https://static.wixstatic.com/media/45119e_159785252b114c05891fc16012ded40e~mv2.jpg',
  modules: {
    active: 'https://static.wixstatic.com/media/45119e_1e8010354a5b4a08a4e3f30826b26f5f~mv2.png',
    moto: 'https://static.wixstatic.com/media/45119e_dd15c1e03c6542008e6a478df080982d~mv2.png',
    cogni: 'https://static.wixstatic.com/media/45119e_cebfee7db0af428cb387dd5184423ae1~mv2.png',
    daily: 'https://static.wixstatic.com/media/45119e_adfcf640f3d34f9fb955fb384161e989~mv2.png',
    finger: 'https://static.wixstatic.com/media/45119e_8e5c02632c144d08a90da8cfa6a7ffab~mv2.png',
    relax: 'https://static.wixstatic.com/media/45119e_d7e1b0bd689e44b999cf70858743646d~mv2.png',
  },
};

export const heroContent = {
  badge: "Nuevo — CUREO® 5.0 disponible en México",
  title: "Rehabilitación con",
  titleHighlight: "Realidad Virtual",
  subtitle: "El sistema de terapia VR más avanzado del mundo, ahora con IA integrada. Transforma la rehabilitación física y cognitiva con experiencias inmersivas que motivan a tus pacientes.",
  ctaPrimary: "Solicitar Demo",
  ctaSecondary: "Conocer Más",
  stats: [
    { value: "150+", label: "Instituciones" },
    { value: "50+", label: "Entrenamientos VR" },
    { value: "7", label: "Módulos Terapéuticos" },
  ],
};

export const whatIsContent = {
  tag: "¿Qué es CUREO®?",
  title: "Terapia inmersiva certificada para profesionales de la salud",
  description: "CUREO® es un sistema de terapia de realidad virtual innovador y certificado como dispositivo médico (CE). Compuesto por software y hardware preinstalados, se utiliza en clínicas y hospitales líderes a nivel internacional para la rehabilitación cognitiva y sensoriomotora.",
  features: [
    {
      icon: "🎯",
      title: "Terapia Personalizada",
      description: "Adapta cada sesión a las necesidades específicas del paciente con más de 50 ejercicios configurables."
    },
    {
      icon: "📊",
      title: "Métricas en Tiempo Real",
      description: "Monitorea el progreso con estadísticas detalladas y reportes automáticos de cada sesión."
    },
    {
      icon: "🏥",
      title: "Certificación Médica",
      description: "Software certificado CE como dispositivo médico. Validado clínicamente para uso profesional."
    },
  ]
};

export const whyChooseContent = {
  tag: "¿Por qué CUREO®?",
  title: "Ventajas que transforman tu práctica clínica",
  benefits: [
    {
      icon: "⚡",
      title: "Mayor Motivación",
      description: "Los mundos virtuales reducen la frustración del entorno clínico. La gamificación genera una sensación de logro que aumenta la adherencia terapéutica.",
    },
    {
      icon: "🚀",
      title: "Inicio Inmediato",
      description: "CUREO® es apto para uso junto a la cama del paciente. Lleva la terapia al paciente y ofrece entrenamiento inmediato de alta frecuencia.",
    },
    {
      icon: "🔄",
      title: "Seguimiento Continuo",
      description: "Permite nuevos conceptos de seguimiento posterior a través de su uso móvil y ambulatorio en el hogar del paciente.",
    },
    {
      icon: "📈",
      title: "Alta Frecuencia",
      description: "Un terapeuta puede atender hasta 6 pacientes simultáneamente con CUREO GROUP, mejorando la atención cualitativa y cuantitativamente.",
    },
  ]
};

export const modulesContent = {
  tag: "Módulos Terapéuticos",
  title: "Terapias gamificadas en rehabilitación física",
  subtitle: "7 módulos especializados diseñados para abordar diferentes áreas de la rehabilitación con experiencias inmersivas.",
  modules: [
    {
      id: "active",
      name: "Active",
      tagline: "Atención y percepción",
      color: "#4CAF50",
      description: "El módulo Active es ideal para pacientes con afecciones graves. Es ideal para la rehabilitación temprana ya que estimula y activa la atención y la percepción. La terapia se puede realizar mediante la guía de la mirada.",
      icon: "👁️",
      image: media.modules.active,
    },
    {
      id: "moto",
      name: "Moto",
      tagline: "Habilidades sensoriomotoras",
      color: "#2196F3",
      description: "Incluye entrenamiento motor bi y unilateral de las extremidades superiores. Apoya el entrenamiento de habilidades motoras activas y específicas en juegos de terapia motivadores.",
      icon: "🤸",
      image: media.modules.moto,
    },
    {
      id: "cogni",
      name: "Cogni",
      tagline: "Concentración y memoria",
      color: "#9C27B0",
      description: "Ofrece entrenamiento cognitivo y sensorial. Favorece el reconocimiento de colores y formas, la búsqueda de palabras, la percepción espacial, la coordinación y la memoria del paciente.",
      icon: "🧠",
      image: media.modules.cogni,
    },
    {
      id: "daily",
      name: "Daily",
      tagline: "Planificación y funciones ejecutivas",
      color: "#FF9800",
      description: "Se practican situaciones como el uso de herramientas y objetos cotidianos en un entorno virtual, por ejemplo, una cocina terapéutica. Permite practicar coordinación de movimientos de motricidad fina y gruesa.",
      icon: "🏠",
      image: media.modules.daily,
    },
    {
      id: "finger",
      name: "Finger",
      tagline: "Motricidad fina de la mano",
      color: "#E91E63",
      description: "Entrena la motricidad fina de la mano, así como la movilidad y coordinación de los dedos de manera individual. El paciente practica habilidades manuales como sujeción y agarre.",
      icon: "✋",
      image: media.modules.finger,
    },
    {
      id: "relax",
      name: "Relax",
      tagline: "Relajación y neurregulación",
      color: "#00BCD4",
      description: "Promueve la neurregulación, la reducción del estrés y el alivio del dolor. Apoya la adherencia y preparación para la terapia con entornos exploratorios, ejercicios de respiración y cromoterapia.",
      icon: "🧘",
      image: media.modules.relax,
    },
    {
      id: "activities",
      name: "Activities",
      tagline: "Actividades estimulantes",
      color: "#FF5722",
      description: "Los pacientes pueden practicar actividades con mayor complejidad de los miembros superiores en una inmersión multisensorial. Ideal para etapas avanzadas de la rehabilitación.",
      icon: "🪁",
      image: '/activities-module.png',
    },
  ]
};

export const comparisonContent = {
  tag: "Evolución",
  title: "CUREO® 4.0 vs 5.0",
  subtitle: "La nueva versión 5.0 representa un salto cualitativo en la gestión terapéutica digital.",
  features: [
    {
      name: "Navegador de Terapia",
      description: "Filtra ejercicios por objetivos clínicos específicos y crea planes terapéuticos de forma precisa.",
      v4: false,
      v5: true,
      isHighlight: true,
    },
    {
      name: "CUREO HUB (Plataforma en la Nube)",
      description: "Centraliza datos de pacientes, reportes y configuraciones con sincronización segura.",
      v4: false,
      v5: true,
      isHighlight: true,
    },
    {
      name: "Sincronización Multi-dispositivo",
      description: "Sincroniza equipos y configuraciones entre distintas ubicaciones de forma segura.",
      v4: false,
      v5: true,
      isHighlight: true,
    },
    {
      name: "Interfaz Optimizada",
      description: "Flujos clínicos optimizados con tiempos de configuración reducidos.",
      v4: "Básica",
      v5: "Avanzada",
      isHighlight: false,
    },
    {
      name: "Reportes de Progreso",
      description: "Generación automática de reportes detallados de progreso del paciente.",
      v4: "Manual",
      v5: "Automático",
      isHighlight: false,
    },
    {
      name: "Gestión de Pacientes",
      description: "Administración completa de expedientes y sesiones terapéuticas.",
      v4: "Local",
      v5: "Nube + Local",
      isHighlight: false,
    },
    {
      name: "Planificación Terapéutica",
      description: "Creación de planes de tratamiento personalizados.",
      v4: "General",
      v5: "Por Objetivo Clínico",
      isHighlight: false,
    },
    {
      name: "Módulos Terapéuticos",
      description: "Acceso a los 7 módulos de rehabilitación inmersiva.",
      v4: true,
      v5: true,
      isHighlight: false,
    },
  ]
};

export const applicationsContent = {
  tag: "Áreas de Aplicación",
  title: "Rehabilitación integral para múltiples condiciones",
  categories: [
    {
      title: "Déficits Abordados",
      items: [
        "Déficits motores de extremidades superiores",
        "Déficits sensoriales y propiocepción",
        "Apraxias",
        "Trastornos de atención",
        "Deterioro de la memoria",
        "Dolores agudos",
      ]
    },
    {
      title: "Áreas del Cuerpo",
      items: [
        "Extremidades superiores y cintura escapular",
        "Brazos, antebrazos, manos y dedos",
        "Tronco — corrección y control postural",
        "Movimientos de cabeza y control de la mirada",
      ]
    },
    {
      title: "Indicaciones Clínicas",
      items: [
        "Intervenciones neuroquirúrgicas",
        "Cirugía ortopédica",
        "Reemplazo total de hombro",
        "Cirugía de codo y amputaciones",
        "Condiciones postraumáticas",
        "Depresión y ansiedad",
      ]
    },
  ]
};

export const testimonialsContent = {
  tag: "Testimonios",
  title: "Lo que dicen los profesionales",
  subtitle: "Experiencias reales de terapeutas e instituciones que usan CUREO® en su práctica diaria.",
  testimonials: [
    {
      quote: "CUREO® transformó nuestra unidad de neurorrehabilitación. Los pacientes muestran un 40% más de adherencia y los resultados funcionales han mejorado significativamente.",
      name: "Dr. Carlos Mendoza",
      role: "Director de Neurorrehabilitación",
      institution: "Hospital Ángeles Pedregal",
      initials: "CM",
      rating: 5,
    },
    {
      quote: "La gamificación hace que los pacientes se olviden de que están en terapia. He visto mejoras notables en la motivación, especialmente en pacientes con lesiones de larga evolución.",
      name: "Lic. Ana Sofía Rivera",
      role: "Fisioterapeuta Especialista",
      institution: "Centro de Rehabilitación Integral",
      initials: "AR",
      rating: 5,
    },
    {
      quote: "Como terapeuta ocupacional, el módulo Daily me permite simular actividades cotidianas de forma segura. Los pacientes practican movimientos funcionales sin riesgo de caídas.",
      name: "Lic. Roberto Sánchez",
      role: "Terapeuta Ocupacional",
      institution: "CRIT Estado de México",
      initials: "RS",
      rating: 5,
    },
    {
      quote: "La plataforma CUREO HUB en la versión 5.0 nos permite centralizar la información de todos nuestros pacientes y generar reportes automáticos. Ahorramos horas de documentación.",
      name: "Dra. María Fernanda López",
      role: "Coordinadora de Rehabilitación",
      institution: "Hospital Español",
      initials: "ML",
      rating: 5,
    },
    {
      quote: "Poder atender hasta 6 pacientes simultáneamente con CUREO GROUP ha sido un cambio total en nuestra productividad sin sacrificar calidad terapéutica.",
      name: "Lic. Eduardo Vargas",
      role: "Director de Fisioterapia",
      institution: "Clínica de Medicina Física Avanzada",
      initials: "EV",
      rating: 5,
    },
  ],
};

export const ctaContent = {
  title: "¿Listo para transformar tu práctica clínica?",
  subtitle: "Solicita una demostración personalizada y descubre cómo CUREO® puede revolucionar tu centro de rehabilitación.",
  ctaPrimary: "Solicitar Demo",
  ctaSecondary: "Contactar por WhatsApp",
  whatsappUrl: "https://wa.link/wpi25j",
  phones: ["+52 55 7618 2226", "+52 55 5575 0108"],
  exclusiveText: "De Venta Exclusiva en México por Bruce Médica",
};

export const navContent = {
  brand: "Bruce Médica",
  links: [
    { label: "¿Qué es?", href: "#que-es" },
    { label: "Módulos", href: "#modulos" },
    { label: "CUREO 5.0", href: "#comparacion" },
    { label: "Aplicaciones", href: "#aplicaciones" },
  ],
  cta: "Solicitar Demo",
};
