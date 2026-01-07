"use client";

import { motion } from "framer-motion";

interface CardProps {
    number: string;
    title: string;
    description: string;
}

const items: CardProps[] = [
    {
        number: "01",
        title: "Programa Completo para Conseguir Trabajo Remoto",
        description: "Preparación de documentos, bolsas de trabajo, preparación para entrevistas, tips especializados y mucho más."
    },
    {
        number: "02",
        title: "Templates para crear tus documentos",
        description: "Te damos los mejores templates y documentos ejemplo para que apliques siguiendo estándares internacionales."
    },
    {
        number: "03",
        title: "Acceso a la Comunidad",
        description: "Accede a una comunidad de personas que están pasando por el mismo proceso que tú. Esto lo hace más fácil."
    },
    {
        number: "04",
        title: "Herramientas del Futuro",
        description: "Te compartimos las mejores herramientas y te orientamos para aprender las habilidades que te mantendrán vigente en un mundo tan cambiante."
    }
];

function Card({ number, title, description }: CardProps) {
    return (
        <motion.div
            className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -4 }}
        >
            {/* Top accent area with gradient */}
            <div
                style={{
                    height: '120px',
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(74, 222, 128, 0.12) 50%, rgba(245, 245, 240, 0.9) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), transparent)',
                        top: '-60px',
                        right: '-40px'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(246, 224, 94, 0.2), transparent)',
                        bottom: '-30px',
                        left: '-20px'
                    }}
                />
                {/* Large number display */}
                <span
                    style={{
                        fontFamily: 'Georgia, Times, serif',
                        fontSize: '4rem',
                        fontWeight: 400,
                        color: '#22C55E',
                        opacity: 0.3,
                        letterSpacing: '-0.02em'
                    }}
                >
                    {number}
                </span>
            </div>

            {/* Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span
                    style={{
                        fontFamily: 'Georgia, Times, serif',
                        fontSize: '2rem',
                        color: '#14181E',
                        marginBottom: '12px',
                        display: 'block',
                        lineHeight: 1
                    }}
                >
                    {number}
                </span>
                <h3
                    style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#14181E',
                        marginBottom: '12px',
                        lineHeight: 1.3
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: '0.938rem',
                        color: '#6B7280',
                        lineHeight: 1.6
                    }}
                >
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export function WhatsInsideSection() {
    return (
        <section
            style={{
                padding: '80px 0',
                backgroundColor: '#F5F5F0' // Nomad District beige
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 700,
                            color: '#14181E',
                            marginBottom: '16px',
                            lineHeight: 1.2
                        }}
                    >
                        ¿Qué incluye el programa?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: '1.125rem',
                            color: '#6B7280',
                            lineHeight: 1.7
                        }}
                    >
                        Todo lo que necesitas para encontrar tu trabajo remoto ideal y vivir la vida que siempre soñaste.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px'
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
