const PlaybackControls = ({
    isPlaying,
    togglePlayPause,
    stopAudio,
    currentTime,
    duration,
    formatTime,
    handleProgressChange
}) => {
    return (
        <div className="controls">
            <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={stopAudio}>Stop</button>
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => handleProgressChange(e.target.value)}
            />
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
    );
};

export default PlaybackControls;