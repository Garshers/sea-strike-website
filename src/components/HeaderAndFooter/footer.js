import React from 'react';

import Logo from "../../assets/Logo.png";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import mail from "../../assets/mail.png";

function Footer() {
    return (
        <footer>
            <div className="footer-frame">
                <div className="box1-3">
                    <div className="footerText">+48 XXX XXX XXX</div>
                    <div className="footerText">
                        The helpline is available from Monday to Friday, from 9:00 AM to 9:00 PM.
                    </div>
                </div>
                <div className="box1-3">
                    <img src={Logo} alt="Icon Logo" style={{ width: `60px`}} />
                    <div className="footer-mainText">Customer Service Office</div>
                </div>
                <div className="box1-3">
                    <div className='box1-3-row'>
                        <img className="logo" src={mail} alt="Icon mail" />
                        <div className="footerText">SeaStrike@SeaStrike.com</div>
                    </div>
                        <div className='box1-3-row'>
                        <a href="https://www.instagram.com/izzzyway" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={ig} alt="Icon IG" />
                        </a>

                        <a href="https://www.facebook.com/iza.pawik" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={fb} alt="Icon FB" />
                        </a>

                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={yt} alt="Icon YT" style={{width: `40px`}}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;