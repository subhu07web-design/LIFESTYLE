import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">New</span>
          )}
          {discount > 0 && (
            <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">-{discount}%</span>
          )}
        </div>

        {/* Image */}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          )}
        </Link>

        {/* Actions */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 translate-y-0 md:translate-y-12 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <button 
            onClick={() => toggleWishlist(product)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors",
              isInWishlist(product.id) ? "bg-amber-600 text-white" : "bg-white text-black hover:bg-black hover:text-white"
            )}
          >
            <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={() => addToCart(product, product.sizes[0], 1)}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block text-sm font-medium hover:text-amber-600 transition-colors mb-2">
          {product.name}
        </Link>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-bold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
