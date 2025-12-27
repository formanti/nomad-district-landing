"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district/plans";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT US" },
    ];

    const handleCtaClick = () => {
        if (typeof window !== 'undefined') {
            if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
            }
            if ((window as any).gtag) {
                (window as any).gtag('event', 'initiate_checkout', {
                    event_category: 'engagement',
                    event_label: 'navbar_cta'
                });
            }
        }
    };

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
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid #E5E7EB',
            }}
        >
            {/* Logo Section */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    {/* Mobile Isotype */}
                    <div className="logo-mobile">
                        <Image
                            src="/images/isotipo.png"
                            alt="Nomad District Isotype"
                            width={32}
                            height={32}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    {/* Desktop Logo */}
                    <div className="logo-desktop">
                        <Image
                            src="/images/logo.png"
                            alt="Nomad District Logo"
                            width={140}
                            height={32}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </Link>
            </div>

            <style jsx>{`
                .logo-mobile {
                    display: block;
                }
                .logo-desktop {
                    display: none;
                }
                @media (min-width: 640px) {
                    .logo-mobile {
                        display: none;
                    }
                    .logo-desktop {
                        display: block;
                    }
                }
            `}</style>

            {/* Center navigation links */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <style jsx>{`
                    .nav-links-container {
                        gap: 16px;
                    }
                    @media (min-width: 640px) {
                        .nav-links-container {
                            gap: 48px;
                        }
                    }
                `}</style>
                {/* Links wrapper with class */}
                <div className="nav-links-container" style={{ display: 'flex', alignItems: 'center' }}>

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
            </div>

            {/* Right side button */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                {/* Log in button */}
                <Link
                    href={SKOOL_URL}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#14181E',
                        textDecoration: 'none',
                        border: '1px solid #D1D5DB',
                        background: 'transparent',
                        transition: 'all 0.2s ease',
                    }}
                >
                    Log in
                </Link>
            </div>
        </motion.nav>
    );
}
