import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, PhotoIcon, HeartIcon } from '@heroicons/react/24/outline';

// Import images
import tattoo1 from '../assets/images/t1.jpeg';
import tattoo2 from '../assets/images/t2.jpeg';
import tattoo3 from '../assets/images/t3.jpeg';

// Import videos
import video1 from '../assets/videos/v1.mp4';
import video2 from '../assets/videos/v2.mp4';

const Home = () => {
  // Array for featured work images with additional metadata
  const featuredImages = [
    { src: tattoo1, title: "Dragon Sleeve", artist: "Iniyan", likes: 234 },
    { src: tattoo2, title: "Geometric Wolf", artist: "Priya", likes: 189 },
    { src: tattoo3, title: "Mandala Backpiece", artist: "Arjun", likes: 312 }
  ];

  // Array for videos with metadata
  const featuredVideos = [
    { src: video1, title: "Tattoo Process", duration: "2:34", artist: "Iniyan" },
    { src: video2, title: "Time-lapse", duration: "1:45", artist: "Priya" }
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
              className="inline-block bg-tattoo-gold text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-tattoo-red transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Card Design */}
      <section className="md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-12">
            <span className="text-tattoo-gold">FEATURED</span> WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredImages.map((item, index) => (
              <div 
                key={index} 
                className="group bg-tattoo-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Like Button Overlay */}
                  <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-tattoo-gold transition-colors duration-300">
                    <HeartIcon className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-tattoo-gold">By {item.artist}</span>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <HeartIcon className="h-4 w-4" />
                      <span>{item.likes} likes</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-tattoo-black rounded-full hover:bg-tattoo-gold group transition-all duration-300"
            >
              <PhotoIcon className="h-5 w-5 text-tattoo-gold group-hover:text-white transition-colors" />
              <span className="text-tattoo-gold group-hover:text-white transition-colors">View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Preview Section - Card Design */}
      <section className="py-20 bg-gradient-to-b from-black to-tattoo-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-12">
            <span className="text-tattoo-gold">LATEST</span> VIDEOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div 
                key={index} 
                className="group bg-tattoo-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Video Container */}
                <div className="relative overflow-hidden h-64">
                  <video 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 bg-tattoo-gold rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <PlayIcon className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {video.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                    <span className="text-sm text-tattoo-gold">By {video.artist}</span>
                  </div>
                  
                  {/* Video Metadata */}
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <PlayIcon className="h-4 w-4" />
                      <span>Watch now</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Videos Link */}
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-tattoo-black rounded-full hover:bg-tattoo-gold group transition-all duration-300"
            >
              <PlayIcon className="h-5 w-5 text-tattoo-gold group-hover:text-white transition-colors" />
              <span className="text-tattoo-gold group-hover:text-white transition-colors">Watch All Videos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-tattoo-black to-black rounded-2xl p-12 border border-tattoo-gold/20">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              <span className="text-tattoo-gold">READY FOR YOUR</span>{' '}
              <span className="text-white">NEXT TATTOO?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert artists and bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-block bg-tattoo-gold text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-tattoo-red transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tattoo-gold/20"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;