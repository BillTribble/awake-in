import React from 'react';
import { Link } from 'react-router-dom';
import { Episode } from '../data/types';

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <article
      className="gb-post-grid-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
      }}
    >
      {/* Artwork */}
      {episode.featuredImage && (
        <div className="gb-block-post-grid-image" style={{ marginBottom: '16px' }}>
          <Link
            to={episode.originalPath}
            rel="bookmark"
            aria-hidden="true"
            tabIndex={-1}
            style={{ display: 'block', borderRadius: '12px', overflow: 'hidden' }}
          >
            <img
              src={episode.featuredImage}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '600 / 400',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Link>
        </div>
      )}

      {/* Header & Title */}
      <header className="gb-block-post-grid-header" style={{ marginBottom: '8px' }}>
        <h3
          className="gb-block-post-grid-title"
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '8px',
          }}
        >
          <Link
            to={episode.originalPath}
            rel="bookmark"
            style={{ color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))' }}
          >
            {episode.title}
          </Link>
        </h3>

        {/* Date only - NO invented duration or episode number badges */}
        <div className="gb-block-post-grid-byline" style={{ marginBottom: '12px' }}>
          <time
            dateTime={episode.date}
            className="gb-block-post-grid-date"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--md-sys-color-on-surface-variant)',
            }}
          >
            {episode.formattedDate}
          </time>
        </div>
      </header>

      {/* Verbatim excerpt */}
      <div
        className="gb-block-post-grid-excerpt"
        style={{
          fontSize: '17px',
          lineHeight: '1.6',
          marginBottom: '14px',
          color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
        }}
        dangerouslySetInnerHTML={{ __html: episode.excerptHtml }}
      />

      {/* Verbatim Read/Listen link */}
      <p style={{ margin: 0 }}>
        <Link
          to={episode.originalPath}
          className="gb-block-post-grid-more-link"
          rel="bookmark"
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontWeight: 700,
            fontSize: '17px',
            color: 'var(--theme-palette-color-1, #624aca)',
            textDecoration: 'none',
          }}
        >
          {episode.category === 'blog' ? 'Continue Reading' : 'Listen Now ▶️ '}
        </Link>
      </p>
    </article>
  );
};
