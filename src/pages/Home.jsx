import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, PhotoIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// Import images
import tattoo1 from '../assets/images/i1.jpeg';
import tattoo2 from '../assets/images/i2.jpeg';
import tattoo3 from '../assets/images/i3.jpeg';

// Import videos
import video1 from '../assets/videos/v1.mp4';
import video2 from '../assets/videos/v2.mp4';

const Home = () => {
  // Array for featured work images with additional metadata
  const featuredImages = [
    { src: tattoo1, title: "Dragon Sleeve", artist: "Iniyan", likes: 234, category: "Color" },
    { src: tattoo2, title: "Geometric Wolf", artist: "Priya", likes: 189, category: "Black & Grey" },
    { src: tattoo3, title: "Mandala Backpiece", artist: "Arjun", likes: 312, category: "Dotwork" }
  ];

  // Array for videos with metadata
  const featuredVideos = [
    { src: video1, title: "Tattoo Process", duration: "2:34", artist: "Iniyan", views: "1.2K" },
    { src: video2, title: "Time-lapse", duration: "1:45", artist: "Priya", views: "892" }
  ];

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
              Professional tattoo artists creating unique masterpieces since 2022
            </p>
            <Link
              to="/contact"
              className="inline-block bg-tattoo-gold text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-tattoo-red transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Enhanced Card Design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="text-gray-900">SOME</span>{' '}
              <span className="text-red-600">CLICKS</span>
            </h2>
            <div className="w-24 h-1 bg-tattoo-gold mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 text-lg">Check out our latest masterpieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredImages.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-tattoo-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Like Button */}
                  <button className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-tattoo-gold group/btn transition-all duration-300 shadow-lg transform hover:scale-110">
                    <HeartIcon className="h-5 w-5 text-gray-700 group-hover/btn:text-white transition-colors duration-300" />
                  </button>

                  {/* Artist Credit */}
                  <div className="absolute bottom-4 left-4 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      by {item.artist}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <div className="flex items-center space-x-1 bg-tattoo-gold/10 px-2 py-1 rounded-full">
                      <HeartIconSolid className="h-4 w-4 text-tattoo-gold" />
                      <span className="text-sm font-semibold text-tattoo-gold">{item.likes}</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-tattoo-gold/30 mb-3"></div>
                  
                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">Professional tattoo</span>
                    <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded-full text-xs">#{index + 1} trending</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-tattoo-red group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <PhotoIcon className="h-6 w-6 transition-transform group-hover:rotate-12" />
              <span>Explore Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Preview Section - Enhanced Card Design */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="text-gray-900">LATEST</span>{' '}
              <span className="text-blue-500">VIDEOS</span>
            </h2>
            <div className="w-24 h-1 bg-tattoo-gold mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 text-lg">Watch our tattoo process and time-lapses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Video Container */}
                <div className="relative overflow-hidden aspect-video bg-gray-900">
                  <video 
                    className="w-full h-full object-cover opacity-90"
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
                      <div className="relative w-20 h-20 bg-tattoo-gold rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-all duration-500 shadow-xl">
                        <PlayIcon className="h-10 w-10 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 z-10 bg-black/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
                    <span className="flex items-center space-x-1">
                      <span className="text-tattoo-gold">⏱️</span>
                      <span>{video.duration}</span>
                    </span>
                  </div>

                  {/* Artist Tag */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-sm font-semibold text-gray-900">🎬 {video.artist}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-tattoo-gold transition-colors duration-300">
                      {video.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded border border-gray-200">
                      HD
                    </span>
                  </div>
                  
                  {/* Stats Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <PlayIcon className="h-5 w-5 text-tattoo-gold" />
                        <span className="text-sm font-medium">{video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <HeartIcon className="h-5 w-5 text-tattoo-gold" />
                        <span className="text-sm font-medium">{Math.floor(parseInt(video.views) * 0.1)}</span>
                      </div>
                    </div>
                    
                    {/* Watch Now Link */}
                    <span className="text-tattoo-gold text-base font-bold group-hover:underline cursor-pointer flex items-center">
                      Watch now 
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Videos Link */}
          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-tattoo-gold group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <PlayIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span>Watch All Videos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-400 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-40 translate-x-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                READY FOR YOUR NEXT TATTOO?
              </h2>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
                Book a consultation with our expert artists and bring your vision to life
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 text-lg font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>Schedule Consultation</span>
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;