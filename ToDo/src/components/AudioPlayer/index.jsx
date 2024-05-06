import './index.scss'

import { useRef, useState, useEffect } from 'react';
import PlaybackControls from './PlayerControls';
import VolumeControl from './VolumeControl';
import FileUpload from './FileUpload';

const AudioPlayer = ({ audioSrc, setAudioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        console.log(audio,'audio');
        const handleLoadedMetadata = () => setDuration(audio.duration);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const stopAudio = () => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
    };

    const handleVolumeChange = (newVolume) => {
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleProgressChange = (newTime) => {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAudioSrc(url);
            setIsPlaying(false);
            setCurrentTime(0);
            // setDuration(0);
        }
    };

    return (
        <div className="audio-player">
            <FileUpload handleFileUpload={handleFileUpload} />
            <audio ref={audioRef} src={audioSrc} />

            <PlaybackControls
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
                stopAudio={stopAudio}
                currentTime={currentTime}
                duration={duration}
                formatTime={formatTime}
                handleProgressChange={handleProgressChange}
            />

            <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
        </div>
    );
};

export default AudioPlayer;
