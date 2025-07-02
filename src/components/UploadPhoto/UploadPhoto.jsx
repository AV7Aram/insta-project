import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { savePhoto } from '../../store/reducers/profileReducer';
import style from './UploadPhoto.module.css';

const UploadPhoto = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        if (e.target.files.length) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            setIsUploading(true);
            try {
                await dispatch(savePhoto(selectedFile));
                setSelectedFile(null);
            } finally {
                setIsUploading(false);
            }
        }
    };
    return (
        <div className={style.uploadContainer}>
            <label className={style.uploadButton}>
                Choose Photo
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className={style.fileInput}
                />
            </label>

            {selectedFile && (
                <>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className={style.uploadButton}
                    >
                        {isUploading ? 'Uploading...' : 'Upload Photo'}
                    </button>
                    <div className={style.preview}>
                        <p>Selected: {selectedFile.name}</p>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Preview"
                            className={style.previewImage}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default UploadPhoto;