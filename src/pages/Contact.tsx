import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Lifestyle – Family Store in North Lakhimpur. Call us, visit our store, or send us a message."
      />

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tighter uppercase mb-4">Get In Touch</h1>
          <p className="text-gray-500 uppercase tracking-widest text-xs">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Contact Details</h3>
              <div className="space-y-6">
                <a href="tel:+917002970905" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Call Us</p>
                    <p className="text-sm font-bold">+91 70029 70905</p>
                  </div>
                </a>
                <a href="https://wa.me/917002970905" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">WhatsApp</p>
                    <p className="text-sm font-bold">Chat with us</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</p>
                    <p className="text-sm font-bold">contact@lifestyle.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Store Hours</p>
                    <p className="text-sm font-bold">10:00 AM - 09:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Our Location</h3>
              <div className="flex gap-4 mb-6">
                <MapPin size={24} className="text-amber-500 shrink-0" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  NT Rd, North Lakhimpur, Assam 787001
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Lifestyle+Family+Store+North+Lakhimpur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-amber-500 border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-black text-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.068936302484!2d94.1018!3d27.2315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37409968453715e7%3A0x673479427b99c750!2sLifestyle%20-%20Family%20Store!5e0!3m2!1sen!2sin!4v1712123456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lifestyle Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
