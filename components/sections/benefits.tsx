"use client";

import { motion } from "framer-motion";
import { DollarSign, Globe2, Users, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    DollarSign,
    Globe2,
    Users,
};

interface Benefit {
    title: string;
    description: string;
    icon: string;
}

interface BenefitsSectionProps {
    eyebrow?: string;
    headline?: string;
    benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
    {
        title: "Ganar en Dólares",
        description: "Accede a salarios globales sin importar dónde vivas. Multiplica tu poder adquisitivo.",
        icon: "DollarSign",
    },
    {
        title: "Disrupción Personal",
        description: "Rompe con el camino tradicional. Tu carrera no tiene por qué ser lineal ni aburrida.",
        icon: "Globe2",
    },
    {
        title: "Comunidad Activa",
        description: "Rodéate de personas que están pasando por el mismo proceso que tú.",
        icon: "Users",
    },
];

export function BenefitsSection({
    eyebrow = "¿Por qué elegirnos?",
    headline = "Transforma tu carrera profesional",
    benefits = defaultBenefits,
}: BenefitsSectionProps) {
    return (
        <section
            style={{
                padding: '80px 0',
                backgroundColor: '#F8F7F4' // Light beige
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            color: '#22C55E'
                        }}
                    >
                        {eyebrow}
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 48px)',
                            fontWeight: 700,
                            color: '#14181E', // Dark text
                            padding: '0 10px'
                        }}
                    >
                        {headline}
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px'
                    }}
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon] || DollarSign;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                style={{
                                    padding: '32px',
                                    borderRadius: '20px',
                                    backgroundColor: '#FFFFFF', // White cards
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                        color: '#22C55E'
                                    }}
                                >
                                    <IconComponent size={28} strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        marginBottom: '12px',
                                        color: '#14181E' // Dark text
                                    }}
                                >
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: 1.7,
                                        color: '#6B7280' // Gray text
                                    }}
                                >
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
