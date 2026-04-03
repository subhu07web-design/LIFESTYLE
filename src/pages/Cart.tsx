import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/SEO';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-40 text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <SEO title="Shopping Cart" description="Review your selected items before checkout." />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tighter uppercase mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <div className="hidden md:grid grid-cols-6 gap-4 border-b border-gray-100 pb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cart.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center border-b border-gray-100 pb-8">
                <div className="md:col-span-3 flex gap-4">
                  <div className="w-24 aspect-[3/4] bg-gray-100 shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link to={`/product/${item.id}`} className="font-bold uppercase text-sm hover:text-amber-600 transition-colors">{item.name}</Link>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Size: {item.selectedSize}</p>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-[10px] uppercase tracking-widest text-red-500 mt-4 flex items-center gap-1 font-bold"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                </div>

                <div className="text-center font-medium">
                  <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Price</span>
                  ₹{item.price.toLocaleString()}
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="text-right font-bold">
                  <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Total</span>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-24">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold uppercase tracking-widest">Total</span>
                  <span className="text-xl font-bold">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <Link 
                to="/checkout" 
                className="w-full bg-black text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Link>
              <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest">Secure Checkout Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
