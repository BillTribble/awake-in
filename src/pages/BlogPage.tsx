import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/episodes';

export const BlogPage: React.FC = () => {
  return (
    <div className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '16px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>✍️ Blog</h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '15px' }}>
          Articles, musings, and updates from the Awake In team.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="card"
            style={{
              padding: '32px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
            }}
          >
            <div className="badge-group" style={{ marginBottom: '12px' }}>
              <span className="badge badge-primary">Blog post</span>
              <span className="badge" style={{ backgroundColor: 'transparent', color: 'var(--md-sys-color-on-surface-variant)' }}>
                {post.formattedDate}
              </span>
            </div>

            <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
              <Link
                to={`/blog/${post.slug}`}
                style={{
                  color: 'var(--md-sys-color-on-surface)',
                  textDecoration: 'none',
                }}
              >
                {post.title}
              </Link>
            </h2>

            <div
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--md-sys-color-on-surface)',
                marginBottom: '24px',
              }}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--md-sys-color-surface-container-highest)',
                paddingTop: '16px',
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--md-sys-color-on-surface-variant)' }}>
                By Bill & Jasmine
              </span>
              <Link
                to={`/blog/${post.slug}`}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Read full post</span>
                <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
