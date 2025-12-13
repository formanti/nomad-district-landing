"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
    return (
        <section
            style={{
                padding: '100px 0',
                backgroundColor: '#14181E',
                textAlign: 'center'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 24px'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <span
                        style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: '#FC7342'
                        }}
                    >
                        LA METODOLOGÍA
                    </span>

                    {/* Headline */}
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 4vw, 48px)',
                            fontWeight: 700,
                            marginBottom: '48px',
                            color: '#FFFFFF'
                        }}
                    >
                        No vendemos cursos,{" "}
                        <span style={{ color: '#B7B6B6' }}>enseñamos libertad.</span>
                    </h2>

                    {/* Video Placeholder */}
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            paddingBottom: '56.25%', /* 16:9 aspect ratio */
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#0a0c0f',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #1a1f27 0%, #0a0c0f 100%)'
                            }}
                        >
                            {/* Play Button */}
                            <div
                                style={{
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#FC7342',
                                    boxShadow: '0 15px 50px rgba(252, 115, 66, 0.4)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <Play size={40} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
                            </div>
                        </div>

                        {/* Placeholder Text */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '24px',
                                left: '24px',
                                textAlign: 'left'
                            }}
                        >
                            <p style={{ color: '#B7B6B6', fontSize: '14px' }}>
                                Video próximamente
                            </p>
                        </div>
                    </div>

                    {/* Caption */}
                    <p
                        style={{
                            marginTop: '40px',
                            maxWidth: '700px',
                            margin: '40px auto 0 auto',
                            fontSize: '18px',
                            lineHeight: 1.7,
                            color: '#B7B6B6'
                        }}
                    >
                        Descubre cómo hemos ayudado a más de 350 profesionales a escapar de
                        la oficina y construir una vida bajo sus propios términos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
