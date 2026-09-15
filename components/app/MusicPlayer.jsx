import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNext();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isRepeat, currentTrack]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const audioFiles = files.filter(file => file.type.startsWith('audio/'));
    
    const newTracks = audioFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name.replace(/\.[^/.]+$/, ''),
      file: file,
      url: URL.createObjectURL(file)
    }));

    setPlaylist([...playlist, ...newTracks]);
    
    if (!currentTrack && newTracks.length > 0) {
      setCurrentTrack(newTracks[0]);
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current || !currentTrack) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (playlist.length === 0) return;
    
    const currentIndex = playlist.findIndex(track => track.id === currentTrack?.id);
    let nextIndex;
    
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }
    
    setCurrentTrack(playlist[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (playlist.length === 0) return;
    
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    
    const currentIndex = playlist.findIndex(track => track.id === currentTrack?.id);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentTrack(playlist[prevIndex]);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    if (isMobile) {
      setShowPlaylist(false);
    }
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylist(playlist.filter(track => track.id !== trackId));
    if (currentTrack?.id === trackId) {
      setCurrentTrack(null);
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  const renderPlayer = () => (
    <div className={`${isMobile && showPlaylist ? 'hidden' : 'flex-1'} flex flex-col`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Music Player</h2>
        <div className="flex items-center gap-2">
          {isMobile && (
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              <Icon icon="mdi:playlist-music" className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
          >
            <Icon icon="mdi:plus" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Icon icon="mdi:music-note" className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            {currentTrack?.name || 'No track selected'}
          </h3>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-400 w-10">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime/duration) * 100}%, #374151 ${(currentTime/duration) * 100}%, #374151 100%)`
              }}
            />
            <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setIsShuffle(!isShuffle)}
            className={`p-2 rounded-lg transition-colors ${isShuffle ? 'text-blue-400 bg-blue-400/20' : 'text-gray-400 hover:text-white'}`}
          >
            <Icon icon="mdi:shuffle" className="w-5 h-5" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            disabled={!currentTrack}
          >
            <Icon icon="mdi:skip-previous" className="w-6 h-6" />
          </button>
          
          <button
            onClick={handlePlayPause}
            className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            disabled={!currentTrack}
          >
            <Icon icon={isPlaying ? 'mdi:pause' : 'mdi:play'} className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            disabled={!currentTrack}
          >
            <Icon icon="mdi:skip-next" className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setIsRepeat(!isRepeat)}
            className={`p-2 rounded-lg transition-colors ${isRepeat ? 'text-blue-400 bg-blue-400/20' : 'text-gray-400 hover:text-white'}`}
          >
            <Icon icon="mdi:repeat" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <Icon icon="mdi:volume-high" className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderPlaylist = () => (
    <div className={`${isMobile ? (showPlaylist ? 'flex-1' : 'hidden') : 'w-80'} bg-black/20 backdrop-blur-sm rounded-xl p-4 flex flex-col`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-400">PLAYLIST ({playlist.length})</h4>
        {isMobile && (
          <button
            onClick={() => setShowPlaylist(false)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>
      <div className="overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <div className="space-y-2">
          {playlist.map((track, index) => (
            <div
              key={track.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                currentTrack?.id === track.id 
                  ? 'bg-blue-600/30 border border-blue-500/50' 
                  : 'hover:bg-white/5'
              }`}
              onClick={() => handleTrackClick(track)}
            >
              <span className="text-gray-500 text-sm w-6">{index + 1}</span>
              {currentTrack?.id === track.id && isPlaying && (
                <Icon icon="mdi:volume-high" className="w-4 h-4 text-blue-400" />
              )}
              <span className="flex-1 text-white text-sm truncate">{track.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTrack(track.id);
                }}
                className="p-1 text-gray-500 hover:text-red-400 transition-colors"
              >
                <Icon icon="mdi:close" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <audio ref={audioRef} />
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {playlist.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Icon icon="mdi:music-note-off" className="w-24 h-24 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold text-white mb-2">No Music Added</h2>
            <p className="text-gray-400 mb-6">Add your music files to start listening</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              <Icon icon="mdi:plus" className="w-5 h-5" />
              Add Music
            </button>
          </div>
        </div>
      ) : (
        <div className={`p-6 flex ${isMobile ? 'flex-col' : 'gap-6'} h-full`}>
          {renderPlayer()}
          {renderPlaylist()}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;