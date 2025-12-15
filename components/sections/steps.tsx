"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
    { number: "1", title: "Únete al programa" },
    { number: "2", title: "Accede a la comunidad" },
    { number: "3", title: "Toma los módulos" },
    { number: "4", title: "Sesiones en vivo" },
    { number: "5", title: "Aplica y consigue" },
];

export function StepsSection() {
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
                    maxWidth: '1100px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '14px',
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
                            fontSize: 'clamp(24px, 5vw, 40px)',
                            fontWeight: 700,
                            color: '#FFFFFF'
                        }}
                    >
                        El paso a paso para entrar al programa
                    </h2>
                </div>

                {/* Horizontal Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '16px'
                    }}
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}
                        >
                            {/* Step */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    minWidth: '120px'
                                }}
                            >
                                {/* Circle with number */}
                                <div
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        border: '2px solid #FC7342',
                                        backgroundColor: 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: '#FC7342',
                                        marginBottom: '12px'
                                    }}
                                >
                                    {step.number}
                                </div>
                                {/* Title */}
                                <span
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#FFFFFF',
                                        maxWidth: '120px'
                                    }}
                                >
                                    {step.title}
                                </span>
                            </div>

                            {/* Arrow (not after last item) */}
                            {index < steps.length - 1 && (
                                <ArrowRight
                                    size={24}
                                    style={{
                                        color: 'rgba(255,255,255,0.3)',
                                        flexShrink: 0
                                    }}
                                    className="hidden-mobile"
                                />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    :global(.hidden-mobile) {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
