'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Shield, RefreshCcw, ShieldCheck } from 'lucide-react';

const steps = [
    {
        number: 1,
        title: 'Elige tu plan',
        description: 'Escoge el nivel de acompañamiento que mejor se ajuste a ti.',
        cta: '↓ Siguiente paso',
    },
    {
        number: 2,
        title: 'Crea tu cuenta en Skool',
        description: 'Te redirigimos a nuestra plataforma privada. Solo necesitas un email.',
        cta: '30 segundos',
        hasSkoolCard: true,
    },
    {
        number: 3,
        title: 'Empieza hoy',
        description: 'Acceso inmediato a todo el contenido. Sin esperas.',
        cta: '✓ Listo',
    },
];

const skoolFeatures = [
    'Curso completo paso a paso',
    'Comunidad de +100 miembros',
    'Sesiones en vivo semanales',
    'Vacantes exclusivas cada semana',
];

export function HowToJoinSection() {
    return (
        <section
            style={{
                padding: '100px 0',
                backgroundColor: '#161B22',
            }}
        >
            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '0 24px',
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '56px' }}
                >
                    <span
                        style={{
                            display: 'block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: '#B7B6B6',
                        }}
                    >
                        Proceso simple
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(32px, 6vw, 44px)',
                            fontWeight: 700,
                            marginBottom: '12px',
                            color: '#F0F6FC',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        ¿Cómo entro al curso?
                    </h2>
                    <p style={{ fontSize: '16px', color: '#B7B6B6' }}>
                        3 pasos. Menos de 2 minutos.
                    </p>
                </motion.div>

                {/* Steps */}
                <div style={{ position: 'relative' }}>
                    {/* Vertical line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '40px',
                            bottom: '40px',
                            width: '2px',
                            background: 'linear-gradient(to bottom, #B7B6B6, #8A8A8A)',
                        }}
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            style={{
                                display: 'flex',
                                gap: '24px',
                                marginBottom: index < steps.length - 1 ? '40px' : '0',
                            }}
                        >
                            {/* Step number */}
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #4A4A4A, #3A3A3A)',
                                    color: '#F0F6FC',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    flexShrink: 0,
                                    zIndex: 1,
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                {step.number}
                            </div>

                            {/* Step content */}
                            <div style={{ flex: 1 }}>
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: '#F0F6FC',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: '#B7B6B6',
                                        marginBottom: '12px',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {step.description}
                                </p>

                                {/* Skool card for step 2 */}
                                {step.hasSkoolCard && (
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(183, 182, 182, 0.08)',
                                            border: '1px solid rgba(183, 182, 182, 0.2)',
                                            borderRadius: '16px',
                                            padding: '20px',
                                            marginTop: '16px',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                            <Image
                                                src="/images/SK.png"
                                                alt="Skool"
                                                width={44}
                                                height={44}
                                                style={{ objectFit: 'contain', borderRadius: '8px' }}
                                            />
                                            <div>
                                                <p style={{ fontWeight: 700, color: '#F0F6FC', fontSize: '17px', margin: 0 }}>
                                                    Skool
                                                </p>
                                                <p style={{ fontSize: '13px', color: '#B7B6B6', margin: 0 }}>
                                                    Nuestra plataforma privada
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {skoolFeatures.map((feature, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <CheckCircle2 size={16} style={{ color: '#FC7342', flexShrink: 0 }} />
                                                    <span style={{ fontSize: '14px', color: '#F0F6FC' }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <p
                                    style={{
                                        fontSize: '13px',
                                        color: '#FC7342',
                                        fontWeight: 600,
                                    }}
                                >
                                    {step.cta}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '40px',
                        marginTop: '56px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <ShieldCheck size={24} style={{ color: '#FC7342' }} />
                        <span style={{ fontSize: '12px', color: '#B7B6B6' }}>Pago seguro</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <RefreshCcw size={24} style={{ color: '#FC7342' }} />
                        <span style={{ fontSize: '12px', color: '#B7B6B6' }}>Cancela cuando quieras</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <Shield size={24} style={{ color: '#FC7342' }} />
                        <span style={{ fontSize: '12px', color: '#B7B6B6' }}>Garantía 30 días</span>
                    </div>
                </motion.div>

                {/* Why Skool explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{
                        marginTop: '40px',
                        padding: '24px',
                        backgroundColor: '#1C2128',
                        border: '1px solid #30363D',
                        borderRadius: '16px',
                        textAlign: 'center',
                    }}
                >
                    {/* Member avatars */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                        {['V', 'J', 'P', 'D'].map((letter, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #FC7342, #E65A2B)',
                                    color: '#F0F6FC',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    marginLeft: i === 0 ? '0' : '-10px',
                                    border: '2px solid #1C2128',
                                    position: 'relative',
                                    zIndex: i + 1,
                                }}
                            >
                                {letter}
                            </div>
                        ))}
                        <div
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                backgroundColor: '#FC7342',
                                color: '#0D1117',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 700,
                                marginLeft: '-10px',
                                border: '2px solid #1C2128',
                                position: 'relative',
                                zIndex: 10,
                            }}
                        >
                            +100
                        </div>
                    </div>
                    <p style={{ fontSize: '15px', color: '#B7B6B6', lineHeight: 1.7 }}>
                        <strong style={{ color: '#F0F6FC' }}>¿Por qué Skool?</strong> Es la única plataforma donde podemos darte el curso, la comunidad, las vacantes y las sesiones en vivo, todo en un solo lugar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
