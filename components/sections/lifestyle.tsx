'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LifestyleSection() {
    return (
        <section
            style={{
                padding: '0',
                backgroundColor: '#0D1117',
                overflow: 'hidden',
            }}
        >
            {/* Full-width lifestyle banner */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(250px, 40vw, 400px)',
                }}
            >
                <Image
                    src="/images/Adventure.jpg"
                    alt="Nomad lifestyle - hiking, beach, sailing"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                {/* Subtle overlay for text readability if needed */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.1) 50%, rgba(13,17,23,0.3) 100%)',
                    }}
                />

                {/* Optional text overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(20px, 4vw, 32px)',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            textAlign: 'center',
                            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Tu oficina puede ser <span style={{ color: '#FC7342' }}>cualquier lugar</span>
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
