import React from 'react';
import './homePageStyle.css';
import Gallery from '../Gallery/Gallery';

import MainVideo from "../../assets/MainVideo.mp4";

const photoDataContent = [
    { id: '1', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '2', image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg' },
    { id: '3', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '4', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '5', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '6', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '7', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
    { id: '8', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' },
];

function HomePage() {
    return (
        <div className="mainBox">
            <div className='mainVideoContainer'>
                <video
                    src={MainVideo}
                    autoPlay
                    loop
                    muted
                    className="mainVideoStyle"
                />
            </div>

            <Gallery photos={photoDataContent} />
        </div>
    );
}

export default HomePage;