import React, { useEffect, useRef } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { episodes } from '../data/episodes';
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
  const episode = React.useMemo(() => {
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
        <Link to="/episodes" className="btn btn-primary">
          Back to all episodes
        </Link>
      </div>
    );
  }

  // Previous and Next episodes
  const currentIndex = episodes.findIndex((ep) => ep.id === episode.id);
  const prevEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;

  return (
    <article className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '16px' }}>
      {/* Breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: 'var(--md-sys-color-on-surface-variant)',
          marginBottom: '20px',
        }}
      >
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={episode.category === 'blog' ? '/blog' : '/episodes'}>
          {episode.category === 'blog' ? 'Blog' : 'Episodes'}
        </Link>
        <span>/</span>
        <span style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>
          {episode.category === 'podcast' && episode.episodeNumber !== null
            ? `Episode ${episode.episodeNumber}`
            : episode.title}
        </span>
      </nav>

      {/* Featured Artwork */}
      {episode.featuredImage && (
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '28px',
            backgroundColor: 'var(--md-sys-color-surface-container)',
            maxHeight: '440px',
          }}
        >
          <img
            src={episode.featuredImage}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}

      {/* Episode Header */}
      <div style={{ marginBottom: '24px' }}>
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

        <h1 style={{ fontSize: '2.25rem', marginBottom: '16px', lineHeight: 1.2 }}>
          {episode.title}
        </h1>
      </div>

      {/* Inline Audio Player for Podcasts */}
      {episode.category === 'podcast' && <InlinePlayer episode={episode} />}

      {/* Post / Episode Content & Transcript */}
      <div
        ref={contentRef}
        className="post-content"
        style={{
          fontSize: '15px',
          lineHeight: 1.75,
          color: 'var(--md-sys-color-on-surface)',
          marginTop: '32px',
        }}
        dangerouslySetInnerHTML={{ __html: episode.contentHtml }}
      />

      {/* Next / Previous Episode Navigation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '56px',
          paddingTop: '32px',
          borderTop: '1px solid var(--md-sys-color-surface-container-highest)',
        }}
      >
        {prevEpisode ? (
          <Link
            to={prevEpisode.category === 'blog' ? `/blog/${prevEpisode.slug}` : `/episodes/${prevEpisode.slug}`}
            className="card"
            style={{ textDecoration: 'none', padding: '16px 20px' }}
          >
            <span style={{ fontSize: '12px', color: 'var(--md-sys-color-on-surface-variant)' }}>
              ← Newer {prevEpisode.category === 'blog' ? 'post' : 'episode'}
            </span>
            <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px', color: 'var(--md-sys-color-on-surface)' }}>
              {prevEpisode.title}
            </div>
          </Link>
        ) : <div />}

        {nextEpisode ? (
          <Link
            to={nextEpisode.category === 'blog' ? `/blog/${nextEpisode.slug}` : `/episodes/${nextEpisode.slug}`}
            className="card"
            style={{ textDecoration: 'none', padding: '16px 20px', textAlign: 'right' }}
          >
            <span style={{ fontSize: '12px', color: 'var(--md-sys-color-on-surface-variant)' }}>
              Older {nextEpisode.category === 'blog' ? 'post' : 'episode'} →
            </span>
            <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px', color: 'var(--md-sys-color-on-surface)' }}>
              {nextEpisode.title}
            </div>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
};
