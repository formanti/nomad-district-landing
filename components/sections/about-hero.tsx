"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                paddingTop: '140px',
                paddingBottom: '80px',
                background: '#F5F5F0',
            }}
        >
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            background: 'rgba(34, 197, 94, 0.15)',
                            border: '1px solid rgba(34, 197, 94, 0.4)',
                            color: '#22C55E'
                        }}
                    >
                        Nomad District
                    </span>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: 'clamp(32px, 8vw, 56px)',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            marginBottom: '24px',
                            color: '#1A1A1A'
                        }}
                    >
                        Quiénes{" "}
                        <span style={{ color: '#22C55E' }}>Somos</span>
                    </h1>

                    {/* Intro text */}
                    <p
                        style={{
                            fontSize: 'clamp(16px, 3vw, 20px)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: '#666666',
                            lineHeight: 1.7,
                        }}
                    >
                        Somos dos profesionales que llevan más de siete años trabajando en empresas remotas internacionales. Construimos nuestras carreras desde cero aplicando a empleos globales, adaptándonos al cambio del mercado y aprovechando el auge del trabajo remoto desde la pandemia.
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(15px, 2.5vw, 18px)',
                            maxWidth: '800px',
                            margin: '24px auto 0',
                            color: '#666666',
                            lineHeight: 1.7,
                        }}
                    >
                        De esa experiencia nació la primera versión de nuestro sistema. Jaime creó el primer curso de trabajos remotos cuando el home office empezó a cambiar el mundo laboral. Santiago se unió después para fortalecer la estrategia, el contenido y el acompañamiento. Desde entonces hemos perfeccionado esta metodología con cientos de personas reales.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
