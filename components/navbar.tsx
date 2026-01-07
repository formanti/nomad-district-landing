"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Skool URL
const SKOOL_URL = "https://www.skool.com/nomad-district";

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
        <>
            <style jsx global>{`
                .logo-mobile {
                    display: block;
                }
                .logo-desktop {
                    display: none;
                }
                .nav-links-container {
                    gap: 16px;
                }
                @media (min-width: 640px) {
                    .logo-mobile {
                        display: none;
                    }
                    .logo-desktop {
                        display: block;
                    }
                    .nav-links-container {
                        gap: 48px;
                    }
                }
            `}</style>
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
                    background: 'rgba(13, 17, 23, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(48, 54, 61, 0.5)',
                }}
            >
                {/* Logo Section */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Mobile Isotype */}
                        <div className="logo-mobile">
                            <Image
                                src="/images/isotipo.png"
                                alt="Nomad District"
                                width={42}
                                height={42}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'brightness(0) invert(1)',
                                }}
                                priority
                                unoptimized
                            />
                        </div>
                        {/* Desktop Logo */}
                        <div className="logo-desktop">
                            <Image
                                src="/images/logo-new.png"
                                alt="Nomad District"
                                width={160}
                                height={38}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'brightness(0) invert(1)',
                                }}
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>

                {/* Center navigation links */}
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
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '0.12em',
                                    color: isActive ? '#FC7342' : '#F0F6FC',
                                    textDecoration: 'none',
                                    padding: '8px 0',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                <motion.span
                                    whileHover={{ color: '#FC7342' }}
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
                                        background: 'linear-gradient(90deg, #FC7342, #E65A2B)',
                                        borderRadius: '1px',
                                        boxShadow: isActive ? '0 0 12px rgba(252, 115, 66, 0.5)' : 'none',
                                    }}
                                />
                            </Link>
                        );
                    })}
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
                        onClick={handleCtaClick}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            color: '#F0F6FC',
                            textDecoration: 'none',
                            border: '1px solid rgba(252, 115, 66, 0.4)',
                            background: 'rgba(252, 115, 66, 0.1)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Log in
                    </Link>
                </div>
            </motion.nav>
        </>
    );
}
