import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunkCreator } from '../../store/reducers/profileReducer'

import logo from '../../assets/user.png'

import style from './UserPage.module.css'

const UserPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { profile, isLoading } = useSelector(state => state.profilePage)

    useEffect(() => {
        dispatch(getProfileThunkCreator(id))
    }, [dispatch, id])

    if (isLoading || !profile) {
        return <div className={style.loading}>Loading...</div>
    }

    return (
        <div className={style.userPage}>
            <div className={style.card}>
                <div className={style.avatarBlock}>
                    <img
                        src={profile.photos.large || profile.photos.small || logo}
                        alt={profile.fullName}
                        className={style.avatar}
                    />
                </div>
                <div className={style.info}>
                    <h2 className={style.name}>{profile.fullName}</h2>
                    <p className={style.status}>{profile.aboutMe || "no status"}</p>
                    <div className={style.job}>
                        <span>Job:</span> {profile.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}
                    </div>
                    {profile.lookingForAJobDescription && (
                        <div className={style.jobDesc}>
                            <span>Description:</span> {profile.lookingForAJobDescription}
                        </div>
                    )}
                    <div className={style.contacts}>
                        <span>Contacts:</span>
                        <ul>
                            {Object.entries(profile.contacts).map(([key, value]) =>
                                value ? (
                                    <li key={key}>
                                        <a href={value} target="_blank">
                                            {key}
                                        </a>
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage