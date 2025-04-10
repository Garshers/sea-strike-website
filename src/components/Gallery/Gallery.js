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
                            <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${width1}%`, padding: isMobile ? '0' : '10px 5px 0 10px',}}>
                                <img src={photo1.image} alt='' className='galleryImageStyle' key={photo1.id}/>
                                <a href="/o_nas" className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                        {photo2 && (
                            <div className='galleryBox'style={{width: isMobile ? 'auto' : `${width2}%`,padding: isMobile ? '0' : '10px 10px 0 5px',}}>
                                <img src={photo2.image} alt='' className='galleryImageStyle' key={photo2.id}/>
                                <a href="/o_nas" className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                        {!photo2 && width2 > 0 && (
                            <div className='galleryBox' style={{ width: 'auto', padding: '10px'}}>
                                <a href="/o_nas" className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;