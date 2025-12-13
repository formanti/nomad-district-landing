"use client";

import { motion } from "framer-motion";
import { DollarSign, Globe2, Users } from "lucide-react";

const benefits = [
    {
        title: "Ganar en Dólares",
        description: "Accede a salarios globales sin importar dónde vivas. Multiplica tu poder adquisitivo.",
        icon: DollarSign,
    },
    {
        title: "Disrupción Personal",
        description: "Rompe con el camino tradicional. Tu carrera no tiene por qué ser lineal ni aburrida.",
        icon: Globe2,
    },
    {
        title: "Comunidad Activa",
        description: "Rodéate de personas que están pasando por el mismo proceso que tú.",
        icon: Users,
    },
];

export function BenefitsSection() {
    return (
        <section
            style={{
                padding: '60px 0',
                backgroundColor: '#0d1015'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 16px'
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            color: '#FC7342'
                        }}
                    >
                        ¿Por qué elegirnos?
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(24px, 6vw, 48px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            padding: '0 10px'
                        }}
                    >
                        Transforma tu carrera profesional
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px'
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            style={{
                                padding: '28px',
                                borderRadius: '20px',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
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
                                    backgroundColor: 'rgba(252, 115, 66, 0.1)',
                                    color: '#FC7342'
                                }}
                            >
                                <benefit.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    marginBottom: '12px',
                                    color: '#FFFFFF'
                                }}
                            >
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: '15px',
                                    lineHeight: 1.7,
                                    color: 'rgba(255,255,255,0.6)'
                                }}
                            >
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
