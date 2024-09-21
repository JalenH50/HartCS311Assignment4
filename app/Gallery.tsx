"use client";

import React, {useState} from 'react';

interface GalleryProps { //https://www.dhiwise.com/post/fixing-error-binding-element-children-implicitly   I used this site to fix a binding error
    images: string[]; 
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };


    return (
    <div>
        {images.length > 0 && (
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        )}
        <div>
            <button onClick={handlePrevious} disabled={images.length === 0}>
                Previous
            </button>
            <button onClick={handleNext} disabled={images.length === 0}>
                Next
            </button>
        </div>
    </div>
    );
};

export default Gallery;