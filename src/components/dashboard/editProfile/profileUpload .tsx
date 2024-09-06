import './profileUpload.css'
import  { useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";
function profileUpload(){
    const[selectFile, setSelectFile] =useState(null);
    const[preview, setPreview] =useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);

    };

    return(
        <>
            <div className="profile-upload">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="file-input"
                    style={{ display: 'none' }}
                />
                <label htmlFor="file-input">
                    <div className="profile-image-container">
                        {preview ? (
                            <img src={preview} alt="Profile" className="profile-image" />
                        ) : (
                            <div className="upload-placeholder">
                                <img  src='images/profileImg/profile-mine.svg' alt="Profile Mine" className='mine-profile'/>
                                <span className='mine-profile-icon'><IoCameraOutline /></span>
                            </div>
                        )}
                        <div className="overlay">
                            <span>پروفایل</span>
                        </div>
                    </div>
                </label>
            </div>
        </>
    )
}

export default profileUpload;