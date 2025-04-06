import React from 'react';
import './homePageStyle.css';

import MainVideo from "../../assets/MainVideo.mp4";

function HomePage() {
    return (
        <div className="mainBox">
            <video src={MainVideo} width="100%" height="auto" autoplay="true" loop="true" muted="true" />
        </div>
    );
}

export default HomePage;