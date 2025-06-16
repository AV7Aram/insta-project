import React from 'react';
import style from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footerContent}>
                    <div className={style.footerSection}>
                        <h3>Social Network</h3>
                        <p>Connecting people around the world</p>
                    </div>
                    <div className={style.footerSection}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/users">Users</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={style.footerSection}>
                        <h4>Follow Us</h4>
                        <div className={style.socialIcons}>
                            <a href="#" className={style.icon}><FaFacebook /></a>
                            <a href="#" className={style.icon}><FaTwitter /></a>
                            <a href="#" className={style.icon}><FaInstagram /></a>
                            <a href="#" className={style.icon}><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <p>&copy; 2025 Social Network App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;