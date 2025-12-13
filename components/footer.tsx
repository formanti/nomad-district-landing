export function Footer() {
    return (
        <footer
            style={{
                padding: '32px 0',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                backgroundColor: 'rgba(0,0,0,0.2)'
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
                <p style={{ marginTop: '8px', fontSize: '12px', color: '#FC7342' }}>
                    Lifestyle as a Service
                </p>
            </div>
        </footer>
    );
}
