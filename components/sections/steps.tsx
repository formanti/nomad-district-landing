"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Dale clic en Únete al programa",
        description: "Haz clic en el botón para comenzar tu transformación."
    },
    {
        number: "2",
        title: "Entra a nuestra comunidad en Skool",
        description: "Tendrás acceso a un Classroom con toda nuestra metodología y comunidad."
    },
    {
        number: "3",
        title: "Toma los módulos del classroom",
        description: "Aprende a tu ritmo con contenido estructurado paso a paso."
    },
    {
        number: "4",
        title: "Atiende a nuestras sesiones en vivo",
        description: "Resuelve tus dudas en tiempo real con expertos."
    },
    {
        number: "5",
        title: "Aplica los conocimientos",
        description: "Pon en práctica lo aprendido con ejercicios reales."
    },
    {
        number: "6",
        title: "Consigue tu trabajo remoto",
        description: "Alcanza tu objetivo y empieza a trabajar en dólares."
    },
];

export function StepsSection() {
    return (
        <section
            style={{
                padding: '80px 0',
                backgroundColor: '#14181E'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                        Cómo funciona
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(24px, 6vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF'
                        }}
                    >
                        El paso a paso para{" "}
                        <span style={{ color: '#FC7342' }}>entrar al programa</span>
                    </h2>
                </div>

                {/* Steps */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '20px',
                                padding: '24px',
                                borderRadius: '16px',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}
                        >
                            {/* Step Number */}
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FC7342',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    flexShrink: 0
                                }}
                            >
                                {step.number}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: '#FFFFFF',
                                        marginBottom: '6px'
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: 'rgba(255,255,255,0.6)',
                                        lineHeight: 1.5
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
