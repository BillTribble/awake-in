import React, { useState } from 'react';
import { podcastEpisodes } from '../data/episodes';
import { withBase } from '../utils/basePath';

export const FeedInfoPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const feeds = [
    {
      title: 'Canonical podcast RSS feed',
      path: '/podcasts/awake-in/feed/index.xml',
      fullUrl: 'https://awake-in.com/podcasts/awake-in/feed/',
      description: 'Standard RSS 2.0 podcast feed with all 11 audio enclosures and iTunes tags.',
    },
    {
      title: 'Site updates & articles feed',
      path: '/feed.xml',
      fullUrl: 'https://awake-in.com/feed.xml',
      description: 'Main WordPress site RSS feed preserving episode notes and posts.',
    },
    {
      title: 'Alternative podcast feed',
      path: '/podcast.xml',
      fullUrl: 'https://awake-in.com/podcast.xml',
      description: 'Compatibility mirror for legacy podcast subscription software.',
    },
  ];

  const handleCopy = async (url: string, index: number) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2500);
    } catch (err) {
      console.error('Failed to copy feed URL', err);
    }
  };

  return (
    <div className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '16px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>📡 Podcast & RSS feeds</h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '15px' }}>
          Awake In preserves complete static RSS 2.0 XML feeds with full enclosures for offline podcast apps.
        </p>
      </div>

      {/* Feed Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
        {feeds.map((feed, idx) => (
          <div
            key={feed.path}
            className="card"
            style={{
              padding: '24px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <h3 style={{ fontSize: '1.2rem' }}>{feed.title}</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={withBase(feed.path)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tonal"
                  style={{ fontSize: '12.5px', padding: '5px 12px' }}
                >
                  <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                    open_in_new
                  </span>
                  <span>View XML</span>
                </a>
                <button
                  type="button"
                  className="btn btn-tonal"
                  onClick={() => handleCopy(window.location.origin + withBase(feed.path), idx)}
                  style={{ fontSize: '12.5px', padding: '5px 12px' }}
                >
                  <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                    {copiedIndex === idx ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px', marginBottom: '12px' }}>
              {feed.description}
            </p>

            <code
              style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                backgroundColor: 'var(--md-sys-color-surface)',
                padding: '6px 12px',
                borderRadius: '8px',
                color: 'var(--md-sys-color-primary)',
                display: 'block',
                wordBreak: 'break-all',
              }}
            >
              {withBase(feed.path)}
            </code>
          </div>
        ))}
      </div>

      {/* Enclosures Table */}
      <div>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Preserved audio enclosures (11 episodes)</h2>
        <div
          style={{
            backgroundColor: 'var(--md-sys-color-surface-container-low)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--md-sys-color-surface-container-highest)' }}>
                  <th style={{ padding: '12px 16px' }}>Episode</th>
                  <th style={{ padding: '12px 16px' }}>Title</th>
                  <th style={{ padding: '12px 16px' }}>Duration</th>
                  <th style={{ padding: '12px 16px' }}>Enclosure file</th>
                </tr>
              </thead>
              <tbody>
                {podcastEpisodes.map((ep) => (
                  <tr
                    key={ep.id}
                    style={{
                      borderBottom: '1px solid var(--md-sys-color-surface-container-highest)',
                    }}
                  >
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{ep.episodeNumber}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--md-sys-color-on-surface)' }}>{ep.title}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--md-sys-color-on-surface-variant)' }}>
                      {ep.duration || '—'}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <a
                        href={ep.audioUrl ? withBase(ep.audioUrl) : '#'}
                        style={{ fontFamily: 'monospace', fontSize: '12px' }}
                      >
                        {ep.audioUrl?.split('/').pop()}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
