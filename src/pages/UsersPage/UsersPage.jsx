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
        console.log("Fetching users...")
        socialAPI.getUsers()
            .then((res) => {
                console.log("API response:", res)
                dispatch(getUsersAC(res.data.items))
            })
            .catch(error => {
                console.error("Error fetching users:", error)
            })
    }, [])

    return (
        <div className={style.usersPage}>
            <h1 className={style.pageTitle}>Our Community</h1>
            <p className={style.pageSubtitle}>Connect with friends and meet new people</p>

            <div className={style.searchBar}>
                <input
                    type="text"
                    placeholder="Search users..."
                    className={style.searchInput}
                />
                <button className={style.searchButton}>Search</button>
            </div>

            <div className={style.usersGrid}>
                {users?.map((user) => (
                    <UsersCard user={user} key={user.id} />
                ))}
            </div>
        </div>
    )
}

export default UsersPage