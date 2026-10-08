import React, { useEffect, useState } from 'react';
import { siteMeta } from '../data/siteMeta';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const rssUrl = 'https://awake-in.com/podcasts/awake-in/feed/';

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

  const handleCopyRss = async () => {
    try {
      await navigator.clipboard.writeText(rssUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy RSS URL', err);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscribe-modal-title"
    >
      <div
        className="modal-surface"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 id="subscribe-modal-title" style={{ fontSize: '1.4rem', marginBottom: '4px' }}>
              {siteMeta.subscribeModal.heading}
            </h2>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px' }}>
              {siteMeta.subscribeModal.description}
            </p>
          </div>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close dialog"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        {/* Platform Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
          }}
        >
          {siteMeta.subscribeLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '16px',
                textDecoration: 'none',
                color: 'var(--md-sys-color-on-surface)',
              }}
            >
              <img
                src={link.quickIcon || link.icon}
                alt={`${link.platform} icon`}
                style={{ width: '28px', height: '28px', objectFit: 'contain' }}
              />
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{link.platform}</span>
              <span
                className="material-symbols-rounded"
                style={{ marginLeft: 'auto', fontSize: '18px', color: 'var(--md-sys-color-outline)' }}
              >
                open_in_new
              </span>
            </a>
          ))}
        </div>

        {/* One-click Copy RSS Feed Strip */}
        <div
          style={{
            backgroundColor: 'var(--md-sys-color-surface-container)',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>
              Podcast RSS feed URL
            </span>
            <button
              type="button"
              onClick={handleCopyRss}
              className="btn btn-tonal"
              style={{ padding: '6px 14px', fontSize: '13px' }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied!' : 'Copy URL'}</span>
            </button>
          </div>
          <code
            style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              backgroundColor: 'var(--md-sys-color-surface)',
              padding: '8px 12px',
              borderRadius: '8px',
              wordBreak: 'break-all',
              color: 'var(--md-sys-color-primary)',
            }}
          >
            {rssUrl}
          </code>
        </div>

        {/* Links to inspect preserved XML feeds */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', justifyContent: 'center' }}>
          <a href="/podcasts/awake-in/feed/index.xml" target="_blank" rel="noopener noreferrer">
            View podcast feed XML
          </a>
          <span style={{ color: 'var(--md-sys-color-outline-variant)' }}>•</span>
          <a href="/feed.xml" target="_blank" rel="noopener noreferrer">
            View site feed XML
          </a>
        </div>
      </div>
    </div>
  );
};
