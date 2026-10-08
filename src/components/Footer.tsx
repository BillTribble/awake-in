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
            </Link>
            ,{' '}
            <a href="mailto:us@awake-in.com" className="ek-link" style={{ color: 'var(--theme-palette-color-1, #624aca)' }}>
              email
            </a>
            , or our socials!
          </p>
        </div>
      </div>

      {/* Middle row: background-color #e2e2e2 */}
      <div style={{ backgroundColor: '#e2e2e2', padding: '32px 0' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h3
            className="widget-title"
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'rgba(44, 62, 80, 1)',
            }}
          >
            Social
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            {/* Twitter */}
            <a
              href="https://twitter.com/awake_in_"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#1da1f2',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '18px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/awake_in_"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#e4405f',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
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
