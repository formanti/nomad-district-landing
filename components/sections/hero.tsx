"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
    badge?: string;
    headline?: string;
    headlineHighlight?: string;
    subheadline?: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
}

export function HeroSection({
    badge = "Remote Job Academy",
    headline = "Encuentra el trabajo remoto",
    headlineHighlight = "de tus sueños.",
    subheadline = "Sistema claro y accionable.\nPara conseguir tu primer trabajo remoto en dólares.",
    ctaPrimary = "Únete al Programa →",
    ctaSecondary = "¿Qué ofrecemos?",
}: HeroSectionProps) {
    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '80px 0 40px 0'
            }}
        >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/images/hero-onbab.jpg"
                    alt="Remote Work Lifestyle"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                    sizes="100vw"
                    quality={90}
                />
                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(20,24,30,0.85) 60%, #14181E 100%)'
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="hero-content"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 20px',
                    textAlign: 'center'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <span
                        className="hero-badge"
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            background: 'rgba(252, 115, 66, 0.15)',
                            border: '1px solid rgba(252, 115, 66, 0.3)',
                            color: '#FC7342'
                        }}
                    >
                        {badge}
                    </span>

                    {/* Headline */}
                    <h1
                        className="hero-headline"
                        style={{
                            fontSize: 'clamp(28px, 8vw, 64px)',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            marginBottom: '20px',
                            color: '#FFFFFF'
                        }}
                    >
                        {headline}{" "}
                        <span style={{ color: '#FC7342' }}>{headlineHighlight}</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="hero-subheadline"
                        style={{
                            fontSize: 'clamp(16px, 4vw, 22px)',
                            marginBottom: '32px',
                            maxWidth: '600px',
                            margin: '0 auto 32px auto',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6,
                            padding: '0 10px'
                        }}
                    >
                        {subheadline.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < subheadline.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="hero-buttons"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 10px'
                        }}
                    >
                        <Link
                            href="https://www.skool.com/nomad-district/plans"
                            id="btn-join-hero"
                            onClick={() => {
                                // Meta Pixel
                                if (typeof window !== 'undefined' && (window as any).fbq) {
                                    (window as any).fbq('track', 'InitiateCheckout');
                                }
                                // GA4
                                if (typeof window !== 'undefined' && (window as any).gtag) {
                                    (window as any).gtag('event', 'initiate_checkout', {
                                        event_category: 'engagement',
                                        event_label: 'hero_cta'
                                    });
                                }
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                maxWidth: '320px',
                                padding: '16px 32px',
                                borderRadius: '9999px',
                                fontSize: '16px',
                                fontWeight: 600,
                                backgroundColor: '#FC7342',
                                color: '#FFFFFF',
                                boxShadow: '0 15px 50px rgba(252, 115, 66, 0.35)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            {ctaPrimary}
                        </Link>
                        <button
                            id="btn-methodology"
                            onClick={() => {
                                document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                maxWidth: '320px',
                                padding: '16px 32px',
                                borderRadius: '9999px',
                                fontSize: '16px',
                                fontWeight: 500,
                                backgroundColor: 'transparent',
                                color: '#FFFFFF',
                                border: '2px solid rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {ctaSecondary}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                className="scroll-indicator"
                style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    display: 'none'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
            >
                <div
                    style={{
                        width: '28px',
                        height: '48px',
                        borderRadius: '9999px',
                        border: '2px solid rgba(255,255,255,0.25)',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '8px'
                    }}
                >
                    <div
                        style={{
                            width: '6px',
                            height: '12px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(255,255,255,0.5)'
                        }}
                    />
                </div>
            </motion.div>

            <style jsx>{`
        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row !important;
            gap: 16px !important;
          }
          .hero-buttons a, .hero-buttons button {
            width: 280px !important;
          }
          .scroll-indicator {
            display: block !important;
          }
        }
      `}</style>
        </section>
    );
}
