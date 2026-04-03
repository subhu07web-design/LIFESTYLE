import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, wishlist } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      {/* Top Bar */}
      {!isScrolled && (
        <div className="hidden md:flex bg-black text-white text-[10px] uppercase tracking-widest py-1 justify-center gap-6">
          <span className="flex items-center gap-1"><MapPin size={10} /> NT Rd, North Lakhimpur, Assam</span>
          <span className="flex items-center gap-1"><Phone size={10} /> +91 70029 70905</span>
        </div>
      )}

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/duy2rot8s/image/upload/v1775217596/lifestyle_logo_img_fkwyse.webp" 
            alt="Lifestyle – Family Store" 
            className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-amber-600 transition-colors",
                !isScrolled && location.pathname === '/' ? "text-white" : "text-black",
                location.pathname === link.path && "text-amber-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={cn(
            "p-2 hover:text-amber-600 transition-colors",
            !isScrolled && location.pathname === '/' ? "text-white" : "text-black"
          )}>
            <Search size={20} />
          </button>
          <Link to="/wishlist" className={cn(
            "p-2 hover:text-amber-600 transition-colors relative",
            !isScrolled && location.pathname === '/' ? "text-white" : "text-black"
          )}>
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-amber-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className={cn(
            "p-2 hover:text-amber-600 transition-colors relative",
            !isScrolled && location.pathname === '/' ? "text-white" : "text-black"
          )}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <button 
              className="self-end p-2 text-black mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-2xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={18} />
                <span>+91 70029 70905</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} />
                <span>NT Rd, North Lakhimpur, Assam</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
