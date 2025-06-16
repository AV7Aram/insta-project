import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socialAPI } from '../../api/api'
import { getUsersAC } from '../../store/reducers/userReducer'


import UsersCard from '../../components/UsersCard/UsersCard'
import style from './UsersPage.module.css'

const UsersPage = () => {
    const dispatch = useDispatch()

    const { users } = useSelector((state) => state.usersPage)

    useEffect(() => {
        socialAPI.getUsers()
            .then((res) => dispatch(getUsersAC(res.data.items)))
    }, [])

    return (
        <div>

            <div className={style.usersCard}>
                {
                    users?.map((user) => {
                        return <UsersCard user={user} key={user.id} />
                    })
                }
            </div>
        </div>
    )
}

export default UsersPage