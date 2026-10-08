import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withBase } from '../utils/basePath';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenSubscribe?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header className="site-header" style={{ padding: '16px 0' }}>
      <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand: Verbatim original wordmark (inverted in dark mode) */}
        <Link to="/" className="brand" aria-label="Awake In Home" style={{ display: 'inline-block' }}>
          <img
            src={withBase('/wp-content/uploads/2020/03/awake-in-logo.png')}
            alt="Awake In"
            className="brand-wordmark"
            style={{
              maxHeight: '63px',
              width: 'auto',
              display: 'block',
              ...(theme === 'dark' ? { filter: 'invert(1)', mixBlendMode: 'screen' } : {}),
            }}
          />
        </Link>

        {/* Right side navigation menu (#menu-really-main): ONLY the 3 verbatim links from awake-in.com */}
        <nav
          id="menu-really-main"
          style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
          aria-label="Primary navigation"
        >
          <NavLink
            to="/%f0%9f%8e%a7-all-episodes"
            className={({ isActive }) => `ct-menu-link ${isActive ? 'active' : ''}`}
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
              textDecoration: 'none',
            }}
          >
            🎧 All episodes
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `ct-menu-link ${isActive ? 'active' : ''}`}
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
              textDecoration: 'none',
            }}
          >
            ✍️ Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `ct-menu-link ${isActive ? 'active' : ''}`}
            style={{
              fontFamily: "'canada-type-gibson', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
              textDecoration: 'none',
            }}
          >
            💌 Contact
          </NavLink>

          {/* Search Icon Button */}
          <Link
            to="/%f0%9f%8e%a7-all-episodes"
            aria-label="Search"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
              textDecoration: 'none',
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '24px' }}>
              search
            </span>
          </Link>

          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
              width: '36px',
              height: '36px',
              padding: 0,
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))',
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
