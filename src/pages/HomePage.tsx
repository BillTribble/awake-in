import React from 'react';
import { Link } from 'react-router-dom';
import { siteMeta } from '../data/siteMeta';
import { podcastEpisodes } from '../data/episodes';
import { EpisodeCard } from '../components/EpisodeCard';

interface HomePageProps {
  onOpenSubscribe: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSubscribe }) => {
  // 4 Featured episodes from siteMeta
  const featuredEpisodes = siteMeta.featuredEpisodeIds
    .map((id) => podcastEpisodes.find((ep) => ep.id === id))
    .filter((ep): ep is NonNullable<typeof ep> => ep !== undefined);

  // Latest 3 episodes
  const latestEpisodes = podcastEpisodes.slice(0, 3);

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero banner">
        <div
          className="hero-cover"
          style={{
            backgroundImage: `url(${siteMeta.hero.desktopBackgroundGif})`,
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">{siteMeta.hero.title}</h1>
            <p className="hero-tagline">{siteMeta.hero.tagline}</p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={onOpenSubscribe}
                className="hero-btn-cta"
                aria-label="Listen or subscribe"
              >
                {siteMeta.hero.subscribeCtaText}
              </button>

              <div className="hero-quick-badges">
                {siteMeta.hero.quickSubscribeIcons.map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-badge-item"
                    title={item.platform}
                    aria-label={item.platform}
                  >
                    <img src={item.icon} alt={item.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes Section */}
      <section style={{ marginBottom: '56px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>Featured episodes 🌱</h2>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px' }}>
              Hand-picked conversations on meditation, psychology, and personal transformation
            </p>
          </div>
          <Link to="/episodes" className="btn btn-tonal">
            <span>All 11 episodes</span>
            <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="card-grid">
          {featuredEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      {/* Latest Episodes Preview */}
      <section style={{ marginBottom: '56px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '1.5rem' }}>Recent recordings</h2>
          <Link to="/episodes" style={{ fontSize: '14px', fontWeight: 600 }}>
            Browse archive →
          </Link>
        </div>

        <div className="card-grid">
          {latestEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      {/* Hosts Section */}
      <section
        style={{
          backgroundColor: 'var(--md-sys-color-surface-container-low)',
          borderRadius: '24px',
          padding: '40px 32px',
          marginBottom: '40px',
        }}
        aria-label="Hosts section"
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>🌈 Hosts</h2>
          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px' }}>
            Meet the voices exploring contemplation in the modern world
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {siteMeta.hosts.map((host) => (
            <div
              key={host.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: 'var(--md-sys-color-surface)',
              }}
            >
              <img
                src={host.avatar}
                alt={host.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '16px',
                  backgroundColor: 'var(--md-sys-color-surface-container)',
                }}
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{host.name}</h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                {host.bio}
              </p>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <a
                  href={host.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tonal"
                  style={{ fontSize: '13px', padding: '6px 16px' }}
                >
                  <span>Instagram</span>
                  <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                    open_in_new
                  </span>
                </a>
                {host.mastodon && (
                  <a
                    href={host.mastodon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-tonal"
                    style={{ fontSize: '13px', padding: '6px 16px' }}
                  >
                    <span>Mastodon</span>
                    <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                      open_in_new
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
