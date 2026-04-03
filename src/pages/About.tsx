import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck, Users, Heart, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="About Us" 
        description="Learn about Lifestyle – Family Store, the premier clothing retail destination in North Lakhimpur, Assam."
      />

      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">Our Story</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Lifestyle – Family Store was founded with a simple mission: to bring premium, high-quality fashion to the heart of North Lakhimpur. We believe that everyone deserves to look and feel their best.
            </p>
          </div>
        </div>

        {/* Image & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-square bg-gray-100">
            <img 
              src="https://picsum.photos/seed/store-interior/1000/1000" 
              alt="Store Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-black text-white p-12 hidden md:block">
              <span className="text-5xl font-bold block mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-500">Years of Excellence</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">Quality Meets Style</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located at NT Rd, North Lakhimpur, we have grown from a small boutique to a premier family fashion destination. Our curated collections for Men, Women, and Kids are handpicked to ensure the highest standards of fabric and design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We take pride in our local roots in Assam and strive to provide a shopping experience that rivals top international brands, combined with the warmth of local hospitality.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-amber-600 font-bold text-2xl mb-2">4.6 ⭐</h4>
                <p className="text-xs uppercase tracking-widest font-bold">Google Rating</p>
              </div>
              <div>
                <h4 className="text-amber-600 font-bold text-2xl mb-2">5000+</h4>
                <p className="text-xs uppercase tracking-widest font-bold">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-y border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Trust</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We build lasting relationships with our customers through transparency and quality assurance.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Community</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Proudly serving the North Lakhimpur community and contributing to local growth.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Passion</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Our love for fashion drives us to constantly update our collections with the latest trends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
