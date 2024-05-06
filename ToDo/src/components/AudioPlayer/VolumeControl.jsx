const VolumeControl = ({ volume, handleVolumeChange }) => {
    return (
        <div className="volume-control">
            <label>Volume: </label>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(e.target.value)}
            />
        </div>
    );
};

export default VolumeControl;