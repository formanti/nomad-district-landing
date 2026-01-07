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
    headline = "Trabaja remoto. Gana en dólares.",
    headlineHighlight = "Vive diferente.",
    subheadline = "No seguimos las reglas del mercado laboral tradicional. Las diseñamos.\nY enseñamos a otros a hacer lo mismo.",
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
                padding: 'clamp(80px, 15vh, 120px) 0 clamp(60px, 10vh, 80px) 0',
            }}
        >
            {/* Background Image with Cinematic Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/images/Window.jpg"
                    alt="Ocean sunset view from terrace"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                    }}
                    priority
                />
                {/* Cinematic dark gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `
                            linear-gradient(
                                to bottom,
                                rgba(13, 17, 23, 0.5) 0%,
                                rgba(13, 17, 23, 0.65) 40%,
                                rgba(13, 17, 23, 0.9) 85%,
                                rgba(13, 17, 23, 1) 100%
                            )
                        `,
                        zIndex: 1,
                    }}
                />
            </div>

            {/* Subtle floating accent */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(252, 115, 66, 0.12) 0%, transparent 70%)',
                    zIndex: 1,
                    filter: 'blur(40px)',
                }}
            />

            {/* Content */}
            <div
                className="hero-content"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 24px',
                    textAlign: 'center'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '32px',
                            background: 'rgba(183, 182, 182, 0.1)',
                            border: '1px solid rgba(183, 182, 182, 0.3)',
                            color: '#B7B6B6',
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        {badge}
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(32px, 8vw, 64px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            marginBottom: '24px',
                            color: '#F0F6FC',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {headline}
                        <br />
                        <span style={{ color: '#FC7342' }}>
                            {headlineHighlight}
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(15px, 3.5vw, 18px)',
                            marginBottom: '40px',
                            maxWidth: '800px',
                            margin: '0 auto 40px auto',
                            color: '#B7B6B6',
                            lineHeight: 1.7,
                            fontWeight: 400,
                        }}
                    >
                        {subheadline.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < subheadline.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link
                            href={SKOOL_URL}
                            id="btn-join-hero"
                            onClick={handleCtaClick}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '16px 36px',
                                borderRadius: '14px',
                                fontSize: '15px',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, rgba(252, 115, 66, 0.4) 0%, rgba(252, 115, 66, 0.25) 100%)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                color: '#FFFFFF',
                                border: '1px solid rgba(252, 115, 66, 0.5)',
                                boxShadow: '0 8px 32px rgba(252, 115, 66, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                            }}
                        >
                            Unirme al programa
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '4px' }}>
                                <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
            >
                <div
                    style={{
                        width: '24px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '2px solid rgba(240, 246, 252, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '8px'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: '4px',
                            height: '8px',
                            borderRadius: '2px',
                            backgroundColor: 'rgba(252, 115, 66, 0.6)'
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
