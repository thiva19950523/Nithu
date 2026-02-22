import React, { useState } from 'react';
import axios from 'axios';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/send-email', formData);
      setStatus({
        type: 'success',
        message: "Message sent successfully! We'll contact you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-display mb-4">
            <span className="text-tattoo-gold">CONTACT</span> US
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Book consultations, ask questions, or just say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-gray-900/70 to-black p-8 rounded-2xl border border-tattoo-gold/30 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone'].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm mb-2 capitalize text-gray-300">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== 'phone'}
                    className="w-full px-4 py-3 bg-black/80 border border-gray-700 rounded-xl text-white
                      focus:border-tattoo-gold focus:ring-1 focus:ring-tattoo-gold outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/80 border border-gray-700 rounded-xl text-white
                    focus:border-tattoo-gold focus:ring-1 focus:ring-tattoo-gold outline-none transition resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`text-sm px-4 py-3 rounded-xl border ${
                    status.type === 'success'
                      ? 'bg-green-900/40 text-green-300 border-green-500/30'
                      : 'bg-red-900/40 text-red-300 border-red-500/30'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white
                  bg-tattoo-gold hover:bg-tattoo-red transition-all
                  disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/70 to-black p-8 rounded-2xl border border-tattoo-gold/30 shadow-xl">
              <h3 className="text-2xl font-display text-tattoo-gold mb-6">
                Visit Us
              </h3>

              <div className="space-y-6">
                <InfoRow
                  icon={<MapPinIcon className="h-6 w-6" />}
                  title="Studio Address"
                  text="123 Thirunelveli Road, Kalviyankaadu"
                />
                <InfoRow
                  icon={<PhoneIcon className="h-6 w-6" />}
                  title="Phone"
                  text="+94 77 922 8340"
                />
                <InfoRow
                  icon={<EnvelopeIcon className="h-6 w-6" />}
                  title="Email"
                  text="nithu@gail.com"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/70 to-black p-8 rounded-2xl border border-tattoo-gold/30 shadow-xl">
              <h3 className="text-2xl font-display text-tattoo-gold mb-4">
                Opening Hours
              </h3>
              <div className="text-gray-400 space-y-2">
                <p>Mon – Fri: 11:00 AM – 8:00 PM</p>
                <p>Saturday: 12:00 PM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="text-tattoo-gold mt-1">{icon}</div>
    <div>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);

export default Contact;