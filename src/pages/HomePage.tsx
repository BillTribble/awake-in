import React from 'react';
import { Link } from 'react-router-dom';
import { siteMeta } from '../data/siteMeta';
import { podcastEpisodes } from '../data/episodes';
import { withBase } from '../utils/basePath';

interface HomePageProps {
  onOpenSubscribe: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSubscribe }) => {
  // 4 Featured episodes from siteMeta
  const featuredEpisodes = siteMeta.featuredEpisodeIds
    .map((id) => podcastEpisodes.find((ep) => ep.id === id))
    .filter((ep): ep is NonNullable<typeof ep> => ep !== undefined);

  return (
    <div className="homepage-wrapper">
      {/* 1. Hero Section */}
      <div className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <section
          className="hero-section"
          aria-label="Hero banner"
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#1b0f55',
            backgroundImage: `url(${siteMeta.hero.desktopBackgroundGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            minHeight: '480px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'none',
          }}
        >
          <div
            className="hero-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15, 10, 45, 0.4) 0%, rgba(15, 10, 45, 0.85) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top row: 2 columns */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <h1
                style={{
                  color: '#ffffff',
                  fontFamily: "'canada-type-gibson', sans-serif",
                  fontSize: '2.75rem',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {siteMeta.hero.title}
              </h1>
            </div>
            <div style={{ maxWidth: '400px' }}>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '20px',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                {siteMeta.hero.tagline}
              </p>
            </div>
          </div>

          {/* Bottom row: CTA button & icons */}
          <div style={{ position: 'relative', zIndex: 2, marginTop: '120px' }}>
            <button
              type="button"
              onClick={onOpenSubscribe}
              style={{
                backgroundColor: '#ffe724',
                color: '#412eb4',
                boxShadow: '0 4px 0 0 #e8680a',
                borderRadius: '40px',
                padding: '10px 32px',
                fontSize: '22px',
                fontWeight: 600,
                fontFamily: "'canada-type-gibson', sans-serif",
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'transform 0.15s ease',
              }}
            >
              {siteMeta.hero.subscribeCtaText}
            </button>

            {/* Quick subscribe icons below button with 20px gap */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '20px' }}>
              {siteMeta.hero.quickSubscribeIcons.map((item) => (
                <button
                  key={item.platform}
                  type="button"
                  onClick={onOpenSubscribe}
                  title={item.platform}
                  aria-label={item.platform}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '20px',
                    backgroundColor: '#5241c888',
                    padding: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: 'background-color 0.15s ease',
                  }}
                >
                  <img src={item.icon} alt={item.platform} style={{ width: '28px', height: '28px', display: 'block' }} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 2. Featured Episodes Section (max-width: 780px; margin: 0 auto;) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px 60px' }}>
        <h2
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '36px',
            color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
          }}
        >
          Featured episodes 🌱
        </h2>

        {/* 4 featured episodes stacked vertically */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {featuredEpisodes.map((episode) => (
            <article key={episode.id} className="featured-episode-item" style={{ borderBottom: '1px solid var(--md-sys-color-surface-container-highest)', paddingBottom: '40px' }}>
              {episode.featuredImage && (
                <Link to={episode.originalPath} style={{ display: 'block', marginBottom: '20px', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src={episode.featuredImage}
                    alt={episode.title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Link>
              )}

              <h3 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '10px' }}>
                <Link to={episode.originalPath} style={{ color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))' }}>
                  {episode.title}
                </Link>
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <time
                  dateTime={episode.date}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--md-sys-color-on-surface-variant)',
                  }}
                >
                  {episode.formattedDate}
                </time>
              </div>

              {/* Verbatim excerpt */}
              <div
                className="entry-excerpt"
                style={{ fontSize: '18px', lineHeight: '1.65', marginBottom: '16px' }}
                dangerouslySetInnerHTML={{ __html: episode.featuredExcerptHtml || episode.excerptHtml }}
              />

              <p style={{ margin: 0 }}>
                <Link
                  to={episode.originalPath}
                  className="gb-block-post-grid-more-link"
                  style={{
                    fontFamily: "'canada-type-gibson', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--theme-palette-color-1, #624aca)',
                    textDecoration: 'none',
                  }}
                >
                  Listen Now ▶️{' '}
                </Link>
              </p>
            </article>
          ))}
        </div>

        {/* Centered purple pill button: All episodes */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Link
            to="/%f0%9f%8e%a7-all-episodes"
            className="wp-block-button__link"
            style={{
              backgroundColor: '#624aca',
              color: '#ffffff',
              padding: '12px 36px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 600,
              fontFamily: "'canada-type-gibson', sans-serif",
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            All episodes
          </Link>
        </div>
      </section>

      {/* 3. Hosts Section (🌈 Hosts) */}
      <section
        style={{
          backgroundColor: '#230c80',
          color: '#ffffff',
          padding: '60px 20px',
        }}
      >
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              color: '#ffaedf',
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            🌈 Hosts
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
            }}
          >
            {/* Jasmine Che */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={withBase('/wp-content/uploads/2020/05/jasmine.png')}
                alt="Jasmine Che"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  display: 'block',
                }}
              />
              <h4
                style={{
                  fontFamily: "'canada-type-gibson', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Jasmine Che
              </h4>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '24px',
                  maxWidth: '440px',
                }}
              >
                Jasmine is the youngest Search Inside Yourself™ mindfulness teacher, a heart-based multi-business venturer, plant mum to ~150 babies and is working back to 3 hours of meditation a day. When she ever finds any spare time, she practices Dharma yoga and acrobatics.
              </p>
              <a
                href="https://www.instagram.com/thelifeofjasmineche/"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  border: '2px solid #ffffff',
                  borderRadius: '50px',
                  color: '#ffffff',
                  padding: '8px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: "'canada-type-gibson', sans-serif",
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Jasmine’s Instagram
              </a>
            </div>

            {/* Bill Tribble */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={withBase('/wp-content/uploads/2020/03/bill-1.png')}
                alt="Bill Tribble"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  display: 'block',
                }}
              />
              <h4
                style={{
                  fontFamily: "'canada-type-gibson', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Bill Tribble
              </h4>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '24px',
                  maxWidth: '440px',
                }}
              >
                Bill is a designer, musician, and technologist. He got started in mindfulness via silent retreats in the Goenka tradition. While he’s put in thousands of hours of meditation, he’s probably spent way more time playing computer games and wishes he hadn’t. Find him on <a href="https://mastodon.design/@bill_tribble" target="_blank" rel="noreferrer noopener" className="ek-link" style={{ color: '#ffaedf', textDecoration: 'underline' }}>Mastodon</a> or check him out on:
              </p>
              <a
                href="https://www.instagram.com/bill_tribble/"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  border: '2px solid #ffffff',
                  borderRadius: '50px',
                  color: '#ffffff',
                  padding: '8px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: "'canada-type-gibson', sans-serif",
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Bill’s Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
