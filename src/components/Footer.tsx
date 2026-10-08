import React from 'react';
import { Link } from 'react-router-dom';
import { siteMeta } from '../data/siteMeta';

import { withBase } from '../utils/basePath';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img
                src={withBase('/wp-content/uploads/2023/02/cropped-awake-in-logo-lettermark.png')}
                alt="Awake In logo"
                style={{ width: '32px', height: '32px', borderRadius: '50%' }}
              />
              <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>{siteMeta.title}</span>
            </div>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px', maxWidth: '300px' }}>
              {siteMeta.tagline}
            </p>
          </div>

          {/* Contact & Touch */}
          <div>
            <h4 style={{ marginBottom: '12px', fontSize: '1rem' }}>{siteMeta.footer.heading}</h4>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px', marginBottom: '12px' }}>
              {siteMeta.footer.text}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px' }}>
              <Link to="/contact" style={{ fontWeight: 500 }}>
                Contact page
              </Link>
              <a href={`mailto:${siteMeta.contactEmail}`} style={{ fontWeight: 500 }}>
                {siteMeta.contactEmail}
              </a>
            </div>
          </div>

          {/* Socials & Feeds */}
          <div>
            <h4 style={{ marginBottom: '12px', fontSize: '1rem' }}>Listen & follow</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              {siteMeta.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge"
                  style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '13px' }}
                >
                  <span>{s.platform}</span>
                </a>
              ))}
              <a
                href={withBase('/podcasts/awake-in/feed/index.xml')}
                target="_blank"
                rel="noopener noreferrer"
                className="badge"
                style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '13px' }}
              >
                <span>Podcast RSS</span>
              </a>
              <a
                href={withBase('/feed.xml')}
                target="_blank"
                rel="noopener noreferrer"
                className="badge"
                style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '13px' }}
              >
                <span>Site feed</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--md-sys-color-surface-container-highest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--md-sys-color-on-surface-variant)',
          }}
        >
          <div>{siteMeta.footer.copyright}</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/">Home</Link>
            <Link to="/episodes">All episodes</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/rss">Feeds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
