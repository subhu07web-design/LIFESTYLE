import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://res.cloudinary.com/duy2rot8s/image/upload/v1775217596/lifestyle_logo_img_fkwyse.webp" 
                alt="Lifestyle – Family Store" 
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium clothing retail store in North Lakhimpur, Assam. We bring you the latest fashion trends for the entire family.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/policies" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/policies" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Visit Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-amber-600" />
                <span>NT Rd, North Lakhimpur, Assam 787001</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-amber-600" />
                <span>+91 70029 70905</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-amber-600" />
                <span>contact@lifestylelakhimpur.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent border-b border-gray-800 py-2 text-sm focus:border-white outline-none transition-colors"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-amber-600 hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 Lifestyle – Family Store. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Designed for Excellence</span>
            <span>North Lakhimpur, Assam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
