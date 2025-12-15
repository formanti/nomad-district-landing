"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FounderCardProps {
    name: string;
    image: string;
    bio: string[];
    delay?: number;
}

function FounderCard({ name, image, bio, delay = 0 }: FounderCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s ease',
            }}
            whileHover={{
                borderColor: 'rgba(252, 115, 66, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
        >
            {/* Photo */}
            <div
                style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    margin: '0 auto 24px',
                    border: '3px solid rgba(252, 115, 66, 0.3)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                }}
            >
                <Image
                    src={image}
                    alt={name}
                    width={180}
                    height={180}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>

            {/* Name */}
            <h3
                style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    marginBottom: '8px',
                }}
            >
                {name}
            </h3>

            {/* Title */}
            <p
                style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#FC7342',
                    textAlign: 'center',
                    marginBottom: '24px',
                    letterSpacing: '0.05em',
                }}
            >
                Founder de Nomad District
            </p>

            {/* Bio */}
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
                {bio.map((paragraph, index) => (
                    <p
                        key={index}
                        style={{
                            fontSize: '15px',
                            marginBottom: index < bio.length - 1 ? '16px' : 0,
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </motion.div>
    );
}

export function FoundersSection() {
    const jaimesBio = [
        "Jaime ha trabajado más de siete años en empresas internacionales liderando proyectos de transformación digital, automatización e inteligencia artificial con equipos completamente remotos. Su experiencia en consultoría, operaciones y adopción tecnológica le ha dado una visión clara de cómo funcionan las compañías globales, qué habilidades buscan y cómo evalúan a los candidatos que quieren trabajar desde cualquier parte del mundo.",
        "Ha trabajado con equipos distribuidos en Estados Unidos, Europa y LATAM, coordinando áreas de ingeniería, producto y negocio. Esto le permitió entender de primera mano cómo operan los equipos remotos modernos, cómo se toman decisiones en empresas internacionales y qué elementos hacen que un profesional sea competitivo en el mercado global.",
        "Durante la pandemia creó el primer curso de trabajos remotos en español, un sistema basado en años de experiencia aplicando, trabajando y colaborando con empresas digitales. Ese proceso evolucionó hasta convertirse en la metodología central de Nomad District.",
        "Hoy Jaime se enfoca en enseñar a las personas cómo entrar al mundo del trabajo remoto tradicional, cómo prepararse para los trabajos del futuro y cómo usar inteligencia artificial para trabajar mejor y competir globalmente."
    ];

    const santiagosBio = [
        "Santiago ha desarrollado su carrera en empresas SaaS internacionales trabajando en Customer Success, Account Management y Growth dentro de equipos completamente remotos. Lleva más de seis años colaborando con compañías de tecnología en Norteamérica y Europa, lo que le ha dado una comprensión profunda de cómo piensan los reclutadores globales, cómo funcionan los equipos distribuidos y qué habilidades te abren la puerta a un trabajo remoto bien pagado.",
        "Su trayectoria en roles estratégicos dentro de empresas tecnológicas le permitió aprender cómo estructurar procesos, cómo comunicar valor en mercados internacionales y cómo posicionarse como un candidato fuerte en industrias de rápido crecimiento.",
        "Después de vivir su propia transición hacia el trabajo remoto y ver cómo esa decisión transformó su carrera, comenzó a documentar cada paso del proceso. Ese conocimiento, sumado a su experiencia directa trabajando con equipos globales y herramientas de inteligencia artificial, es parte esencial del sistema de Nomad District.",
        "Hoy Santiago se dedica a guiar a personas que quieren conseguir trabajos remotos tradicionales, prepararse para los trabajos del futuro y aprender a usar IA como ventaja competitiva."
    ];

    return (
        <section
            style={{
                padding: '80px 0',
                background: '#14181E',
            }}
        >
            <div className="container">
                <div
                    className="founders-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '32px',
                    }}
                >
                    <FounderCard
                        name="Jaime García"
                        image="/images/jaime.jpg"
                        bio={jaimesBio}
                        delay={0}
                    />
                    <FounderCard
                        name="Santiago Sánchez Woodworth"
                        image="/images/santiago.jpeg"
                        bio={santiagosBio}
                        delay={0.2}
                    />
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .founders-grid {
                        grid-template-columns: 1fr !important;
                        max-width: 600px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}
