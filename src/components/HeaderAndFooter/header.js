import React, { useState, useEffect } from 'react';

import Logo from "../../assets/Logo.png";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div id="header-frame" className={`header-frame ${isScrolled ? 'scrolled' : ''}`}>
                <div className="leftBox">
                    <img className="responsive-image" src={Logo} alt="Logo" />
                </div>
                <div className="rightBox">
                    <div className="menuButton" onClick={() => window.location.href = '/'}>
                        <div className="menuText">O nas</div>
                        <div className="menuText">Pływanie dorośli</div>
                        <div className="menuText">Pływanie dzieci</div>
                        <div className="menuText">Interwały</div>
                        <div className="menuText">Lokalizacje</div>
                        <div className="menuText">Harmonogram</div>
                        <div className="menuText">Wyjazdy</div>
                        <div className="menuText">Start</div>
                    </div>
                </div>
            </div>
        </header>
    );
}