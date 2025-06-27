import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunkCreator } from '../../store/reducers/profileReducer'

const UserPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProfileThunkCreator(id))
    })

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {id}</p>
        </div>

    )
}

export default UserPage 