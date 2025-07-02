import React from 'react'
import { useSelector } from 'react-redux'

import Pagination from '../../components/Pagination/Pagination'
import UsersCard from '../../components/UsersCard/UsersCard'
import style from './UsersPage.module.css'

const UsersPage = () => {
    const { users, isLoading, } = useSelector((state) => state.usersPage)

    return (
        <>
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
            <Pagination />
        </>
    )
}

export default UsersPage