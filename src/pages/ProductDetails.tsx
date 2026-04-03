import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, MessageCircle, Truck, RotateCcw, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-amber-600 font-bold uppercase tracking-widest">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    const message = encodeURIComponent(`Hi Lifestyle Store, I want to order:\nProduct: ${product.name}\nSize: ${selectedSize}\nQuantity: ${quantity}\nPrice: ₹${product.price}`);
    window.open(`https://wa.me/917002970905?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24">
      <SEO 
        title={product.name} 
        description={product.description}
        image={product.images[0]}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-12">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-black">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-black font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setActiveImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-colors",
                    activeImage === idx ? "border-amber-600" : "border-transparent"
                  )}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">{product.category}</span>
                {product.isNew && <span className="bg-black text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1">New Arrival</span>}
              </div>
              <h1 className="text-4xl font-bold tracking-tighter mb-4 uppercase">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">({product.reviews} Reviews)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1">Save {discount}%</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest">Select Size</h4>
                <button className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-200">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center text-sm font-bold border transition-all",
                      selectedSize === size ? "bg-black text-white border-black" : "bg-white text-black border-gray-200 hover:border-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Quantity</h4>
              <div className="flex items-center w-32 border border-gray-200">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="flex-grow text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-black text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "w-14 h-14 flex items-center justify-center border transition-all",
                  isInWishlist(product.id) ? "bg-amber-600 border-amber-600 text-white" : "bg-white border-gray-200 text-black hover:border-black"
                )}
              >
                <Heart size={24} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all mb-12"
            >
              <MessageCircle size={20} /> Order via WhatsApp
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">7-Day Return</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold tracking-tighter mb-12 uppercase">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
