"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
    eyebrow?: string;
    headline?: string;
    videoUrl?: string;
    caption?: string;
}

export function VideoSection({
    eyebrow = "¿Qué ofrecemos?",
    headline = "Toma el control de tu carrera.",
    videoUrl = "https://player.vimeo.com/video/1148703598?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    caption = "Descubre cómo hemos ayudado a más de 350 profesionales a escapar de la oficina y construir una vida bajo sus propios términos.",
}: VideoSectionProps) {
    return (
        <section
            id="video-section"
            style={{
                padding: '100px 0',
                backgroundColor: '#0D1117',
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Label */}
                    <span
                        style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: '#B7B6B6'
                        }}
                    >
                        {eyebrow}
                    </span>

                    {/* Headline */}
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 48px)',
                            fontWeight: 700,
                            marginBottom: '48px',
                            color: '#F0F6FC',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {headline}
                    </h2>

                    {/* Video Container with Glow Effect */}
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            paddingBottom: '56.25%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#161B22',
                            border: '1px solid #30363D',
                            boxShadow: '0 0 80px rgba(252, 115, 66, 0.1), 0 20px 60px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <iframe
                            src={videoUrl}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="Nomad District - Metodología"
                        />
                    </div>

                    {/* Caption */}
                    <p
                        style={{
                            marginTop: '32px',
                            maxWidth: '650px',
                            margin: '32px auto 0 auto',
                            fontSize: 'clamp(14px, 3vw, 17px)',
                            lineHeight: 1.8,
                            color: '#B7B6B6',
                        }}
                    >
                        {caption}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
