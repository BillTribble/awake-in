import React from 'react';
import { Link } from 'react-router-dom';
import { Episode } from '../data/types';
import { useAudioPlayer } from '../context/AudioPlayerContext';

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const { currentEpisode, isPlaying, playEpisode } = useAudioPlayer();
  const isThisEpisodePlaying = currentEpisode?.id === episode.id && isPlaying;

  const detailPath =
    episode.category === 'blog'
      ? `/blog/${episode.slug}`
      : `/episodes/${episode.slug}`;

  return (
    <article
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        {/* Artwork */}
        {episode.featuredImage && (
          <Link
            to={detailPath}
            style={{
              display: 'block',
              marginBottom: '16px',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              backgroundColor: 'var(--md-sys-color-surface-container)',
            }}
          >
            <img
              src={episode.featuredImage}
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.2s ease',
              }}
            />
          </Link>
        )}

        {/* Badges: Episode number, duration, date */}
        <div className="badge-group" style={{ marginBottom: '12px' }}>
          {episode.episodeNumber !== null && (
            <span className="badge badge-primary">Episode {episode.episodeNumber}</span>
          )}
          {episode.duration && (
            <span className="badge">
              <span className="material-symbols-rounded" style={{ fontSize: '14px' }}>
                schedule
              </span>
              <span>{episode.duration}</span>
            </span>
          )}
          <span className="badge" style={{ backgroundColor: 'transparent', color: 'var(--md-sys-color-on-surface-variant)' }}>
            {episode.formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ marginBottom: '8px' }}>
          <Link
            to={detailPath}
            style={{
              color: 'var(--md-sys-color-on-surface)',
              textDecoration: 'none',
            }}
          >
            {episode.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--md-sys-color-on-surface-variant)',
            lineHeight: 1.5,
            marginBottom: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {episode.excerptText}
        </p>
      </div>

      {/* Card Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid var(--md-sys-color-surface-container-highest)',
        }}
      >
        {episode.audioUrl || episode.remoteAudioUrl ? (
          <button
            type="button"
            className="btn btn-tonal"
            onClick={() => playEpisode(episode)}
            style={{ fontSize: '13px', padding: '6px 16px' }}
            aria-label={isThisEpisodePlaying ? `Pause ${episode.title}` : `Listen now to ${episode.title}`}
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: '18px' }}>
              {isThisEpisodePlaying ? 'pause' : 'play_arrow'}
            </span>
            <span>{isThisEpisodePlaying ? 'Pause' : 'Listen now'}</span>
          </button>
        ) : (
          <div />
        )}

        <Link
          to={detailPath}
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--md-sys-color-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Notes & transcript</span>
          <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
};
