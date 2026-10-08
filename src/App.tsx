import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { SubscribeModal } from './components/SubscribeModal';
import { HomePage } from './pages/HomePage';
import { EpisodesPage } from './pages/EpisodesPage';
import { BlogPage } from './pages/BlogPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { ContactPage } from './pages/ContactPage';
import { FeedInfoPage } from './pages/FeedInfoPage';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('awake-in-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('awake-in-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AudioPlayerProvider>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenSubscribe={() => setIsSubscribeOpen(true)}
          />

          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage onOpenSubscribe={() => setIsSubscribeOpen(true)} />} />
              <Route path="/episodes" element={<EpisodesPage />} />
              <Route path="/episodes/:slug" element={<PostDetailPage onOpenSubscribe={() => setIsSubscribeOpen(true)} />} />
              <Route path="/%f0%9f%8e%a7-all-episodes" element={<EpisodesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<PostDetailPage onOpenSubscribe={() => setIsSubscribeOpen(true)} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/rss" element={<FeedInfoPage />} />
              {/* WordPress historical permalinks: /:year/:month/:day/:slug/ */}
              <Route
                path="/:year/:month/:day/:slug"
                element={<PostDetailPage onOpenSubscribe={() => setIsSubscribeOpen(true)} />}
              />
              <Route
                path="*"
                element={<PostDetailPage onOpenSubscribe={() => setIsSubscribeOpen(true)} />}
              />
            </Routes>
          </main>

          <Footer />

          {/* Persistent Bottom Audio Player */}
          <AudioPlayerBar />

          {/* Modal */}
          <SubscribeModal
            isOpen={isSubscribeOpen}
            onClose={() => setIsSubscribeOpen(false)}
          />
        </div>
      </BrowserRouter>
    </AudioPlayerProvider>
  );
};

export default App;
