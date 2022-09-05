import React from "react";
import './styles.css';
import FacebookIcon from '../../assets/icon_facebook.png';
import InstagramIcon from '../../assets/icon_instagram.png';
import TwitterIcon from '../../assets/icon_twitter.png';
import MailIcon from '../../assets/icon_mail.png';
import TwitchIcon from '../../assets/icon_twitch.png';

function Footer() {
    return (
        <div className="footer--container">
            <ul className="footer--address">
                <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                <div>binarcarrental@gmail.com</div>
                <div>081-233-334-808</div>
            </ul>
            <ul className="footer--link">
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
            </ul>
            <div className="footer--contact">
                <p>Connect with us</p>
                <div>
                    <img src={FacebookIcon} className="footer--contact-account"/>
                    <img src={InstagramIcon} className="footer--contact-account"/>
                    <img src={TwitterIcon} className="footer--contact-account"/>
                    <img src={MailIcon} className="footer--contact-account"/>
                    <img src={TwitchIcon} className="footer--contact-account"/>
                </div>
            </div>
            <div className="footer--copyright">
                <p>Copyright Binar 2022</p>
                <p>HERA</p>
            </div>
        </div>
    )
}

export default Footer