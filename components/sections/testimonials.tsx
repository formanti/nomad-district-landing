'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'Ximena Tendilla',
        title: 'Customer Success Manager @ Mendel',
        image: '/images/Ximena Tendilla.png',
        story: 'Después de tomar el programa ya conseguí dos trabajos remotos diferentes. Actualmente trabajo híbrido, con la flexibilidad de elegir cuándo ir a la oficina. Lo que aprendí no fue solo para un trabajo, fue una habilidad que puedo usar una y otra vez.',
    },
    {
        name: 'Marla Castañeda',
        title: 'Account Director @ Zappi',
        image: '/images/Marla Castañeda.png',
        story: 'Antes trabajaba en la planta de Pepsico: turnos presenciales de 12 horas, sin flexibilidad, atrapada en la rutina. Tres años después de dar el salto al trabajo remoto, hice 4x mi sueldo en Zappi, una empresa de Londres.',
    },
    {
        name: 'Rubén López',
        title: 'Project Manager @ BairesDev',
        image: '/images/Ruben Lopez.png',
        story: 'Trabajaba en DHL haciendo lo mismo todos los días. Hoy trabajo para una empresa de San Francisco que ni siquiera tiene oficinas. Gano más de $5,000 USD al mes con prestaciones que en México parecen de otro planeta.',
    },
    {
        name: 'Valeria de la Torre',
        title: 'Customer Success Lead @ SimplyAgree',
        image: '/images/Valeria de la Torre.jpg',
        story: 'Soy abogada y trabajé años en el mundo corporativo legal. Conseguí mi primer trabajo como Customer Success Manager en una empresa de legal tech. Usé mi experiencia legal, pero ahora con la libertad que siempre quise.',
    },
    {
        name: 'Juan Pablo Martinez',
        title: 'Operations Associate @ Stripe',
        image: '/images/Juan Pablo Martinez.jpg',
        story: 'Trabajo en Stripe y recientemente me promovieron a Renewals. Este año viví unos meses en Chicago para correr el maratón, trabajando desde la oficina de allá. Tener un trabajo remoto significa que el mundo es tu oficina.',
    },
    {
        name: 'Pamela Gallegos',
        title: 'Onboarding Specialist @ Pulse Protocol',
        image: '/images/Pamela Gallegos.png',
        story: 'Soy Onboarding Specialist en PulseProtocol, una empresa de turismo médico 100% remota. Hoy vivo en España con mi novio, los dos trabajamos remoto y ganamos en dólares. Pudimos tener carrera y vida juntos.',
    },
    {
        name: 'Diego García',
        title: 'Data & Insights @ FXP',
        image: '/images/Diego Garcia.png',
        story: 'Todavía estaba en la universidad cuando conseguí un internship remoto en una startup internacional. Sin experiencia laboral formal, empecé ganando más que muchos de mis compañeros con trabajos presenciales.',
    },
    {
        name: 'Diana Pedroza',
        title: 'Key Account Manager @ CarbonSpaceTech',
        image: '/images/Diana Pedroza.jpg',
        story: 'Tenía un trabajo tradicional en Aguascalientes. Después de tomar el programa, encontré un trabajo 100% remoto. Ahora gano en dólares, tengo seguro internacional, presupuesto para mi home office, y viajes pagados.',
    },
];

// Duplicate for seamless infinite scroll
const DOUBLED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

// Card width + gap for animation calculation
const CARD_WIDTH = 380;
const CARD_GAP = 24;
const TOTAL_WIDTH = (CARD_WIDTH + CARD_GAP) * TESTIMONIALS.length;

function TestimonialCard({ person, onHoverStart, onHoverEnd }: {
    person: typeof TESTIMONIALS[0];
    onHoverStart: () => void;
    onHoverEnd: () => void;
}) {
    return (
        <div
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            style={{
                background: '#1C2128',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #30363D',
                display: 'flex',
                flexDirection: 'column',
                width: `${CARD_WIDTH}px`,
                minHeight: '280px',
                flexShrink: 0,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="hover:border-[#FC7342]/50 hover:shadow-lg hover:shadow-[#FC7342]/10"
        >
            {/* Quote Icon */}
            <div style={{ marginBottom: '16px' }}>
                <Quote size={28} color="#B7B6B6" strokeWidth={1.5} />
            </div>

            {/* Story/Quote */}
            <p
                style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#E0E0E0',
                    flex: 1,
                    marginBottom: '20px',
                }}
            >
                "{person.story}"
            </p>

            {/* Author Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Small Circular Photo */}
                <div
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #B7B6B6',
                        flexShrink: 0,
                    }}
                >
                    <Image
                        src={person.image}
                        alt={person.name}
                        width={44}
                        height={44}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>

                {/* Name & Title */}
                <div>
                    <h4
                        style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#F0F6FC',
                            marginBottom: '2px',
                        }}
                    >
                        {person.name}
                    </h4>
                    <p
                        style={{
                            fontSize: '11px',
                            color: '#B7B6B6',
                        }}
                    >
                        {person.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section
            style={{
                padding: '40px 0 100px 0',
                backgroundColor: '#0D1117',
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <div
                style={{
                    textAlign: 'center',
                    marginBottom: '64px',
                    padding: '0 24px',
                }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'inline-block',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                        color: '#FC7342',
                    }}
                >
                    Historias reales
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(32px, 6vw, 48px)',
                        fontWeight: 700,
                        color: '#F0F6FC',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Lo que dicen sobre nosotros
                </motion.h2>
            </div>

            {/* Infinite Scroll Carousel */}
            <div style={{ position: 'relative', width: '100%' }}>
                {/* Gradient Masks */}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(to right, #0D1117, transparent)',
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(to left, #0D1117, transparent)',
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                />

                {/* Scrolling Container */}
                <motion.div
                    animate={{
                        x: isPaused ? undefined : [0, -TOTAL_WIDTH],
                    }}
                    transition={{
                        x: {
                            duration: 50,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                    style={{
                        display: 'flex',
                        gap: `${CARD_GAP}px`,
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    }}
                >
                    {DOUBLED_TESTIMONIALS.map((person, index) => (
                        <TestimonialCard
                            key={`${person.name}-${index}`}
                            person={person}
                            onHoverStart={() => setIsPaused(true)}
                            onHoverEnd={() => setIsPaused(false)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Social Proof Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                    marginTop: '64px',
                    textAlign: 'center',
                    padding: '0 24px',
                }}
            >
                <p style={{ color: '#B7B6B6', fontSize: '15px' }}>
                    Únete a más de <span style={{ color: '#FC7342', fontWeight: 700 }}>350 profesionales</span> que ya transformaron su carrera.
                </p>
            </motion.div>
        </section>
    );
}
