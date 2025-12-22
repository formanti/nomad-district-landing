'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        story: 'Antes trabajaba en la planta de Pepsico: turnos presenciales de 12 horas, sin flexibilidad, atrapada en la rutina. Tres años después de dar el salto al trabajo remoto, hice 4x mi sueldo en Zappi, una empresa de Londres. Viajo mucho y soy muy feliz con mi vida fuera de la oficina.',
    },
    {
        name: 'Rubén López',
        title: 'Project Manager @ BairesDev',
        image: '/images/Ruben Lopez.png',
        story: 'Trabajaba en DHL haciendo lo mismo todos los días. Hoy trabajo para una empresa de San Francisco que ni siquiera tiene oficinas, todos somos remotos. Gano más de $5,000 USD al mes con prestaciones que en México parecen de otro planeta. El cambio más grande no fue el sueldo, fue dejar de sentir que mi trabajo era un callejón sin salida.',
    },
    {
        name: 'Valeria de la Torre',
        title: 'Customer Success Lead @ SimplyAgree',
        image: '/images/Valeria de la Torre.jpg',
        story: 'Soy abogada y trabajé años en el mundo corporativo legal. Llegó un punto donde quería más: viajar, vivir aventuras, no solo facturar horas. Conseguí mi primer trabajo como Customer Success Manager en una empresa de legal tech. Usé mi experiencia legal, pero ahora con la libertad que siempre quise.',
    },
    {
        name: 'Juan Pablo Martinez',
        title: 'Operations Associate @ Stripe',
        image: '/images/Juan Pablo Martinez.jpg',
        story: 'Trabajo en Stripe y recientemente me promovieron a Renewals, una de las áreas más competitivas de la empresa. Este año viví unos meses en Chicago para correr el maratón, trabajando desde la oficina de allá. Tener un trabajo remoto no significa quedarte en casa, significa que el mundo es tu oficina.',
    },
    {
        name: 'Pamela Gallegos',
        title: 'Onboarding Specialist @ Pulse Protocol',
        image: '/images/Pamela Gallegos.png',
        story: 'Soy Onboarding Specialist en PulseProtocol, una empresa de turismo médico 100% remota. Hoy vivo en España con mi novio, los dos trabajamos remoto y ganamos en dólares. No tuvimos que elegir entre carrera y vida juntos. Pudimos tener ambas.',
    },
    {
        name: 'Diego García',
        title: 'Data & Insights @ FXP',
        image: '/images/Diego Garcia.png',
        story: 'Todavía estaba en la universidad cuando conseguí un internship remoto en una startup internacional de datos y tecnología. Sin experiencia laboral formal, empecé ganando más que muchos de mis compañeros con trabajos presenciales. El programa me dio las herramientas para competir en ligas que ni sabía que existían.',
    },
    {
        name: 'Diana Pedroza',
        title: 'Key Account Manager @ CarbonSpaceTech',
        image: '/images/Diana Pedroza.jpg',
        story: 'Tenía un trabajo tradicional en Aguascalientes. Después de tomar el programa, encontré un trabajo 100% remoto en una empresa de sustentabilidad. Ahora gano en dólares, tengo seguro internacional, presupuesto para mi home office, y viajes pagados. Todo desde mi ciudad o desde donde yo quiera.',
    },
];

// Duplicate the array to ensure seamless infinite scroll
const DOUBLED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section
            className="overflow-hidden relative"
            style={{
                paddingTop: '80px',
                paddingBottom: '60px',
                backgroundColor: '#FFFFFF'
            }}
        >
            <div
                className="container mx-auto px-4"
                style={{
                    marginBottom: '40px'
                }}
            >
                <h2
                    className="text-3xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: '#14181E' }}
                >
                    Casos de Éxito
                </h2>
                <p
                    className="text-lg w-full text-center"
                    style={{ color: '#6B7280' }}
                >
                    Conoce a quienes ya transformaron su carrera con nosotros.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for edges */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }}
                />

                <motion.div
                    className="flex gap-6 w-max pl-8"
                    animate={{
                        x: isPaused ? undefined : ['0%', '-33.33%']
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    style={isPaused ? { animationPlayState: 'paused' } : {}}
                >
                    {DOUBLED_TESTIMONIALS.map((person, index) => (
                        <div
                            key={`${person.name}-${index}`}
                            className="relative w-[280px] h-[450px] md:w-[320px] md:h-[500px] shrink-0 cursor-pointer"
                            style={{ perspective: '1000px' }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Flip Card Container */}
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'rotateY(180deg)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg)';
                                }}
                            >
                                {/* Front of Card */}
                                <div
                                    className="absolute inset-0 rounded-2xl overflow-hidden"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        border: '1px solid #E5E7EB',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 300px, 400px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 z-10">
                                        <h3 className="text-xl font-bold mb-2 text-white leading-tight">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                            {person.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Back of Card */}
                                <div
                                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-center"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        backgroundColor: '#1A1A1A',
                                        border: '1px solid #333',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        padding: '24px'
                                    }}
                                >
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#22C55E]">
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            {person.name}
                                        </h3>
                                        <p className="text-xs text-[#22C55E] font-medium">
                                            {person.title}
                                        </p>
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <p
                                            className="text-sm text-gray-300 leading-relaxed italic"
                                            style={{
                                                textAlign: 'justify',
                                                margin: '0 8px'
                                            }}
                                        >
                                            "{person.story}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
