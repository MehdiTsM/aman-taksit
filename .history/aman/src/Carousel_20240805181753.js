import React, { useState, useEffect } from 'react';
import './Carousel.css';
import homeImage1 from './images/carouselImages/homeImage1.jpg';  
import homeImage2 from './images/carouselImages/homeImage2.jpg';
import homeImage3 from './images/carouselImages/homeImage3.jpg'
import homeImage4 from './images/carouselImages/homeImage4.jpg'


const images = [
  homeImage1,
  homeImage2,
  homeImage3,
  homeImage4,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="animate-fadeInUp m-20 relative w-90 max-w-screen-lg mx-auto overflow-hidden z-0">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full hover:bg-customOrange opacity-70 transition"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full hover:bg-customOrange opacity-70 transition"
      >
        &rarr;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;