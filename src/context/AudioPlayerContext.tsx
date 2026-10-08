import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Episode } from '../data/types';

interface AudioPlayerContextType {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  audioSourceType: 'local' | 'remote' | 'original';
  playEpisode: (episode: Episode) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  skip: (seconds: number) => void;
  setSpeed: (speed: number) => void;
  closePlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioSourceType, setAudioSourceType] = useState<'local' | 'remote' | 'original'>('local');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentEpisodeRef = useRef<Episode | null>(null);
  const audioSourceTypeRef = useRef<'local' | 'remote' | 'original'>('local');

  currentEpisodeRef.current = currentEpisode;
  audioSourceTypeRef.current = audioSourceType;

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onError = () => {
      const ep = currentEpisodeRef.current;
      const type = audioSourceTypeRef.current;
      if (!ep) return;

      if (type === 'local' && ep.remoteAudioUrl) {
        console.warn(`Local audio unavailable for ${ep.title}, switching to remote mirror...`);
        setAudioSourceType('remote');
        audio.src = ep.remoteAudioUrl;
        audio.play().catch((err) => {
          if (err.name !== 'AbortError') console.warn('Remote play error:', err);
        });
      } else if (type === 'remote' && ep.originalAudioUrl) {
        console.warn(`Remote audio mirror unavailable, trying original source...`);
        setAudioSourceType('original');
        audio.src = ep.originalAudioUrl;
        audio.play().catch((err) => {
          if (err.name !== 'AbortError') console.warn('Original play error:', err);
        });
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);

    return () => {
      audio.pause();
      audio.src = '';
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const playEpisode = (episode: Episode) => {
    if (!episode.audioUrl && !episode.remoteAudioUrl) return;

    if (currentEpisode?.id === episode.id) {
      togglePlay();
      return;
    }

    setCurrentEpisode(episode);
    setAudioSourceType('local');
    setCurrentTime(0);

    if (audioRef.current) {
      const src = episode.audioUrl || episode.remoteAudioUrl || '';
      audioRef.current.src = src;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play().catch((err) => {
        if (err.name === 'AbortError') return;
        if (episode.remoteAudioUrl) {
          setAudioSourceType('remote');
          audioRef.current!.src = episode.remoteAudioUrl;
          audioRef.current!.play().catch((e) => {
            if (e.name !== 'AbortError') console.warn(e);
          });
        }
      });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        if (err.name !== 'AbortError') console.warn(err);
      });
    }
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + seconds));
    seek(newTime);
  };

  const setSpeed = (speed: number) => {
    setPlaybackRate(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentEpisode(null);
    setIsPlaying(false);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        audioSourceType,
        playEpisode,
        togglePlay,
        seek,
        skip,
        setSpeed,
        closePlayer,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
