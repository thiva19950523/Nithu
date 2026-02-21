import React, { useState } from 'react';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, src: '/assets/videos/v1.mp4', title: 'Tattoo Process - Dragon Design', duration: '3:45' },
    { id: 2, src: '/assets/videos/v2.mp4', title: 'Time-lapse: Portrait Tattoo', duration: '2:30' },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-display text-center mb-4">
          <span className="text-tattoo-gold">VIDEO</span> GALLERY
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Watch our artists at work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <video className="w-full h-64 object-cover rounded-lg">
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tattoo-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                  </div>
                  <p className="text-white font-semibold">{video.title}</p>
                  <p className="text-sm text-gray-300">{video.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-4xl w-full">
              <video controls className="w-full rounded-lg">
                <source src={selectedVideo.src} type="video/mp4" />
              </video>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-tattoo-gold text-2xl"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;