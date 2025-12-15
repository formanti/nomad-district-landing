"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutCTA() {
    return (
        <section
            style={{
                padding: '80px 0 100px',
                background: '#14181E',
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
                            color: '#FFFFFF',
                            marginBottom: '24px',
                        }}
                    >
                        Por Qué Importa{" "}
                        <span style={{ color: '#FC7342' }}>Para Ti</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 3vw, 18px)',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.7,
                            marginBottom: '20px',
                        }}
                    >
                        Nuestro sistema no es teoría. Es la misma ruta que usamos para crecer profesionalmente en empresas de Estados Unidos, Europa y LATAM. Lo que enseñamos es lo que nos ha funcionado a nosotros y a cientos de personas que hoy viven del trabajo remoto.
                    </p>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 3vw, 18px)',
                            color: 'rgba(255, 255, 255, 0.7)',
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
                        background: 'linear-gradient(145deg, rgba(252, 115, 66, 0.1) 0%, rgba(252, 115, 66, 0.05) 100%)',
                        borderRadius: '24px',
                        padding: '48px 32px',
                        textAlign: 'center',
                        border: '1px solid rgba(252, 115, 66, 0.2)',
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}
                >
                    <h3
                        style={{
                            fontSize: 'clamp(20px, 4vw, 28px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            marginBottom: '24px',
                            lineHeight: 1.3,
                        }}
                    >
                        ¿Listo para aplicar el mismo sistema que ya cambió la vida de cientos de personas?
                    </h3>
                    <Link
                        href="https://www.skool.com/nomad-district/plans"
                        id="btn-about-cta"
                        onClick={() => {
                            // Meta Pixel
                            if (typeof window !== 'undefined' && (window as any).fbq) {
                                (window as any).fbq('track', 'InitiateCheckout');
                            }
                            // GA4
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'initiate_checkout', {
                                    event_category: 'engagement',
                                    event_label: 'about_cta'
                                });
                            }
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '18px 40px',
                            borderRadius: '9999px',
                            fontSize: '18px',
                            fontWeight: 600,
                            backgroundColor: '#FC7342',
                            color: '#FFFFFF',
                            boxShadow: '0 15px 50px rgba(252, 115, 66, 0.35)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                        }}
                    >
                        Únete al Programa →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
