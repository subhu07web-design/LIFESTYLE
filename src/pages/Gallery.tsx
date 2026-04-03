import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Instagram, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800", alt: "Fashion 1" },
    { url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", alt: "Fashion 2" },
    { url: "https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=800", alt: "Fashion 3" },
    { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", alt: "Fashion 4" },
    { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800", alt: "Fashion 5" },
    { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", alt: "Fashion 6" },
    { url: "https://images.unsplash.com/photo-1529139572765-3974374c60e2?auto=format&fit=crop&q=80&w=800", alt: "Fashion 7" },
    { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800", alt: "Fashion 8" },
    { url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", alt: "Store 1" },
    { url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", alt: "Store 2" },
    { url: "https://images.unsplash.com/photo-1470309634658-8f9f127cff2c?auto=format&fit=crop&q=80&w=800", alt: "Fashion 9" },
    { url: "https://images.unsplash.com/photo-1479064566235-aa2742b9f802?auto=format&fit=crop&q=80&w=800", alt: "Fashion 10" },
  ];

  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="Gallery" 
        description="Explore the visual journey of Lifestyle – Family Store. A glimpse into our curated world of fashion and style."
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">Store Gallery</h1>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              A curated collection of moments, styles, and the premium shopping experience at North Lakhimpur's premier fashion destination.
            </p>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-20">
          {galleryImages.map((image, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group overflow-hidden break-inside-avoid"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-black text-white p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600 via-transparent to-transparent blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <Instagram size={48} className="mx-auto mb-8 text-amber-500" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Follow Our Journey</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Get daily updates on new arrivals, styling tips, and exclusive behind-the-scenes content on our Instagram.</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all"
            >
              @lifestyle_lakhimpur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
