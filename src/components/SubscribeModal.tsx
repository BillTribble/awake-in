import React, { useEffect } from 'react';
import { withBase } from '../utils/basePath';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="paoc-popup-modal"
        id="paoc-popup-3685-3"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--md-sys-color-surface)',
          color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
          borderRadius: '16px',
          maxWidth: '480px',
          width: '100%',
          padding: '36px',
          position: 'relative',
          boxShadow: 'none',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: 'var(--md-sys-color-on-surface-variant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="material-symbols-rounded">close</span>
        </button>

        <p style={{ fontFamily: "'canada-type-gibson', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>
          Listen or subscribe wherever good podcasts are found.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', fontWeight: 600 }}>
          <p style={{ margin: 0 }}>
            <a
              href="https://podcasts.apple.com/gb/podcast/awake-in/id1505822560"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))', textDecoration: 'none' }}
            >
              <img src={withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.png')} width="32" height="32" alt="" /> Apple Podcasts
            </a>
          </p>

          <p style={{ margin: 0 }}>
            <a
              href="https://podcasts.google.com/?feed=aHR0cDovL3d3dy5hd2FrZS1pbi5jb20vZmVlZC8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))', textDecoration: 'none' }}
            >
              <img src={withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png')} width="32" height="32" alt="" /> Google Podcasts
            </a>
          </p>

          <p style={{ margin: 0 }}>
            <a
              href="https://www.stitcher.com/podcast/awake-in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))', textDecoration: 'none' }}
            >
              <img src={withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Stitcher.png')} width="32" height="32" alt="" /> Stitcher
            </a>
          </p>

          <p style={{ margin: 0 }}>
            <a
              href="https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))', textDecoration: 'none' }}
            >
              <img src={withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.png')} width="32" height="32" alt="" /> Spotify
            </a>
          </p>

          <p style={{ margin: 0 }}>
            <a
              href={withBase('/podcasts/awake-in/feed/index.xml')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))', textDecoration: 'none' }}
            >
              <img src={withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/RSS.png')} width="32" height="32" alt="" /> RSS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
