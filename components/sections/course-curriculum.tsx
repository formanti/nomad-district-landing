"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface Module {
    number: string;
    title: string;
    overview: string;
    learnings: string[];
}

const modules: Module[] = [
    {
        number: "Módulo 01",
        title: "Mentalidad y Fundamentos",
        overview: "Antes de aplicar, necesitamos re-programar tu mente para el éxito remoto. Rompe con las creencias limitantes y entiende cómo funciona realmente el mercado global.",
        learnings: [
            "Diferencias clave entre trabajo tradicional y remoto",
            "Cómo superar el síndrome del impostor",
            "Herramientas esenciales para la productividad remota",
            "La psicología del reclutador internacional"
        ]
    },
    {
        number: "Módulo 02",
        title: "Tu Perfil Irresistible",
        overview: "Tu CV y perfil de LinkedIn son tu carta de venta. Aprende a estructurarlos para pasar los filtros automáticos (ATS) y captar la atención de los reclutadores en 6 segundos.",
        learnings: [
            "Optimización de LinkedIn para búsquedas (SEO)",
            "Estructura de un CV de alto impacto (formato Harvard/Google)",
            "Creación de un portafolio digital (incluso sin experiencia previa)",
            "Cómo redactar una Cover Letter que sí lean"
        ]
    },
    {
        number: "Módulo 03",
        title: "La Búsqueda Estratégica",
        overview: "Deja de aplicar en vano. Te enseñamos dónde están las ofertas ocultas, cómo filtrar empresas legítimas y cómo automatizar tu búsqueda para ahorrar tiempo.",
        learnings: [
            "Las mejores plataformas más allá de LinkedIn",
            "Cómo identificar y evitar estafas",
            "Networking digital: cómo contactar tomadores de decisiones",
            "Estrategia de 'volumen vs calidad' en aplicaciones"
        ]
    },
    {
        number: "Módulo 04",
        title: "Dominando la Entrevista",
        overview: "La entrevista no es un interrogatorio, es una venta. Aprende a comunicarte con confianza, responder preguntas difíciles y negociar tu salario como un experto.",
        learnings: [
            "Cómo responder 'Háblame de ti' y '¿Cuáles son tus debilidades?'",
            "Preparación para entrevistas técnicas y de cultura",
            "Lenguaje corporal y configuración de tu set de video",
            "Preguntas inteligentes que debes hacer al entrevistador"
        ]
    },
    {
        number: "Módulo 05",
        title: "Negociación y Onboarding",
        overview: "¡Te hicieron una oferta! Ahora asegúrate de obtener el mejor trato posible y prepárate para tus primeros 90 días en la empresa.",
        learnings: [
            "Técnicas de negociación salarial (sin miedo)",
            "Revisión de contratos internacionales (contractor vs empleado)",
            "Gestión de impuestos y pagos internacionales (USD a moneda local)",
            "Cómo destacar en tu primera semana de trabajo"
        ]
    }
];

