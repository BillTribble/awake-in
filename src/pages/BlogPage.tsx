import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/episodes';

export const BlogPage: React.FC = () => {
  return (
    <div className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '32px' }}>
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
          ✍️ Blog
        </h1>
      </header>

      <section className="gb-block-post-grid">
        <div className="gb-post-grid-items is-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="gb-post-grid-item" style={{ marginBottom: '40px' }}>
              <div className="gb-block-post-grid-text">
                <header className="gb-block-post-grid-header" style={{ marginBottom: '12px' }}>
                  <h3
                    className="gb-block-post-grid-title"
                    style={{
                      fontFamily: "'canada-type-gibson', sans-serif",
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    <Link
                      to={post.originalPath}
                      rel="bookmark"
                      style={{ color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))' }}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <div
                    className="gb-block-post-grid-byline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--md-sys-color-on-surface-variant)',
                    }}
                  >
                    <div className="gb-block-post-grid-author">
                      <span>bill</span>
                    </div>
                    <span>•</span>
                    <time dateTime={post.date} className="gb-block-post-grid-date">
                      {post.formattedDate}
                    </time>
                  </div>
                </header>

                <div
                  className="gb-block-post-grid-excerpt"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.65',
                    marginBottom: '16px',
                    color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
                  }}
                  dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                />

                <p style={{ margin: 0 }}>
                  <Link
                    to={post.originalPath}
                    className="gb-block-post-grid-more-link"
                    style={{
                      fontFamily: "'canada-type-gibson', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'var(--theme-palette-color-1, #624aca)',
                      textDecoration: 'none',
                    }}
                  >
                    Continue Reading
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
