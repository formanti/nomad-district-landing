"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/images/uploaded_image_1765646208015.png"
                    alt="Freedom Lifestyle"
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
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 24px',
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
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            borderRadius: '9999px',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '32px',
                            background: 'rgba(252, 115, 66, 0.15)',
                            border: '1px solid rgba(252, 115, 66, 0.3)',
                            color: '#FC7342'
                        }}
                    >
                        Lifestyle as a Service
                    </span>

                    {/* Headline */}
                    <h1
                        style={{
                            fontSize: 'clamp(36px, 6vw, 64px)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            color: '#FFFFFF'
                        }}
                    >
                        Tu trabajo debe financiar tus sueños,{" "}
                        <span style={{ color: '#FC7342' }}>no limitarlos.</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: 'clamp(18px, 2.5vw, 22px)',
                            marginBottom: '48px',
                            maxWidth: '700px',
                            margin: '0 auto 48px auto',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6
                        }}
                    >
                        Rompe el status quo. Consigue un trabajo remoto en dólares
                        y conquista la libertad absoluta.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Link
                            href="https://www.skool.com/nomad-district"
                            id="btn-join-hero"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '18px 48px',
                                borderRadius: '9999px',
                                fontSize: '18px',
                                fontWeight: 600,
                                backgroundColor: '#FC7342',
                                color: '#FFFFFF',
                                boxShadow: '0 15px 50px rgba(252, 115, 66, 0.35)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            Unirse al programa →
                        </Link>
                        <button
                            id="btn-methodology"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '18px 48px',
                                borderRadius: '9999px',
                                fontSize: '18px',
                                fontWeight: 500,
                                backgroundColor: 'transparent',
                                color: '#FFFFFF',
                                border: '2px solid rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Ver metodología
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10
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
        </section>
    );
}
