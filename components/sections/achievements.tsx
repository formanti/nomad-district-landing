"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        number: "350+",
        label: "Personas han conseguido trabajos remotos reales",
        icon: "👥",
    },
    {
        number: "$4,500+",
        label: "Dólares mensuales que ganan miembros de nuestra comunidad",
        icon: "💰",
    },
    {
        number: "10+",
        label: "Países y sectores donde hemos probado este proceso",
        icon: "🌎",
    },
    {
        number: "7+",
        label: "Años aplicando esto en nuestra propia carrera profesional",
        icon: "🚀",
    },
];

export function AchievementsSection() {
    return (
        <section
            style={{
                padding: '100px 0',
                background: '#0D1117',
                borderTop: '1px solid #30363D',
            }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 42px)',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            marginBottom: '16px',
                        }}
                    >
                        Qué Hemos{" "}
                        <span style={{ color: '#FC7342' }}>Logrado</span>
                    </h2>
                </motion.div>

                <div
                    className="achievements-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '24px',
                    }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                background: '#1C2128',
                                borderRadius: '20px',
                                padding: '32px 24px',
                                textAlign: 'center',
                                border: '1px solid #30363D',
                                transition: 'all 0.3s ease',
                            }}
                            whileHover={{
                                borderColor: 'rgba(252, 115, 66, 0.5)',
                                transform: 'translateY(-4px)',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '40px',
                                    marginBottom: '16px',
                                }}
                            >
                                {achievement.icon}
                            </div>
                            <div
                                style={{
                                    fontSize: 'clamp(28px, 5vw, 36px)',
                                    fontWeight: 700,
                                    color: '#FC7342',
                                    marginBottom: '12px',
                                }}
                            >
                                {achievement.number}
                            </div>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: '#B7B6B6',
                                    lineHeight: 1.5,
                                }}
                            >
                                {achievement.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .achievements-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    .achievements-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
