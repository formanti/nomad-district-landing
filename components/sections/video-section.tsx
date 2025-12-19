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
    videoUrl = "https://player.vimeo.com/video/1146233269?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    caption = "Descubre cómo hemos ayudado a más de 350 profesionales a escapar de la oficina y construir una vida bajo sus propios términos.",
}: VideoSectionProps) {
    return (
        <section
            id="video-section"
            style={{
                padding: '80px 0',
                backgroundColor: '#FFFFFF', // White background
                textAlign: 'center'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 20px'
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
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            color: '#22C55E'
                        }}
                    >
                        {eyebrow}
                    </span>

                    {/* Headline */}
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 48px)',
                            fontWeight: 700,
                            marginBottom: '32px',
                            color: '#14181E', // Dark text
                            padding: '0 10px'
                        }}
                    >
                        {headline}
                    </h2>

                    {/* Vimeo Video Embed */}
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            paddingBottom: '56.25%',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            backgroundColor: '#14181E',
                            border: '1px solid #E5E7EB',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
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
                            marginTop: '24px',
                            maxWidth: '600px',
                            margin: '24px auto 0 auto',
                            fontSize: 'clamp(14px, 3vw, 18px)',
                            lineHeight: 1.7,
                            color: '#6B7280', // Gray text
                            padding: '0 10px'
                        }}
                    >
                        {caption}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
