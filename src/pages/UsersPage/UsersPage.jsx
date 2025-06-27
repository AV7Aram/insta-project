import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunkCreator} from '../../store/reducers/userReducer'

import UsersCard from '../../components/UsersCard/UsersCard'
import style from './UsersPage.module.css'

const UsersPage = () => {
    const dispatch = useDispatch()
    const { users, isLoading } = useSelector((state) => state.usersPage)

    useEffect(() => {
        dispatch(getUsersThunkCreator())
    }, [])

    return (
        <div className={style.usersPage}>

            <div className={style.usersGrid}>
                {
                    isLoading ? <div className={style.loading}>Loading...</div>
                        : users?.map((user) => (
                            <UsersCard user={user} key={user.id} />
                        ))
                }
            </div>
        </div>
    )
}

export default UsersPage