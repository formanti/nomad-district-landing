"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Feature {
    text: string;
}

interface OfferSectionProps {
    eyebrow?: string;
    headline?: string;
    headlineHighlight?: string;
    subheadline?: string;
    features?: Feature[];
    ctaText?: string;
    disclaimer?: string;
}

const defaultFeatures: Feature[] = [
    { text: "Metodología probada paso a paso" },
    { text: "Preparación de documentos (CV, Cover Letter y LinkedIn)" },
    { text: "Aprende a encontrar los mejores trabajos remotos" },
    { text: "Prepárate para las entrevistas como un pro" },
    { text: "Usa IA para potenciar tu búsqueda" },
    { text: "Sesiones semanales de Q&A en vivo" },
];

export function OfferSection({
    eyebrow = "La oferta completa",
    headline = "Más que una academia,",
    headlineHighlight = "un ecosistema.",
    subheadline = "Todo lo que necesitas para dar el salto, en un solo lugar.",
    features = defaultFeatures,
    ctaText = "Únete al Programa →",
    disclaimer = "Acceso inmediato • Garantía de satisfacción",
}: OfferSectionProps) {
    return (
        <section
            style={{
                padding: '60px 0',
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
                    width: '300px',
                    height: '300px',
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
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 16px',
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
                        padding: '32px 24px',
                        borderRadius: '24px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
                            {eyebrow}
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(24px, 6vw, 44px)',
                                fontWeight: 700,
                                marginBottom: '12px',
                                color: '#FFFFFF'
                            }}
                        >
                            {headline}{" "}
                            <span style={{ color: '#FC7342' }}>{headlineHighlight}</span>
                        </h2>
                        <p
                            style={{
                                fontSize: 'clamp(14px, 3vw, 18px)',
                                color: 'rgba(255,255,255,0.6)'
                            }}
                        >
                            {subheadline}
                        </p>
                    </div>

                    {/* Features List */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '32px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'flex-start'
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
                                        gap: '12px'
                                    }}
                                >
                                    <CheckCircle2
                                        size={22}
                                        style={{ color: '#FC7342', flexShrink: 0 }}
                                    />
                                    <span style={{ fontSize: '15px', color: '#FFFFFF' }}>
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center' }}>
                        <Link
                            href="https://www.skool.com/nomad-district/plans"
                            id="btn-join-offer"
                            onClick={() => {
                                // Meta Pixel
                                if (typeof window !== 'undefined' && (window as any).fbq) {
                                    (window as any).fbq('track', 'InitiateCheckout');
                                }
                                // GA4
                                if (typeof window !== 'undefined' && (window as any).gtag) {
                                    (window as any).gtag('event', 'initiate_checkout', {
                                        event_category: 'engagement',
                                        event_label: 'offer_cta'
                                    });
                                }
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                maxWidth: '320px',
                                padding: '18px 40px',
                                borderRadius: '9999px',
                                fontSize: '16px',
                                fontWeight: 600,
                                backgroundColor: '#FC7342',
                                color: '#FFFFFF',
                                boxShadow: '0 20px 60px rgba(252, 115, 66, 0.35)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            {ctaText}
                        </Link>
                        <p
                            style={{
                                marginTop: '16px',
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.5)'
                            }}
                        >
                            {disclaimer}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
