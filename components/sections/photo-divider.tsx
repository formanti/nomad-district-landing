"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoDividerProps {
    imageSrc: string;
    alt?: string;
    height?: string;
}

export function PhotoDivider({
    imageSrc,
    alt = "Adventure lifestyle",
    height = "300px"
}: PhotoDividerProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'relative',
                width: '100%',
                height: height,
                overflow: 'hidden',
            }}
        >
            <Image
                src={imageSrc}
                alt={alt}
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center 40%'
                }}
            />
            {/* Subtle gradient overlays for smooth transitions */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(245, 245, 240, 0.3) 0%, transparent 20%, transparent 80%, rgba(245, 245, 240, 0.3) 100%)',
                    pointerEvents: 'none'
                }}
            />
        </motion.section>
    );
}
