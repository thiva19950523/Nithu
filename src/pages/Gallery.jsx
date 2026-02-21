import React, { useState } from 'react';
import img1 from '../assets/images/t1.jpeg';
import img2 from '../assets/images/t2.jpeg';
import img3 from '../assets/images/t3.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, category: 'Realism', artist: 'Mike' },
    { id: 2, src: img2, category: 'Traditional', artist: 'Sarah' },
    { id: 3, src: img3, category: 'Geometric', artist: 'Alex' },
    // Add more images as needed with their imports
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-display text-center mb-4">
          <span className="text-tattoo-gold">OUR</span> GALLERY
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Explore our collection of custom tattoos
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={`Tattoo by ${image.artist}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-tattoo-gold font-semibold">{image.category}</p>
                  <p className="text-sm text-gray-300">by {image.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage.src}
                alt="Selected tattoo"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-tattoo-gold text-4xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;