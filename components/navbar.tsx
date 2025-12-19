"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT US" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid #E5E7EB',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '48px',
                    alignItems: 'center',
                }}
            >
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                position: 'relative',
                                fontSize: '13px',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                color: isActive ? '#22C55E' : '#14181E',
                                textDecoration: 'none',
                                padding: '8px 0',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            <motion.span
                                whileHover={{ color: '#22C55E' }}
                                style={{ display: 'inline-block' }}
                            >
                                {link.label}
                            </motion.span>
                            {/* Animated underline */}
                            <motion.div
                                initial={false}
                                animate={{
                                    width: isActive ? '100%' : '0%',
                                    opacity: isActive ? 1 : 0,
                                }}
                                whileHover={{
                                    width: '100%',
                                    opacity: 1,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #22C55E, #4ADE80)',
                                    borderRadius: '1px',
                                    boxShadow: isActive ? '0 0 10px rgba(34, 197, 94, 0.5)' : 'none',
                                }}
                            />
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
