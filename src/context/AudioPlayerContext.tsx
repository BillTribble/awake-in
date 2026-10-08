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

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onError = () => {
      // Fallback chain: local -> remote GitHub Release -> original awake-in.com
      if (!currentEpisode) return;

      if (audioSourceType === 'local' && currentEpisode.remoteAudioUrl) {
        console.warn(`Local audio failed for ${currentEpisode.title}, falling back to GitHub Release...`);
        setAudioSourceType('remote');
        audio.src = currentEpisode.remoteAudioUrl;
        audio.play().catch(console.error);
      } else if (audioSourceType === 'remote' && currentEpisode.originalAudioUrl) {
        console.warn(`Remote audio failed for ${currentEpisode.title}, falling back to original...`);
        setAudioSourceType('original');
        audio.src = currentEpisode.originalAudioUrl;
        audio.play().catch(console.error);
      } else {
        console.error(`Audio playback error for ${currentEpisode.title}`);
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
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
    };
  }, [currentEpisode, audioSourceType]);

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
      // Prefer local path first
      const src = episode.audioUrl || episode.remoteAudioUrl || '';
      audioRef.current.src = src;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => {
        console.warn('Initial play failed, trying remote:', err);
        if (episode.remoteAudioUrl) {
          setAudioSourceType('remote');
          audioRef.current!.src = episode.remoteAudioUrl;
          audioRef.current!.play().catch(console.error);
        }
      });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
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
