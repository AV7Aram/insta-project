import { NavLink } from 'react-router-dom';
import userIMG from '../../assets/user.png'
import style from './UsersCard.module.css'

const UsersCard = ({ user }) => {
    return (
        <div className={style.usersCard}>
            <div className={style.avatarContainer}>
                <img
                    src={user.photos.large || userIMG}
                    alt={user.name}
                    className={style.avatar}
                    onError={(e) => {
                        e.target.src = userIMG;
                    }}
                />
                <div className={style.statusIndicator}></div>
            </div>
            <NavLink to={`/users/:${user.id}`}><h2 className={style.userName}>{user.name}</h2></NavLink>
            <p className={style.userStatus}>Online now</p>
            <div className={style.userStats}>
                <div className={style.stat}>
                    <span className={style.statNumber}>245</span>
                    <span className={style.statLabel}>Friends</span>
                </div>
                <div className={style.stat}>
                    <span className={style.statNumber}>56</span>
                    <span className={style.statLabel}>Posts</span>
                </div>
            </div>
            <button className={style.followButton}>
                <span className={style.buttonText}>Follow</span>
                <span className={style.buttonIcon}>+</span>
            </button>
        </div>
    )
}

export default UsersCard