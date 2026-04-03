import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';

export const Wishlist: React.FC = () => {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="pt-40 pb-40 text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-300">
          <Heart size={48} />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-8">Save your favorite items here to shop them later.</p>
        <Link to="/shop" className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-all">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <SEO title="My Wishlist" description="Your favorite items from Lifestyle – Family Store." />
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-bold tracking-tighter uppercase">My Wishlist</h1>
          <span className="text-xs text-gray-400 uppercase tracking-widest">{wishlist.length} Items</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
