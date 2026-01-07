import Link from "next/link";

export function Footer() {
    return (
        <footer
            style={{
                padding: '48px 0',
                textAlign: 'center',
                borderTop: '1px solid #30363D',
                backgroundColor: '#0D1117'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 24px'
                }}
            >
                <p style={{ fontSize: '14px', color: '#B7B6B6' }}>
                    &copy; {new Date().getFullYear()} Nomad District. Todos los derechos reservados.
                </p>
                <p style={{
                    marginTop: '12px',
                    fontSize: '13px',
                    background: 'linear-gradient(135deg, #FC7342, #E65A2B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                }}>
                    Lifestyle as a Service
                </p>
            </div>
        </footer>
    );
}
