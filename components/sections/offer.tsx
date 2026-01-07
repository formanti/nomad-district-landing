"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district/plans";

// Plan features matching Skool exactly
const standardFeatures = [
    "Curso interactivo de 12 módulos para conseguir trabajo remoto",
    "CV, Cover Letter y LinkedIn listos para aplicar",
    "Conoce las mejores bolsas de trabajo remoto y encuentra vacantes que pagan en dólares",
    "Estrategia y preparación para entrevistas",
    "Guía práctica del proceso de aplicación",
];

const premiumFeatures = [
    "Todo del Plan Standard +",
    "Sesión 1-1 para ajustar tu estrategia de aplicación",
    "Revisión personalizada de tu CV, Cover Letter y LinkedIn",
    "Soporte directo para resolver dudas rápido",
    "Seguimiento semanal de tu proceso de aplicación",
    "Vacantes seleccionadas para tu perfil",
];

const vipFeatures = [
    "Todo del Premium +",
    "1 sesión a la semana por 3 meses",
    "Acompañamiento personalizado intensivo",
    "Buscamos vacantes por ti",
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
                padding: '100px 0',
                backgroundColor: '#0D1117',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Subtle background glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(183, 182, 182, 0.03) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    width: '100%',
                    maxWidth: '1080px',
                    margin: '0 auto',
                    padding: '0 24px',
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
                    style={{ textAlign: 'center', marginBottom: '56px' }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: '#B7B6B6',
                        }}
                    >
                        Elige tu plan
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(32px, 6vw, 44px)',
                            fontWeight: 700,
                            marginBottom: '16px',
                            color: '#F0F6FC',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Selecciona tu plan
                    </h2>
                    <p style={{ fontSize: '15px', color: '#B7B6B6', marginBottom: '12px' }}>
                        (Precios en USD)
                    </p>
                    <p style={{ fontSize: '14px', color: '#6E7681', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        🎓 Nuestra comunidad vive en{" "}
                        <Image
                            src="/images/skool-logo.png"
                            alt="Skool"
                            width={60}
                            height={20}
                            style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                filter: 'brightness(0) invert(1) opacity(0.7)',
                            }}
                        />
                        . Al hacer clic serás redirigido.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px',
                        marginBottom: '40px'
                    }}
                >
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        style={{
                            backgroundColor: '#1C2128',
                            borderRadius: '20px',
                            padding: '36px 28px',
                            border: '1px solid #30363D',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                            <p style={{ fontSize: '40px', fontWeight: 700, color: '#F0F6FC' }}>
                                $99<span style={{ fontSize: '16px', fontWeight: 400, color: '#B7B6B6' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#B7B6B6', marginTop: '8px' }}>
                                Standard
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flex: 1 }}>
                            {standardFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircle2 size={18} style={{ color: '#B7B6B6', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#B7B6B6', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('standard')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '16px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#F0F6FC',
                                backgroundColor: 'transparent',
                                border: '1px solid #30363D',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
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
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        style={{
                            backgroundColor: '#1C2128',
                            borderRadius: '20px',
                            padding: '36px 28px',
                            border: '1px solid #FC7342',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                    >
                        {/* Most Popular Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-14px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(135deg, #FC7342, #E65A2B)',
                                color: '#F0F6FC',
                                fontSize: '11px',
                                fontWeight: 700,
                                padding: '8px 20px',
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 15px rgba(252, 115, 66, 0.4)',
                            }}
                        >
                            ⭐ Más popular
                        </div>
                        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                            <p style={{ fontSize: '40px', fontWeight: 700, color: '#F0F6FC' }}>
                                $299<span style={{ fontSize: '16px', fontWeight: 400, color: '#B7B6B6' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#FC7342', marginTop: '8px' }}>
                                Premium
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flex: 1 }}>
                            {premiumFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircle2 size={18} style={{ color: '#B7B6B6', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#F0F6FC', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('premium')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '16px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#F0F6FC',
                                background: 'linear-gradient(135deg, #FC7342, #E65A2B)',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textAlign: 'center',
                                textDecoration: 'none',
                                marginTop: 'auto',
                                boxShadow: '0 8px 30px rgba(252, 115, 66, 0.3)',
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
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        style={{
                            backgroundColor: '#1C2128',
                            borderRadius: '20px',
                            padding: '36px 28px',
                            border: '1px solid #30363D',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                            <p style={{ fontSize: '40px', fontWeight: 700, color: '#F0F6FC' }}>
                                $749<span style={{ fontSize: '16px', fontWeight: 400, color: '#B7B6B6' }}>/year</span>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#FC7342', marginTop: '8px' }}>
                                VIP
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flex: 1 }}>
                            {vipFeatures.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircle2 size={18} style={{ color: '#B7B6B6', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '14px', color: '#B7B6B6', lineHeight: 1.5 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={SKOOL_URL}
                            onClick={() => handleCtaClick('vip')}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '16px 24px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#0D1117',
                                background: 'linear-gradient(135deg, #FC7342, #E65A2B)',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textAlign: 'center',
                                textDecoration: 'none',
                                marginTop: 'auto',
                                boxShadow: '0 8px 30px rgba(252, 115, 66, 0.3)',
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
                        gap: '16px',
                        padding: '24px 32px',
                        backgroundColor: '#1C2128',
                        borderRadius: '16px',
                        border: '1px solid rgba(252, 115, 66, 0.3)',
                        maxWidth: '650px',
                        margin: '0 auto'
                    }}
                >
                    <ShieldCheck size={32} style={{ color: '#FC7342', flexShrink: 0 }} />
                    <p style={{ fontSize: '15px', color: '#B7B6B6', textAlign: 'left', lineHeight: 1.6 }}>
                        <strong style={{ color: '#F0F6FC' }}>Garantía de satisfacción:</strong> Si en los primeros 30 días no estás 100% satisfecho, te devolvemos tu dinero sin preguntas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
