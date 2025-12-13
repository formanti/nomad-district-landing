"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
    "Metodología clara paso a paso",
    "Vacantes filtradas cada semana",
    "Revisión de CV y perfil PRO",
    "Comunidad privada para networking",
    "Sesiones semanales en vivo",
    "BONUS: Módulos AI Native & Monetización",
];

export function OfferSection() {
    return (
        <section
            style={{
                padding: '100px 0',
                backgroundColor: '#14181E',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative gradient */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(252, 115, 66, 0.12) 0%, transparent 70%)',
                    transform: 'translate(50%, -50%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />

            <div
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        padding: '60px 48px',
                        borderRadius: '32px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span
                            style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                color: '#FC7342'
                            }}
                        >
                            La oferta completa
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 4vw, 44px)',
                                fontWeight: 700,
                                marginBottom: '16px',
                                color: '#FFFFFF'
                            }}
                        >
                            Más que una academia,{" "}
                            <span style={{ color: '#FC7342' }}>un ecosistema.</span>
                        </h2>
                        <p
                            style={{
                                fontSize: '18px',
                                color: 'rgba(255,255,255,0.6)'
                            }}
                        >
                            Todo lo que necesitas para dar el salto, en un solo lugar.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '20px',
                            marginBottom: '48px'
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                }}
                            >
                                <CheckCircle2
                                    size={24}
                                    style={{ color: '#FC7342', flexShrink: 0 }}
                                />
                                <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center' }}>
                        <Link
                            href="https://www.skool.com/nomad-district"
                            id="btn-join-offer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px 56px',
                                borderRadius: '9999px',
                                fontSize: '18px',
                                fontWeight: 600,
                                backgroundColor: '#FC7342',
                                color: '#FFFFFF',
                                boxShadow: '0 20px 60px rgba(252, 115, 66, 0.35)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            Unirse ahora al programa →
                        </Link>
                        <p
                            style={{
                                marginTop: '20px',
                                fontSize: '14px',
                                color: 'rgba(255,255,255,0.5)'
                            }}
                        >
                            Acceso inmediato • Garantía de satisfacción
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
