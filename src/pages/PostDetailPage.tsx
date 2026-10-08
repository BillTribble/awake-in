import React, { useEffect, useRef, useMemo } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { episodes, podcastEpisodes } from '../data/episodes';
import { InlinePlayer } from '../components/AudioPlayerBar';

interface PostDetailPageProps {
  onOpenSubscribe: () => void;
}

export const PostDetailPage: React.FC<PostDetailPageProps> = ({ onOpenSubscribe }) => {
  const { slug, year, month, day } = useParams<{ slug?: string; year?: string; month?: string; day?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  // Match episode by slug, or by originalPath, or query parameter (?p=id)
  const episode = useMemo(() => {
    // 1. By slug
    if (slug) {
      const match = episodes.find((ep) => ep.slug === slug);
      if (match) return match;
    }

    // 2. By year/month/day/slug permalink
    if (year && month && day && slug) {
      const pathPattern = `/${year}/${month}/${day}/${slug}/`;
      const match = episodes.find((ep) => ep.originalPath === pathPattern);
      if (match) return match;
    }

    // 3. By query param ?p=id
    const searchParams = new URLSearchParams(location.search);
    const pId = searchParams.get('p');
    if (pId) {
      const numId = parseInt(pId, 10);
      const match = episodes.find((ep) => ep.id === numId);
      if (match) return match;
    }

    // 4. By full pathname matching originalPath
    const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    return episodes.find((ep) => ep.originalPath === currentPath);
  }, [slug, year, month, day, location.search, location.pathname]);

  // Intercept subscribe clicks and internal links in rendered HTML
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const isSubscribe =
        target.classList.contains('paoc-popup') ||
        target.classList.contains('paoc-popup-click') ||
        href === 'javascript:void(0);' ||
        target.textContent?.trim().toLowerCase() === 'subscribe';

      if (isSubscribe) {
        e.preventDefault();
        onOpenSubscribe();
        return;
      }

      if (href && href.startsWith('https://awake-in.com/')) {
        e.preventDefault();
        const urlObj = new URL(href);
        navigate(urlObj.pathname);
      }
    };

    el.addEventListener('click', handleLinkClick);
    return () => el.removeEventListener('click', handleLinkClick);
  }, [episode, navigate, onOpenSubscribe]);

  if (!episode) {
    return (
      <div className="container-narrow" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Episode not found</h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '24px' }}>
          We couldn&rsquo;t find the episode or article you were looking for.
        </p>
        <Link to="/%f0%9f%8e%a7-all-episodes" className="wp-block-button__link">
          Back to all episodes
        </Link>
      </div>
    );
  }

  // 3 other episodes for "More Episodes"
  const moreEpisodes = podcastEpisodes.filter((ep) => ep.id !== episode.id).slice(0, 3);

  return (
    <article className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '32px' }}>
      {/* Title & Entry Meta: Uppercase 12px, font-weight: 600 - NO invented badges */}
      <header className="entry-header" style={{ marginBottom: '28px' }}>
        <h1
          className="page-title"
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '14px',
            color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
          }}
        >
          {episode.title}
        </h1>

        <div className="entry-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <time
            dateTime={episode.date}
            style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--md-sys-color-on-surface-variant)',
            }}
          >
            {episode.formattedDate}
          </time>
        </div>
      </header>

      {/* Featured Artwork */}
      {episode.featuredImage && (
        <figure className="ct-featured-image alignwide" style={{ margin: '0 0 36px 0', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src={episode.featuredImage}
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </figure>
      )}

      {/* Inline Audio Player for Podcasts (Preserved custom component per Bill) */}
      {episode.category === 'podcast' && (
        <div style={{ marginBottom: '36px' }}>
          <InlinePlayer episode={episode} />
        </div>
      )}

      {/* Post / Episode Content & Transcript */}
      <div
        ref={contentRef}
        className="entry-content"
        style={{
          fontSize: '20px',
          lineHeight: '1.65',
          color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
        }}
        dangerouslySetInnerHTML={{ __html: episode.contentHtml }}
      />

      {/* More Episodes Section (.ct-related-posts) */}
      {episode.category === 'podcast' && moreEpisodes.length > 0 && (
        <section
          className="ct-related-posts"
          style={{
            marginTop: '64px',
            paddingTop: '24px',
          }}
        >
          <h3
            className="ct-module-title"
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '28px',
              color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
            }}
          >
            More Episodes
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {moreEpisodes.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                {item.featuredImage && (
                  <Link to={item.originalPath} style={{ display: 'block', marginBottom: '12px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', display: 'block' }}
                    />
                  </Link>
                )}
                <h4 style={{ fontFamily: "'canada-type-gibson', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}>
                  <Link to={item.originalPath} style={{ color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))' }}>
                    {item.title}
                  </Link>
                </h4>
                <time
                  dateTime={item.date}
                  style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--md-sys-color-on-surface-variant)' }}
                >
                  {item.formattedDate}
                </time>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
