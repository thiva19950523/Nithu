import React, { useState } from 'react';
import axios from 'axios';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-display text-center mb-4">
          <span className="text-tattoo-gold">CONTACT</span> US
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Get in touch for consultations or questions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-lg border border-tattoo-gold/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-tattoo-gold focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-tattoo-gold focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-tattoo-gold focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-tattoo-gold focus:outline-none text-white"
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-tattoo-gold text-black py-3 rounded-lg font-semibold hover:bg-tattoo-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-tattoo-gold/30">
              <h3 className="text-2xl font-display text-tattoo-gold mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-tattoo-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Studio Address</p>
                    <p className="text-gray-400">123 Thirunelveli Road,<br />Kalviyankaadu.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-tattoo-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-tattoo-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@inkmasters.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-tattoo-gold/30">
              <h3 className="text-2xl font-display text-tattoo-gold mb-4">Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 11am - 8pm</p>
                <p>Saturday: 12pm - 6pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;