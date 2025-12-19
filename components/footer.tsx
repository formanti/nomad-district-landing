export function Footer() {
    return (
        <footer
            style={{
                padding: '40px 0',
                textAlign: 'center',
                borderTop: '1px solid #E0E0E0',
                backgroundColor: '#F5F5F0'
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
                <p style={{ fontSize: '14px', color: '#666666' }}>
                    &copy; {new Date().getFullYear()} Nomad District. Todos los derechos reservados.
                </p>
                <p style={{ marginTop: '8px', fontSize: '12px', color: '#22C55E' }}>
                    Lifestyle as a Service
                </p>
            </div>
        </footer>
    );
}
