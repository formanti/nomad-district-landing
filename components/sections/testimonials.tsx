'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
    {
        name: 'Ximena Tendilla',
        title: 'Customer Success Manager @ Mendel',
        image: '/images/Ximena Tendilla.png',
    },
    {
        name: 'Marla Castañeda',
        title: 'Account Director @ Zappi',
        image: '/images/Marla Castañeda.png',
    },
    {
        name: 'Rubén López',
        title: 'Project Manager @ BairesDev',
        image: '/images/Ruben Lopez.png',
    },
    {
        name: 'Valeria de la Torre',
        title: 'Customer Success Lead @ SimplyAgree',
        image: '/images/Valeria de la Torre.jpg',
    },
    {
        name: 'Juan Pablo Martinez',
        title: 'Operations Associate @ Stripe',
        image: '/images/Juan Pablo Martinez.jpg',
    },
    {
        name: 'Pamela Gallegos',
        title: 'Onboarding Specialist @ Pulse Protocol',
        image: '/images/Pamela Gallegos.png',
    },
    {
        name: 'Diego García',
        title: 'Data & Insights @ FXP',
        image: '/images/Diego Garcia.png',
    },
];

// Duplicate the array to ensure seamless infinite scroll
const DOUBLED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
    return (
        <section
            className="overflow-hidden relative"
            style={{
                paddingTop: '45px',
                paddingBottom: '45px',
                backgroundColor: 'var(--background)'
            }}
        >
            <div
                className="container mx-auto px-4"
                style={{
                    marginBottom: '30px'
                }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">Casos de Éxito</h2>
                <p className="text-muted text-lg w-full text-center">
                    Conoce a quienes ya transformaron su carrera con nosotros.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden mask-linear-gradient">
                {/* Gradient Masks for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#14181E] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#14181E] to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max pl-8"
                    animate={{
                        x: ['0%', '-33.33%'] // Move 1/3 since we tripled the data
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40, // Adjust speed here (higher = slower)
                            ease: "linear",
                        },
                    }}
                >
                    {DOUBLED_TESTIMONIALS.map((person, index) => (
                        <div
                            key={`${person.name}-${index}`}
                            className="relative w-[280px] h-[450px] md:w-[320px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
                        >
                            {/* Background Image */}
                            <Image
                                src={person.image}
                                alt={person.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 300px, 400px"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100" />

                            {/* Content */}
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <h3 className="text-xl font-bold mb-2 text-white leading-tight">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                    {person.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
