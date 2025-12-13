"use client";

import { motion } from "framer-motion";

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

                    {/* Vimeo Video Embed */}
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
                        <iframe
                            src="https://player.vimeo.com/video/1146233269?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
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
