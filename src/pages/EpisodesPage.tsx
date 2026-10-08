import React from 'react';
import { podcastEpisodes } from '../data/episodes';
import { EpisodeCard } from '../components/EpisodeCard';

export const EpisodesPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '80px', paddingTop: '32px' }}>
      {/* Page Header: Exact verbatim title, NO invented subtitle */}
      <header className="entry-header" style={{ marginBottom: '40px' }}>
        <h1
          className="entry-title"
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: 0,
            color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
          }}
        >
          🎧 All episodes
        </h1>
      </header>

      {/* 2-Column Grid matching Blocksy / awake-in.com columns-2 */}
      <section className="gb-block-post-grid">
        <div
          className="gb-post-grid-items is-grid columns-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
            columnGap: '40px',
            rowGap: '20px',
          }}
        >
          {podcastEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>
    </div>
  );
};
