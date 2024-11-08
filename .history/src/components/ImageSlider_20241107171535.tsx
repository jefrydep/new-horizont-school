import React, { useState, useEffect } from 'react';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeInterval = 5000; // Cambiar cada 5 segundos

  // Cambiar imagen automáticamente cada "changeInterval" segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, changeInterval);

    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Imagen activa */}
      <div className="w-full h-80 md:h-96">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
