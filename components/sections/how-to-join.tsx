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
                padding: '80px 0',
                backgroundColor: '#FFFFFF',
            }}
        >
            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '0 20px',
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 6vw, 40px)',
                            fontWeight: 700,
                            marginBottom: '12px',
                            color: '#1A1A1A',
                        }}
                    >
                        ¿Cómo entro al curso?
                    </h2>
                    <p style={{ fontSize: '16px', color: '#666666' }}>
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
                            backgroundColor: '#22C55E',
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
                                gap: '20px',
                                marginBottom: index < steps.length - 1 ? '32px' : '0',
                            }}
                        >
                            {/* Step number */}
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: '#22C55E',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    flexShrink: 0,
                                    zIndex: 1,
                                }}
                            >
                                {step.number}
                            </div>

                            {/* Step content */}
                            <div style={{ flex: 1 }}>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: '#1A1A1A',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: '#666666',
                                        marginBottom: '8px',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {step.description}
                                </p>

                                {/* Skool card for step 2 */}
                                {step.hasSkoolCard && (
                                    <div
                                        style={{
                                            backgroundColor: '#FFFBEB',
                                            border: '1px solid #FCD34D',
                                            borderRadius: '12px',
                                            padding: '16px',
                                            marginTop: '12px',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                            <Image
                                                src="/images/skool-logo.png"
                                                alt="Skool"
                                                width={100}
                                                height={40}
                                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                                            />
                                            <div>
                                                <p style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '16px', margin: 0 }}>
                                                    Skool
                                                </p>
                                                <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
                                                    Nuestra plataforma privada
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {skoolFeatures.map((feature, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <CheckCircle2 size={16} style={{ color: '#22C55E', flexShrink: 0 }} />
                                                    <span style={{ fontSize: '13px', color: '#444444' }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <p
                                    style={{
                                        fontSize: '13px',
                                        color: '#22C55E',
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
                        gap: '32px',
                        marginTop: '48px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <ShieldCheck size={24} style={{ color: '#22C55E' }} />
                        <span style={{ fontSize: '12px', color: '#666666' }}>Pago seguro</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <RefreshCcw size={24} style={{ color: '#22C55E' }} />
                        <span style={{ fontSize: '12px', color: '#666666' }}>Cancela cuando quieras</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <Shield size={24} style={{ color: '#22C55E' }} />
                        <span style={{ fontSize: '12px', color: '#666666' }}>Garantía 30 días</span>
                    </div>
                </motion.div>

                {/* Why Skool explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{
                        marginTop: '32px',
                        padding: '20px',
                        backgroundColor: '#F5F5F0',
                        borderRadius: '12px',
                        textAlign: 'center',
                    }}
                >
                    {/* Member avatars */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
                        {['V', 'J', 'P', 'D'].map((letter, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#22C55E',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    marginLeft: i === 0 ? '0' : '-10px',
                                    border: '2px solid #F5F5F0',
                                    position: 'relative',
                                    zIndex: 4 - i,
                                }}
                            >
                                {letter}
                            </div>
                        ))}
                        <div
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: '#1A1A1A',
                                color: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 600,
                                marginLeft: '-10px',
                                border: '2px solid #F5F5F0',
                                position: 'relative',
                                zIndex: 0,
                            }}
                        >
                            +100
                        </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.6 }}>
                        <strong>¿Por qué Skool?</strong> Es la única plataforma donde podemos darte el curso, la comunidad, las vacantes y las sesiones en vivo, todo en un solo lugar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
