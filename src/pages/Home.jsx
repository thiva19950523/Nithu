import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, PhotoIcon } from '@heroicons/react/24/outline';

// Import images
import tattoo1 from '../assets/images/t1.jpeg';
import tattoo2 from '../assets/images/t2.jpeg';
import tattoo3 from '../assets/images/t3.jpeg';

// Import videos
import video1 from '../assets/videos/v1.mp4';
import video2 from '../assets/videos/v2.mp4';

const Home = () => {
  // Array for featured work images
  const featuredImages = [tattoo1, tattoo2, tattoo3];

  return (
    <div className="pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-tattoo-gold">INIYAN</span>
              <span className="text-white"> TATTOO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional tattoo artists creating unique masterpieces since 2010
            </p>
            <Link
              to="/contact"
              className="inline-block bg-tattoo-gold text-black px-8 py-4 text-lg font-semibold rounded-full hover:bg-tattoo-red transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-12">
            <span className="text-tattoo-gold">FEATURED</span> WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Tattoo ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 text-tattoo-gold hover:text-white transition-colors"
            >
              <PhotoIcon className="h-5 w-5" />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-tattoo-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-12">
            <span className="text-tattoo-gold">LATEST</span> VIDEOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <video 
                className="w-full h-64 object-cover rounded-lg"
                muted
                loop
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-16 w-16 text-tattoo-gold" />
              </div>
            </div>
            <div className="relative group">
              <video 
                className="w-full h-64 object-cover rounded-lg"
                muted
                loop
                playsInline
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-16 w-16 text-tattoo-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;