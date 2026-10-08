import React, { useState, useMemo } from 'react';
import { podcastEpisodes } from '../data/episodes';
import { siteMeta } from '../data/siteMeta';
import { EpisodeCard } from '../components/EpisodeCard';

export const EpisodesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'interviews' | 'transcript'>('all');

  const filteredEpisodes = useMemo(() => {
    return podcastEpisodes.filter((ep) => {
      // Search matching
      const matchesSearch =
        searchQuery.trim() === '' ||
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.excerptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.contentHtml.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Filter tabs
      if (activeFilter === 'featured') {
        return siteMeta.featuredEpisodeIds.includes(ep.id);
      }
      if (activeFilter === 'interviews') {
        return (
          ep.title.toLowerCase().includes('interview') ||
          ep.title.toLowerCase().includes('with') ||
          ep.title.toLowerCase().includes('steve james') ||
          ep.title.toLowerCase().includes('daniel ingram') ||
          ep.title.toLowerCase().includes('lorin roche') ||
          ep.title.toLowerCase().includes('james kite') ||
          ep.title.toLowerCase().includes('liam chai')
        );
      }
      if (activeFilter === 'transcript') {
        return ep.contentHtml.toLowerCase().includes('transcript');
      }

      return true;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="container" style={{ paddingBottom: '80px', paddingTop: '16px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>🎧 All episodes</h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '15px' }}>
          Explore all 11 recorded conversations on mindfulness, meditation retreats, and awareness.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {/* Search Input with Mandatory Inline Clear Button */}
        <div style={{ maxWidth: '480px' }}>
          <div className="input-wrapper">
            <span
              className="material-symbols-rounded"
              style={{
                position: 'absolute',
                left: '12px',
                color: 'var(--md-sys-color-on-surface-variant)',
                fontSize: '20px',
                pointerEvents: 'none',
              }}
            >
              search
            </span>
            <input
              type="text"
              className="input-outlined"
              style={{ paddingLeft: '40px' }}
              placeholder="Search episodes, topics, or transcripts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search episodes"
            />
            {searchQuery && (
              <button
                type="button"
                className="input-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
                title="Clear"
              >
                <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
                  close
                </span>
              </button>
            )}
          </div>
        </div>

        {/* AI Studio Pill-Style Tabs */}
        <div className="m3-pill-tabs" role="tablist" aria-label="Filter episodes">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`m3-pill-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <span>All episodes ({podcastEpisodes.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'featured'}
            className={`m3-pill-tab ${activeFilter === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveFilter('featured')}
          >
            <span>Featured ({siteMeta.featuredEpisodeIds.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'interviews'}
            className={`m3-pill-tab ${activeFilter === 'interviews' ? 'active' : ''}`}
            onClick={() => setActiveFilter('interviews')}
          >
            <span>Interviews</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'transcript'}
            className={`m3-pill-tab ${activeFilter === 'transcript' ? 'active' : ''}`}
            onClick={() => setActiveFilter('transcript')}
          >
            <span>With transcript</span>
          </button>
        </div>
      </div>

      {/* Episode Grid or Empty State */}
      {filteredEpisodes.length > 0 ? (
        <div className="card-grid">
          {filteredEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 24px',
            backgroundColor: 'var(--md-sys-color-surface-container-low)',
            borderRadius: '24px',
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{ fontSize: '48px', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '16px' }}
          >
            search_off
          </span>
          <h3 style={{ marginBottom: '8px' }}>No episodes found</h3>
          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px', marginBottom: '16px' }}>
            No episodes matched your search query &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            className="btn btn-tonal"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
