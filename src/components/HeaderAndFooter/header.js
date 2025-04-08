import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from "../../assets/Logo.png";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
            if (window.innerWidth >= 650) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div id="header-frame" className={`header-frame ${isScrolled ? 'scrolled' : ''}`} 
                style={{ 
                    backgroundColor: isMenuOpen ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
                    transition: isMenuOpen ? 'background 0s ease, opacity 1s ease' : 'background 3s ease, opacity 1s ease'
                 }}>

                <div className="leftBox">
                    <img className="responsive-image" src={Logo} alt="Logo" />
                </div>
                <div className="rightBox">
                    {isMobile ? (
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            <GiHamburgerMenu />
                        </div>
                    ) : (
                        <div className="menuButton">
                            <div className="menuText" onClick={() => window.location.href = '/o_nas'}>O nas</div>
                            <div className="menuText" onClick={() => window.location.href = '/plywanie_dorosli'}>Pływanie dorośli</div>
                            <div className="menuText" onClick={() => window.location.href = '/plywanie_dzieci'}>Pływanie dzieci</div>
                            <div className="menuText" onClick={() => window.location.href = '/interwaly'}>Interwały</div>
                            <div className="menuText" onClick={() => window.location.href = '/lokalizacje'}>Lokalizacje</div>
                            <div className="menuText" onClick={() => window.location.href = '/harmonogram'}>Harmonogram</div>
                            <div className="menuText" onClick={() => window.location.href = '/wyjazdy'}>Wyjazdy</div>
                            <div className="menuText" onClick={() => window.location.href = '/'}>Start</div>
                        </div>
                    )}
                </div>
                {isMobile && isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="menuText" onClick={() => { window.location.href = '/o_nas'; setIsMenuOpen(false); }}>O nas</div>
                        <div className="menuText" onClick={() => { window.location.href = '/plywanie_dorosli'; setIsMenuOpen(false); }}>Pływanie dorośli</div>
                        <div className="menuText" onClick={() => { window.location.href = '/plywanie_dzieci'; setIsMenuOpen(false); }}>Pływanie dzieci</div>
                        <div className="menuText" onClick={() => { window.location.href = '/interwaly'; setIsMenuOpen(false); }}>Interwały</div>
                        <div className="menuText" onClick={() => { window.location.href = '/lokalizacje'; setIsMenuOpen(false); }}>Lokalizacje</div>
                        <div className="menuText" onClick={() => { window.location.href = '/harmonogram'; setIsMenuOpen(false); }}>Harmonogram</div>
                        <div className="menuText" onClick={() => { window.location.href = '/wyjazdy'; setIsMenuOpen(false); }}>Wyjazdy</div>
                        <div className="menuText" onClick={() => { window.location.href = '/'; setIsMenuOpen(false); }}>Start</div>
                    </div>
                )}
            </div>
        </header>
    );
}