const FileUpload = ({ handleFileUpload }) => {
    return (
        <div className="file-upload">
            <label htmlFor="audio-upload">Upload Audio: </label>
            <input
                type="file"
                id="audio-upload"
                accept="audio/*"
                onChange={handleFileUpload}
            />
        </div>
    );
};

export default FileUpload;
