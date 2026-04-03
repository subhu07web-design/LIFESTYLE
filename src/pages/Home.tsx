import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [
    "https://res.cloudinary.com/duy2rot8s/image/upload/v1775219099/lifestyle_gpt_banner_gxwzfn.png",
    "https://res.cloudinary.com/duy2rot8s/image/upload/v1775217235/lifestyle_front_banner_img_bv4wuo.webp",
    "https://res.cloudinary.com/duy2rot8s/image/upload/v1775219185/59131b90-90c7-4c30-9b89-42b2adbae497_yu2omu.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-12 h-1 transition-all duration-300",
              currentIndex === idx ? "bg-amber-500 w-16" : "bg-white/30 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home" 
        description="Lifestyle – Family Store: Premium clothing retail store in North Lakhimpur, Assam. Discover the latest fashion for Men, Women, and Kids."
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroSlider />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.5em] mb-6 font-medium"
          >
            New Collection 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none"
          >
            ELEVATE YOUR <br /> <span className="text-amber-500">LIFESTYLE</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/shop" className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all">
              Shop Now
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Visit Store
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-px h-16 bg-white/30" />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">Premium Quality</h4>
                <p className="text-xs text-gray-500">Handpicked fabrics for comfort</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">Fast Delivery</h4>
                <p className="text-xs text-gray-500">Across Assam & Pan India</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                <RotateCcw size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">Easy Returns</h4>
                <p className="text-xs text-gray-500">7-day exchange policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-2">FEATURED COLLECTIONS</h2>
              <p className="text-gray-500 max-w-md">Discover our most popular styles curated just for you and your family.</p>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-amber-600 transition-colors group">
              View All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/shop?category=Men" className="relative group overflow-hidden md:col-span-2 aspect-[16/9] md:aspect-auto md:h-[600px]">
              <img src="https://res.cloudinary.com/duy2rot8s/image/upload/v1775224884/LS_men_model_3_k3oxov.webp" alt="Men's Collection" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold tracking-tighter mb-2 uppercase">Men's Wear</h3>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Collection</span>
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-4 md:h-[600px]">
              <Link to="/shop?category=Women" className="relative group overflow-hidden aspect-[16/9] md:aspect-auto md:h-full">
                <img src="https://res.cloudinary.com/duy2rot8s/image/upload/v1775224462/LS_lady_model3_fpcxw6.jpg" alt="Women's Collection" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold tracking-tighter mb-2 uppercase">Women's Wear</h3>
                  <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Collection</span>
                </div>
              </Link>
              <Link to="/shop?category=Kids" className="relative group overflow-hidden aspect-[16/9] md:aspect-auto md:h-full">
                <img src="https://res.cloudinary.com/duy2rot8s/image/upload/v1775226009/LS_kids_wear_google_img_4_hisib2.jpg" alt="Kids' Collection" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold tracking-tighter mb-2 uppercase">Kids' Wear</h3>
                  <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Collection</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <h2 className="text-4xl font-bold tracking-tighter mb-4">WHAT OUR CUSTOMERS SAY</h2>
            <p className="text-gray-400">Google Rating: 4.6 ⭐ (36 reviews)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", text: "Best clothing store in North Lakhimpur. The quality of fabrics is exceptional and the staff is very helpful." },
              { name: "Priya Das", text: "I love their women's collection. Very trendy and reasonably priced. Highly recommended!" },
              { name: "Amit Gogoi", text: "One stop shop for the entire family. Great variety for kids as well. The store ambiance is premium." }
            ].map((review, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 hover:border-amber-600 transition-colors">
                <p className="italic text-gray-300 mb-6 font-light">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Visit Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase">Visit Our Store</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the premium quality and personalized service at our flagship store in North Lakhimpur. Our fashion consultants are ready to help you find the perfect outfit.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Location</h4>
                    <p className="text-sm text-gray-600">NT Rd, North Lakhimpur, Assam 787001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Call Us</h4>
                    <p className="text-sm text-gray-600">+91 70029 70905</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Lifestyle+Family+Store+North+Lakhimpur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
                >
                  Get Directions <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="h-[450px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative">
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
      </section>
    </div>
  );
};
