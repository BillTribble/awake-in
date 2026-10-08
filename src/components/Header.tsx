import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteMeta } from '../data/siteMeta';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenSubscribe: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, onOpenSubscribe }) => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <Link to="/" className="brand" aria-label="Awake In Home">
          <img
            src="/wp-content/uploads/2023/02/cropped-awake-in-logo-lettermark.png"
            alt="Awake In logo"
            className="brand-logo"
            width={36}
            height={36}
          />
          <span className="brand-text">{siteMeta.title}</span>
        </Link>

        {/* Navigation Tabs (AI Studio Pill Style) */}
        <nav className="nav-tabs" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/episodes"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            All episodes
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/rss"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Podcast RSS
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Subscribe CTA Button */}
          <button
            type="button"
            onClick={onOpenSubscribe}
            className="btn btn-tonal"
            aria-label="Listen or subscribe to podcast"
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: '18px' }}>
              podcasts
            </span>
            <span>Listen or subscribe</span>
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="material-symbols-rounded">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