function ModuleCard({
    module,
    index,
    isActive,
    onClick
}: {
    module: Module;
    index: number;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <div
            className="lg:sticky"
            style={{
                top: `${100 + (index * 40)}px`,
                backgroundColor: 'white',
                borderRadius: '24px',
                border: isActive ? '2px solid #22C55E' : '1px solid #E5E7EB',
                boxShadow: isActive
                    ? '0 25px 50px -12px rgba(34, 197, 94, 0.25)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                marginBottom: '40px',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: modules.length - index,
                cursor: 'pointer'
            }}
        >
            <div
                style={{
                    padding: '24px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px'
                }}
                onClick={onClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onClick();
                    }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span
                        style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '1.75rem',
                            color: isActive ? '#22C55E' : '#9CA3AF',
                            fontWeight: 400,
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {module.number.split(' ')[1]}
                    </span>
                    <h3
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#14181E'
                        }}
                    >
                        {module.title}
                    </h3>
                </div>

                <motion.div
                    animate={{
                        backgroundColor: isActive ? '#22C55E' : 'transparent',
                        borderColor: isActive ? '#22C55E' : '#D1D5DB',
                        rotate: isActive ? 45 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '1px solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#FFFFFF' : '#6B7280'
                    }}
                >
                    <Plus size={16} />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ padding: '0 32px 32px 32px' }}>
                            <div style={{ padding: '24px 0', borderTop: '1px solid #F3F4F6' }}>
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            color: '#9CA3AF',
                                            letterSpacing: '0.1em',
                                            marginBottom: '12px'
                                        }}>
                                            OVERVIEW
                                        </h4>
                                        <p style={{
                                            fontSize: '1.125rem',
                                            color: '#4B5563',
                                            lineHeight: 1.6
                                        }}>
                                            {module.overview}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            color: '#9CA3AF',
                                            letterSpacing: '0.1em',
                                            marginBottom: '12px'
                                        }}>
                                            LO QUE APRENDERÁS:
                                        </h4>
                                        <ul style={{ display: 'grid', gap: '8px' }}>
                                            {module.learnings.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        fontSize: '1rem',
                                                        color: '#374151',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    <div style={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#22C55E',
                                                        flexShrink: 0
                                                    }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function CourseCurriculum() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [manuallySet, setManuallySet] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Handle manual card clicks
    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setManuallySet(true);
        
        // Reset manual override after some time
        setTimeout(() => setManuallySet(false), 2000);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Don't auto-change if user manually clicked
            if (manuallySet) return;

            const sectionRect = sectionRef.current?.getBoundingClientRect();
            if (!sectionRect) return;

            // Only activate scroll behavior when section is in view
            if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;

            // Find which card should be active based on scroll position
            const viewportCenter = window.innerHeight / 2;
            let closestCard = 0;
            let closestDistance = Infinity;

            for (let i = 0; i < cardRefs.current.length; i++) {
                const card = cardRefs.current[i];
                if (!card) continue;

                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(cardCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = i;
                }
            }

            if (activeIndex !== closestCard) {
                setActiveIndex(closestCard);
            }
        };

        // Initial check
        handleScroll();

        // Add scroll listener with throttling
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener, { passive: true });
        return () => window.removeEventListener('scroll', scrollListener);
    }, [activeIndex, manuallySet]);

    return (
        <section
            ref={sectionRef}
            style={{
                padding: '120px 0',
                backgroundColor: '#F5F5F0',
                minHeight: '100vh'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Sticky Sidebar */}
                    <div className="lg:col-span-4 mb-8 lg:mb-0">
                        <div
                            className="lg:sticky"
                            style={{
                                top: '120px'
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: 700,
                                    color: '#14181E',
                                    lineHeight: 1.1,
                                    marginBottom: '32px',
                                    fontFamily: 'Georgia, serif'
                                }}
                            >
                                Plan de <br />Estudios
                            </h2>

                            <ul style={{ marginBottom: '48px', display: 'grid', gap: '24px' }}>
                                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <div style={{
                                        flexShrink: 0,
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '10px',
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '3px',
                                            backgroundColor: '#22C55E'
                                        }} />
                                    </div>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#4B5563' }}>
                                        Currículum paso a paso
                                    </span>
                                </li>
                                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <div style={{
                                        flexShrink: 0,
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '10px',
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '3px',
                                            backgroundColor: '#22C55E'
                                        }} />
                                    </div>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#4B5563' }}>
                                        Mentoria y Comunidad
                                    </span>
                                </li>
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.location.href = 'https://www.skool.com/nomad-district'}
                                style={{
                                    backgroundColor: '#F6E05E',
                                    color: '#1A1A1A',
                                    padding: '24px 40px',
                                    borderRadius: '16px',
                                    fontSize: '1.125rem',
                                    fontWeight: 900,
                                    border: '2px solid #1A1A1A',
                                    boxShadow: '4px 4px 0px #1A1A1A',
                                    cursor: 'pointer',
                                    width: '100%',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                ¡RESERVA TU LUGAR!
                            </motion.button>
                        </div>
                    </div>

                    {/* Right Stacking Cards Column */}
                    <div className="lg:col-span-8">
                        <div style={{ paddingBottom: '60vh' }}>
                            {modules.map((module, index) => (
                                <div
                                    key={index}
                                    ref={(el) => { cardRefs.current[index] = el; }}
                                >
                                    <ModuleCard
                                        module={module}
                                        index={index}
                                        isActive={index === activeIndex}
                                        onClick={() => handleCardClick(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
