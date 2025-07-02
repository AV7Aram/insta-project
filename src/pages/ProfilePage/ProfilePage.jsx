import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socialAPI } from '../../api/api';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import style from './ProfilePage.module.css';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { userId, login, email } = useSelector(state => state.auth);
    const { profile } = useSelector(state => state.profilePage);

    useEffect(() => {
        if (userId) {
            socialAPI.getProfile(userId)
                .then((res) => {
                    console.log("Profile data:", res.data);
                });
        }
    }, [userId, dispatch]);

    return (
        <div className={style.profilePage}>
            <h1 className={style.title}>Your Profile</h1>

            <div className={style.profileCard}>
                <div className={style.avatarSection}>
                    {profile?.photos?.large ? (
                        <img
                            src={profile.photos.large}
                            alt="Profile"
                            className={style.avatar}
                        />
                    ) : (
                        <div className={style.avatarPlaceholder}>
                            {login ? login.charAt(0).toUpperCase() : 'U'}
                        </div>
                    )}
                    <UploadPhoto />
                </div>

                <div className={style.infoSection}>
                    <h2 className={style.userName}>{login || 'User'}</h2>

                    <div className={style.infoGroup}>
                        <span className={style.label}>Email:</span>
                        <span className={style.value}>{email || 'No email provided'}</span>
                    </div>

                    <div className={style.infoGroup}>
                        <span className={style.label}>User ID:</span>
                        <span className={style.value}>{userId || 'Unknown'}</span>
                    </div>

                    {profile && profile.aboutMe && (
                        <div className={style.infoGroup}>
                            <span className={style.label}>About Me:</span>
                            <span className={style.value}>{profile.aboutMe}</span>
                        </div>
                    )}

                    <div className={style.actions}>
                        <button className={style.editButton}>Edit Profile</button>
                        <button className={style.changePasswordButton}>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;