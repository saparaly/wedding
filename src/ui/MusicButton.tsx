import { useState, useRef, useEffect } from 'react';

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('./music.mp3');
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current && audioRef.current.currentTime < 78) {
          audioRef.current.currentTime = 78;
        }
      });
    }
    if (playing) {
      if (audioRef.current.currentTime < 78) {
        audioRef.current.currentTime = 78;
      }
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const togglePlay = () => {
    if (!playing && audioRef.current) {
      audioRef.current.currentTime = 78;
    }
    setPlaying((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center pt-10">
      <button
        onClick={togglePlay}
        className="relative w-24 h-24 rounded-full focus:outline-none"
      >
        <div
          className="w-full h-full rounded-full overflow-hidden animate-spin-slow"
          style={{
            backgroundImage:
              "url('https://optim.tildacdn.pro/tild3162-3861-4036-b766-633635323330/-/resize/220x/-/format/webp/photo.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {playing ? (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="black">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
