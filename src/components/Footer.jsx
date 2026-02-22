import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-tattoo-gold/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-tattoo-gold">Iniyan</span>
              <span className="text-white">Tattoo</span>
            </h3>
            <p className="text-gray-400">
              Professional tattoo artists creating unique masterpieces since 2022.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tattoo-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-tattoo-gold">Home</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-tattoo-gold">Gallery</Link></li>
              <li><Link to="/videos" className="text-gray-400 hover:text-tattoo-gold">Videos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-tattoo-gold">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tattoo-gold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Kalviyankaadu Road,</li>
              <li>Kalviyankaadu.</li>
              <li>nithu@gmail.com</li>
              <li>+94  922 8340</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tattoo-gold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tattoo-gold text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-tattoo-gold text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-tattoo-gold text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Iniyan Tattoo Tattoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;