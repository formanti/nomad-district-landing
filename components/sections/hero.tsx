"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district/plans";

interface HeroSectionProps {
    badge?: string;
    headline?: string;
    headlineHighlight?: string;
    subheadline?: string;
}

export function HeroSection({
    badge = "Remote Job Academy",
    headline = "Consigue un trabajo remoto",
    headlineHighlight = "con sueldo en dólares.",
    subheadline = "Método probado y garantizado.\nEl sistema que funcionó para 350+ personas como tú.",
}: HeroSectionProps) {

    const handleCtaClick = () => {
        if (typeof window !== 'undefined') {
            if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
            }
            if ((window as any).gtag) {
                (window as any).gtag('event', 'initiate_checkout', {
                    event_category: 'engagement',
                    event_label: 'hero_cta'
                });
            }
        }
    };

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
                padding: 'clamp(40px, 10vh, 80px) 0 clamp(40px, 8vh, 60px) 0',
                backgroundColor: '#F5F5F0'
            }}
        >
            {/* Background Video with Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                {/* Fallback Image for mobile/slow connections */}
                <Image
                    src="/images/pexels-ron-lach.jpg"
                    alt="Freedom background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', zIndex: 0 }}
                    priority
                />
                {/* MP4 Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'cover',
                        zIndex: 1,
                    }}
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(245, 245, 240, 0.85) 0%, rgba(245, 245, 240, 0.7) 50%, rgba(245, 245, 240, 0.85) 100%)',
                        zIndex: 2,
                    }}
                />
            </div>

            {/* Floating animated circles as subtle decoration */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '15%',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    border: '1px solid rgba(34, 197, 94, 0.15)',
                    zIndex: 1
                }}
            />
            <motion.div
                animate={{
                    y: [0, 12, 0],
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '10%',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '1px solid rgba(246, 224, 94, 0.2)',
                    zIndex: 1
                }}
            />

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
                            background: 'rgba(34, 197, 94, 0.15)',
                            border: '1px solid rgba(34, 197, 94, 0.4)',
                            color: '#22C55E'
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
                            color: '#1A1A1A'
                        }}
                    >
                        {headline}{" "}
                        <span style={{ color: '#22C55E' }}>{headlineHighlight}</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="hero-subheadline"
                        style={{
                            fontSize: 'clamp(16px, 4vw, 22px)',
                            marginBottom: '32px',
                            maxWidth: '600px',
                            margin: '0 auto 32px auto',
                            color: '#666666',
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

                    {/* CTA Button - Glass Style */}
                    <Link
                        href={SKOOL_URL}
                        id="btn-join-hero"
                        onClick={handleCtaClick}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 28px',
                            borderRadius: '12px',
                            fontSize: '14px',
                            fontWeight: 600,
                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            color: '#1A1A1A',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                        }}
                    >
                        Únete al programa
                    </Link>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
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
                        border: '2px solid rgba(26,26,26,0.25)',
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
                            backgroundColor: 'rgba(26,26,26,0.4)'
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
