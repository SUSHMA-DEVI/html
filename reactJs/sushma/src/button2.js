import React, { useState, useEffect } from 'react';

function App() {
  const images = [
    'image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Use useEffect to update the current image when currentIndex changes
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default App;
