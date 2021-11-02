import React from 'react';
import './Gallery.css'
import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jpg'
import img4 from '../../../images/4.jpg'
import img5 from '../../../images/5.jpg'
import img6 from '../../../images/6.jpg'
const Gallery = () => {
    return (
        <div className="gallery_grid container">
                    
                    <h2>Gallery</h2>
                <div className="row ">
                                <div className="col-12 col-md-4 gallery_img">
                                        <div className="overlay">
                                                <a><img src={img1}></img></a>
                                        </div>
                                </div>
                                <div className="col-12 col-md-4 gallery_img">
                                            <div className="overlay">
                                                <a><img src={img2}></img></a>
                                            </div>
                                </div>
                                <div className="col-12 col-md-4 gallery_img">
                                            <div className="overlay">
                                            <a><img src={img3}></img></a>
                                            </div>
                                </div>
                                
                                <div className="col-12 col-md-4 gallery_img">
                                    <div className="overlay">
                                                <a><img src={img4}></img></a>
                                    </div>
                                </div>
                
                                <div className="col-12 col-md-4 gallery_img">
                                        <div className="overlay">
                                                    <a><img src={img5}></img></a>
                                        </div>
                                    
                                </div>
                                <div className="col-12 col-md-4 gallery_img">
                                        <div className="overlay">
                                                    <a><img src={img6}></img></a>
                                        </div>
                                </div>
                </div>
        </div>
        
    );
};

export default Gallery;