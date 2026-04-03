import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck, Users, Heart, MapPin, Sparkles, History } from 'lucide-react';
import { motion } from 'motion/react';

export const OurStory: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="Our Story" 
        description="The journey of Lifestyle – Family Store, from a local boutique to North Lakhimpur's premier fashion destination."
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Store Heritage" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Est. 2014</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">A Decade of <br /> <span className="text-amber-600">Elegance</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              From a humble beginning in North Lakhimpur to becoming the region's most trusted name in family fashion.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* The Beginning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Roots" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-black text-white p-10 hidden md:block">
              <History size={40} className="text-amber-500 mb-4" />
              <p className="text-sm font-bold uppercase tracking-widest">Founded in</p>
              <p className="text-4xl font-bold">2014</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase">The Vision</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lifestyle – Family Store was born out of a passion for quality and a deep respect for our community. Our founder envisioned a space where every family in North Lakhimpur could find international-standard fashion without leaving their hometown.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We started with a small collection of handpicked ethnic wear. Today, we house over 50+ premium brands and our own signature collections that blend traditional Assamese aesthetics with modern silhouettes.
            </p>
            <div className="flex items-center gap-4 p-6 bg-gray-50 border-l-4 border-amber-600">
              <Sparkles className="text-amber-600 shrink-0" />
              <p className="italic text-gray-700">"Fashion is not just about clothes; it's about the confidence they inspire."</p>
            </div>
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="bg-black text-white py-24 px-8 md:px-24 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h4 className="text-6xl font-bold text-amber-500 mb-2 tracking-tighter">10Y+</h4>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Legacy of Style</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold text-amber-500 mb-2 tracking-tighter">50K+</h4>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Outfits Delivered</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold text-amber-500 mb-2 tracking-tighter">4.6⭐</h4>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Customer Love</p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center mx-auto rounded-full">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm">Quality First</h3>
              <p className="text-gray-500 text-sm">Every thread is inspected to ensure it meets our rigorous standards.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center mx-auto rounded-full">
                <Users size={24} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm">Customer Centric</h3>
              <p className="text-gray-500 text-sm">Your satisfaction is our only metric of success.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center mx-auto rounded-full">
                <Heart size={24} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm">Local Pride</h3>
              <p className="text-gray-500 text-sm">Deeply rooted in Assam, serving with heart and hospitality.</p>
            </div>
          </div>
        </div>

        {/* Store Location CTA */}
        <div className="relative h-[400px] flex items-center justify-center text-white text-center">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
            alt="Visit Us" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-4">
            <MapPin size={48} className="mx-auto mb-6 text-amber-500" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Visit Our Flagship Store</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Experience our story in person at NT Rd, North Lakhimpur. We'd love to be a part of your fashion journey.</p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Lifestyle+Family+Store+North+Lakhimpur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
