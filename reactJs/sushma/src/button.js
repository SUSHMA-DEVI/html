import React, { useState } from 'react';

function Button() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Initial background color

  // Function to change the background color
  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: '100vw',
          height: '100vh',
          transition: 'background-color 0.5s', // Optional: Add a transition effect
        }}
      >
        This is your content with a dynamic background color.
      </div>
    </div>
  );
}

export default Button;


// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   const decrementCount = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={incrementCount}>+</button>
//       <button onClick={decrementCount}>-</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';

// function App() {
//   const images = [
//     'image1.jpg',
//     'images/image2.jpg',
//     'images/image3.jpg',
//     // Add more image URLs as needed
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next image
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous image
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Use useEffect to update the current image when currentIndex changes
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="slideshow">
//       <button onClick={prevSlide}>Previous</button>
//       <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// }

// export default App;




