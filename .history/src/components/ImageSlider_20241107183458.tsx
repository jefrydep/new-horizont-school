"use client";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const images = [
  "/students-1.jpg",
  "/students-2.jpg",
  "/students-3.jpg",
  "/students-4.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const changeInterval = 5000; // Cambiar imagen cada 5 segundos
  const text = "¡Bienvenido a nuestro Slider!"; // Texto que se escribirá

  // Cambiar imagen automáticamente cada "changeInterval" segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, changeInterval);

    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cuando cambia la imagen, reiniciamos el índice del texto
    setCurrentTextIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    // Escribir el texto letra por letra
    const typingInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => {
        if (prevIndex < text.length) {
          return prevIndex + 1;
        } else {
          // Cuando termine de escribir el texto, reiniciar después de 2 segundos
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentTextIndex(0); // Reiniciar el índice después de 2 segundos
          }, 4000); // Esperar 2 segundos antes de reiniciar
          return prevIndex; // Evitar que se reinicie antes de tiempo
        }
      });
    }, 100); // El intervalo entre cada letra

    // Limpiar el intervalo de escritura cuando el componente se desmonte
    return () => clearInterval(typingInterval);
  }, [currentIndex]); // Solo se activa cuando cambia la imagen

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full container mx-auto overflow-hidden">
      {/* Imagen activa */}
      <div className="w-full h-[56vh]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Contenido centrado con efecto de escritura */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-center bg-black bg-opacity-40">
        <div>
          <h2 className="text-3xl font-bold mb-4 overflow-hidden whitespace-nowrap">
            {/* Texto con efecto de escritura */}
            <span
              className="inline-block"
              style={{
                width: `${(currentTextIndex / text.length) * 100}%`, // Ancho controlado según el índice
                transition: "width 0.1s", // Controla la animación de la escritura
              }}
            >
              {text.slice(0, currentTextIndex)}{" "}
              {/* Mostrar solo las letras hasta currentTextIndex */}
            </span>
          </h2>
          <Button className="  bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
            <div className="flex">
              <span className="mr-2">
                <Phone />
              </span>
             Contactar
            </div>
          </Button>
        </div>
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
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
