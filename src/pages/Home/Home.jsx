import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.hero}>
                <h1>Welcome to Social Network</h1>
                <p>Connect with friends and the world around you</p>
                <div className={style.ctaButtons}>
                    <NavLink to="/users" className={style.primaryBtn}>Get Started</NavLink>
                    <button className={style.secondaryBtn}>Learn More</button>
                </div>
            </div>

            <div className={style.features}>
                <div className={style.featureCard}>
                    <div className={style.icon}>👥</div>
                    <h3>Find Friends</h3>
                    <p>Discover new people and connect with friends</p>
                </div>
                <div className={style.featureCard}>
                    <div className={style.icon}>💬</div>
                    <h3>Messaging</h3>
                    <p>Chat with friends in real-time</p>
                </div>
                <div className={style.featureCard}>
                    <div className={style.icon}>📱</div>
                    <h3>Stay Connected</h3>
                    <p>Access your network anywhere, anytime</p>
                </div>
            </div>
        </div>
    )
}

export default Home