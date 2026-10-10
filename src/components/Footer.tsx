import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="ct-footer" style={{ marginTop: 'auto' }}>
      {/* Top row */}
      <div style={{ padding: '48px 0 36px', backgroundColor: 'var(--md-sys-color-surface)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h3
            className="widget-title"
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
            }}
          >
            👋 Get in Touch
          </h3>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.65',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
              margin: 0,
            }}
          >
            Comments, suggestions, or guest ideas? We’d love to hear from you. Please get in touch via our{' '}
            <Link to="/contact" className="ek-link" style={{ color: 'var(--theme-palette-color-1, #624aca)' }}>
              site
            </Link>{' '}
            or{' '}
            <a href="mailto:us@awake-in.com" className="ek-link" style={{ color: 'var(--theme-palette-color-1, #624aca)' }}>
              email
            </a>
            !
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '15px', color: 'var(--md-sys-color-on-surface-variant)' }}>
          Copyright © 2026 Awake In
        </p>
      </div>
    </footer>
  );
};
