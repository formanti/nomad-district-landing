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
    eyebrow = "¿Por qué nosotros?",
    headline = "Esto no es para todos.",
    benefits = defaultBenefits,
}: BenefitsSectionProps) {
    return (
        <section
            style={{
                padding: '100px 0 40px 0',
                backgroundColor: '#0D1117'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 24px'
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: '#B7B6B6'
                        }}
                    >
                        {eyebrow}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        style={{
                            fontSize: 'clamp(32px, 6vw, 52px)',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {headline}
                    </motion.h2>
                </div>

                {/* Benefits Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px'
                    }}
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon] || DollarSign;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                style={{
                                    padding: '40px 32px',
                                    borderRadius: '20px',
                                    backgroundColor: '#1C2128',
                                    border: '1px solid #30363D',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '24px',
                                        background: 'linear-gradient(135deg, rgba(183, 182, 182, 0.1), rgba(183, 182, 182, 0.05))',
                                        border: '1px solid rgba(183, 182, 182, 0.2)',
                                    }}
                                >
                                    <IconComponent size={28} strokeWidth={1.5} color="#B7B6B6" />
                                </div>

                                {/* Title */}
                                <h3
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        marginBottom: '14px',
                                        color: '#F0F6FC',
                                    }}
                                >
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: 1.7,
                                        color: '#B7B6B6',
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
