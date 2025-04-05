import React from 'react';

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
                    <div className="footer-mainText">Customer Service Office</div>
                    {/*<img className="responsive-image" src="images/icon.png" alt="Icon" />*/}
                </div>
                <div className="box1-3">
                    <div className="footerText">SeaStrike@SeaStrike.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;