"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district/plans";

export function AboutCTA() {
    const handleCtaClick = () => {
        if (typeof window !== 'undefined') {
            // Meta Pixel
            if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
            }
            // GA4
            if ((window as any).gtag) {
                (window as any).gtag('event', 'initiate_checkout', {
                    event_category: 'engagement',
                    event_label: 'about_cta'
                });
            }
        }
    };

    return (
        <section
            style={{
                padding: '100px 0',
                background: '#161B22',
                borderTop: '1px solid #30363D',
            }}
        >
            <div className="container">
                {/* Why it matters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto 60px',
                        textAlign: 'center',
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(24px, 5vw, 36px)',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            marginBottom: '24px',
                        }}
                    >
                        Por Qué Importa{" "}
                        <span style={{ color: '#FC7342' }}>Para Ti</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 3vw, 18px)',
                            color: '#B7B6B6',
                            lineHeight: 1.7,
                            marginBottom: '20px',
                        }}
                    >
                        Nuestro sistema no es teoría. Es la misma ruta que usamos para crecer profesionalmente en empresas de Estados Unidos, Europa y LATAM. Lo que enseñamos es lo que nos ha funcionado a nosotros y a cientos de personas que hoy viven del trabajo remoto.
                    </p>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 3vw, 18px)',
                            color: '#B7B6B6',
                            lineHeight: 1.7,
                        }}
                    >
                        Hoy todo está dentro de nuestra comunidad en Skool. Tienes acceso al método, a las herramientas, a las vacantes filtradas y a un acompañamiento que te guía paso a paso para conseguir tu trabajo remoto en dólares.
                    </p>
                </motion.div>

                {/* CTA Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: '#1C2128',
                        borderRadius: '16px',
                        padding: '48px 32px',
                        textAlign: 'center',
                        border: '1px solid #30363D',
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}
                >
                    <h3
                        style={{
                            fontSize: 'clamp(20px, 4vw, 28px)',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            marginBottom: '24px',
                            lineHeight: 1.3,
                        }}
                    >
                        ¿Listo para aplicar el mismo sistema que ya cambió la vida de cientos de personas?
                    </h3>
                    <Link
                        href={SKOOL_URL}
                        id="btn-about-cta"
                        onClick={handleCtaClick}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '16px 40px',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: 700,
                            backgroundColor: '#FC7342',
                            color: '#0D1117',
                            border: '1px solid #FC7342',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Únete al Programa →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
