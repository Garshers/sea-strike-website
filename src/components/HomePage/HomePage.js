import React from 'react';
import './homePageStyle.css';

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
    const galleryLayouts = ['50/50', '40/60', '60/40'];

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

            <div className='galleryMainFrame'>
                {photoDataContent.reduce((rows, photo, index, array) => {
                    if (index % 2 === 0) {
                        rows.push(array.slice(index, index + 2));
                    }
                    return rows;
                }, []).map((pair, rowIndex) => {
                    const layout = galleryLayouts[rowIndex % galleryLayouts.length];
                    const [width1, width2] = layout.split('/').map(Number);
                    const photo1 = pair[0];
                    const photo2 = pair[1];

                    return (
                        <div className='galleryRow' key={`row-${rowIndex}`}>
                            {photo1 && (
                                <div className='galleryBox' style={{ width: `${width1}%`, margin: '10px 10px 0 10px'}}>
                                    <img src={photo1.image} alt='' className='galleryImageStyle' key={photo1.id} />
                                </div>
                            )}
                            {photo2 && (
                                <div className='galleryBox' style={{ width: `${width2}%`, margin: '10px 10px 0 0' }}>
                                    <img src={photo2.image} alt='' className='galleryImageStyle' key={photo2.id} />
                                </div>
                            )}
                            {!photo2 && width2 > 0 && (
                                <div className='galleryBox' style={{ width: `100%`, height: '100%' }}>
                                    {/* Puste miejsce */}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;