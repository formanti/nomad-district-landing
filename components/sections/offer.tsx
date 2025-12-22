"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district/plans";

// Plan features matching Skool exactly
const standardFeatures = [
    "Curso completo de 12 módulos para conseguir",
    "CV, Cover Letter y LinkedIn listos para aplicar",
    "Conoce las mejores bolsas de trabajo remoto y",
    "Trucos y preparación para entrevistas.",
    "Guía práctica del proceso de aplicación",
];

const premiumFeatures = [
    "Todo del Plan Standard +",
    "Sesión 1-1 para ajustar tu estrategia de aplicación",
    "Revisión personalizada de tu CV, Cover Letter y",
    "Vacantes seleccionadas para para tu perfil",
    "Soporte directo para resolver dudas rápido",
    "Seguimiento semanal de tu proceso de aplicación",
];

const vipFeatures = [
    "Todo del Premium +",
    "1 sesión a la semana por 3 meses",
    "Acompañamiento personalizado",
    "Buscamos vacantes por tí (5 semanales)",
    "Lifetime access a la comunidad",
];

interface OfferSectionProps {
    eyebrow?: string;
    headline?: string;
    headlineHighlight?: string;
    subheadline?: string;
}

export function OfferSection({
    eyebrow = "La oferta completa",
    headline = "Más que una academia,",
    headlineHighlight = "un ecosistema.",
    subheadline = "Todo lo que necesitas para dar el salto, en un solo lugar.",
}: OfferSectionProps) {

    // Track clicks for analytics
    const handleCtaClick = (plan: string) => {
        if (typeof window !== 'undefined') {
            // Meta Pixel
            if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
            }
            // GA4
            if ((window as any).gtag) {
                (window as any).gtag('event', 'initiate_checkout', {
                    event_category: 'engagement',
                    event_label: `offer_${plan}`
                });
            }
        }
    };

    return (
        <section
            style={{
                padding: '80px 0',
                backgroundColor: '#F5F5F0', // Skool beige
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 20px',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 40px)',
                            fontWeight: 700,
                            marginBottom: '8px',
                            color: '#1A1A1A'
                        }}
                    >
                        Selecciona tu plan
                    </h2>
                    <p style={{ fontSize: '14px', color: '#666666', marginBottom: '12px' }}>
                        (Precios en USD)
                    </p>
                    <p style={{ fontSize: '14px', color: '#666666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        🎓 Nuestra comunidad vive en{" "}
                        <Image src="/images/skool-logo.png" alt="Skool" width={60} height={20} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                        . Al hacer clic serás redirigido a nuestra plataforma.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        marginBottom: '32px'
                    }}
                >
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '12px',
                            padding: '32px 24px',
                            border: '1px solid #E0E0E0',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <p style={{ fontSize: '36px', fontWeight: 700, color: '#1A1A1A' }}>
                                $99<span style={{ fontSize: '16px', fontWeight: 400, color: '#666666' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A1A', marginTop: '4px' }}>
                                Standard
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', flex: 1 }}>
                            {standardFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <CheckCircle2 size={20} style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('standard')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '14px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                backgroundColor: '#F6E05E',
                                border: '2px solid #1A1A1A',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                textAlign: 'center',
                                textDecoration: 'none',
                                marginTop: 'auto'
                            }}
                        >
                            Elegir Standard
                        </Link>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '12px',
                            padding: '32px 24px',
                            border: '2px solid #22C55E',
                            boxShadow: '0 4px 16px rgba(34, 197, 94, 0.15)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                    >
                        {/* Most Popular Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#22C55E',
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: 700,
                                padding: '6px 16px',
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            ⭐ Más popular
                        </div>
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <p style={{ fontSize: '36px', fontWeight: 700, color: '#1A1A1A' }}>
                                $199<span style={{ fontSize: '16px', fontWeight: 400, color: '#666666' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A1A', marginTop: '4px' }}>
                                Premium
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', flex: 1 }}>
                            {premiumFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <CheckCircle2 size={20} style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('premium')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '14px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                backgroundColor: '#F6E05E',
                                border: '2px solid #1A1A1A',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                textAlign: 'center',
                                textDecoration: 'none',
                                marginTop: 'auto'
                            }}
                        >
                            Elegir Premium
                        </Link>
                    </motion.div>

                    {/* VIP Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '12px',
                            padding: '32px 24px',
                            border: '1px solid #E0E0E0',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <p style={{ fontSize: '36px', fontWeight: 700, color: '#1A1A1A' }}>
                                $649<span style={{ fontSize: '16px', fontWeight: 400, color: '#666666' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A1A', marginTop: '4px' }}>
                                VIP
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', flex: 1 }}>
                            {vipFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <CheckCircle2 size={20} style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('vip')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '14px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                backgroundColor: '#F6E05E',
                                border: '2px solid #1A1A1A',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                textAlign: 'center',
                                textDecoration: 'none',
                                marginTop: 'auto'
                            }}
                        >
                            Elegir VIP
                        </Link>
                    </motion.div>
                </div>

                {/* 30-Day Satisfaction Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '20px 28px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        border: '2px solid #22C55E',
                        maxWidth: '600px',
                        margin: '0 auto 16px auto'
                    }}
                >
                    <ShieldCheck size={28} style={{ color: '#22C55E', flexShrink: 0 }} />
                    <p style={{ fontSize: '15px', color: '#1A1A1A', textAlign: 'left', lineHeight: 1.5, fontWeight: 500 }}>
                        <strong>Garantía de satisfacción:</strong> Si en los primeros 30 días no estás 100% satisfecho, te devolvemos tu dinero sin preguntas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

