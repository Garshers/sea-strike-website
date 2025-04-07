import React, { useState, useEffect } from 'react';
import './galleryStyle.css';

function Gallery({ photos }) {
    const galleryLayouts = ['50/50', '40/60', '60/40'];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='galleryMainFrame'>
            {photos.reduce((rows, photo, index, array) => {
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
                            <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${width1}%`, margin: isMobile ? '0' : '10px 10px 0 10px',}}>
                                <img src={photo1.image} alt='' className='galleryImageStyle' key={photo1.id} />
                            </div>
                        )}
                        {photo2 && (
                            <div className='galleryBox'style={{width: isMobile ? 'auto' : `${width2}%`,margin: isMobile ? '0' : '10px 10px 0 0',}}>
                                <img src={photo2.image} alt='' className='galleryImageStyle' key={photo2.id} />
                            </div>
                        )}
                        {!photo2 && width2 > 0 && (
                            <div className='galleryBox' style={{ width: 'auto', margin: '0.5% 0.5% 0 0.5%'}}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;