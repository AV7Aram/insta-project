import userIMG from '../../assets/user.png'
import style from './UsersCard.module.css'

const UsersCard = ({ user }) => {

    return (
        <div className={style.usersCard}>
            <h2>{user.name}</h2>
            <img src={user.photos.large ? user.photos.large : userIMG} />
            <button>follow</button>
        </div>
    )
}

export default UsersCard