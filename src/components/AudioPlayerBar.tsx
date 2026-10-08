import React from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Episode } from '../data/types';

export const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const h = Math.floor(m / 60);
  const remM = m % 60;
  if (h > 0) {
    return `${h}:${remM < 10 ? '0' : ''}${remM}:${s < 10 ? '0' : ''}${s}`;
  }
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
};

export const AudioPlayerBar: React.FC = () => {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    audioSourceType,
    togglePlay,
    seek,
    skip,
    setSpeed,
    closePlayer,
  } = useAudioPlayer();

  if (!currentEpisode) return null;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(parseFloat(e.target.value));
  };

  const speeds = [1, 1.25, 1.5, 2];

  const downloadUrl =
    currentEpisode.audioUrl ||
    currentEpisode.remoteAudioUrl ||
    currentEpisode.originalAudioUrl ||
    '#';

  return (
    <div className="audio-player-bar" role="region" aria-label="Audio player">
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '0 8px',
        }}
      >
        {/* Progress Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', minWidth: '40px', color: 'var(--md-sys-color-on-surface-variant)' }}>
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSliderChange}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              cursor: 'pointer',
              accentColor: 'var(--md-sys-color-primary)',
            }}
            aria-label="Seek track position"
          />
          <span style={{ fontSize: '12px', minWidth: '40px', textAlign: 'right', color: 'var(--md-sys-color-on-surface-variant)' }}>
            {formatTime(duration)}
          </span>
        </div>

        {/* Player Controls & Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Episode Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px', maxWidth: '340px' }}>
            {currentEpisode.featuredImage && (
              <img
                src={currentEpisode.featuredImage}
                alt=""
                style={{ width: '42px', height: '42px', borderRadius: '8px', objectFit: 'cover' }}
              />
            )}
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {currentEpisode.title}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--md-sys-color-on-surface-variant)' }}>
                {audioSourceType === 'local'
                  ? 'Local audio'
                  : audioSourceType === 'remote'
                  ? 'GitHub release mirror'
                  : 'Original stream'}
              </div>
            </div>
          </div>

          {/* Transport Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="btn-icon"
              onClick={() => skip(-15)}
              aria-label="Skip back 15 seconds"
              title="Skip back 15s"
            >
              <span className="material-symbols-rounded">replay_15</span>
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '44px', height: '44px', padding: 0, borderRadius: '50%' }}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              <span className="material-symbols-rounded filled" style={{ fontSize: '26px' }}>
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={() => skip(15)}
              aria-label="Skip forward 15 seconds"
              title="Skip forward 15s"
            >
              <span className="material-symbols-rounded">forward_15</span>
            </button>
          </div>

          {/* Speed, Download, and Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Speed Selector */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {speeds.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpeed(s)}
                  style={{
                    padding: '3px 7px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor:
                      playbackRate === s
                        ? 'var(--md-sys-color-primary-container)'
                        : 'var(--md-sys-color-surface-container)',
                    color:
                      playbackRate === s
                        ? 'var(--md-sys-color-on-primary-container)'
                        : 'var(--md-sys-color-on-surface-variant)',
                  }}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Download Link */}
            <a
              href={downloadUrl}
              download
              className="btn-icon"
              aria-label="Download episode audio"
              title="Download MP3"
              style={{ textDecoration: 'none' }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>
                download
              </span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              className="btn-icon"
              onClick={closePlayer}
              aria-label="Close audio player"
              title="Close player"
            >
              <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>
                close
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InlinePlayer: React.FC<{ episode: Episode }> = ({ episode }) => {
  const { currentEpisode, isPlaying, playEpisode } = useAudioPlayer();
  const isThisEpisodePlaying = currentEpisode?.id === episode.id && isPlaying;

  if (!episode.audioUrl && !episode.remoteAudioUrl) return null;

  return (
    <div
      style={{
        backgroundColor: 'var(--md-sys-color-surface-container)',
        borderRadius: '20px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        margin: '24px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%' }}
          onClick={() => playEpisode(episode)}
          aria-label={isThisEpisodePlaying ? 'Pause audio' : 'Play audio'}
        >
          <span className="material-symbols-rounded filled" style={{ fontSize: '28px' }}>
            {isThisEpisodePlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px' }}>
            {isThisEpisodePlaying ? 'Now playing' : 'Listen to episode'}
          </div>
          <div style={{ fontSize: '13px', color: 'var(--md-sys-color-on-surface-variant)' }}>
            Duration: {episode.duration || 'Full length'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a
          href={episode.audioUrl || episode.remoteAudioUrl || '#'}
          download
          className="btn btn-tonal"
          style={{ fontSize: '13px', padding: '6px 14px' }}
        >
          <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>
            download
          </span>
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};
