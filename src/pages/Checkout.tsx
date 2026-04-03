import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/SEO';
import { ShieldCheck, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'COD'>('UPI');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pinCode: ''
  });

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Your Cart is Empty</h2>
        <Link to="/shop" className="text-amber-600 font-bold uppercase tracking-widest">Back to Shop</Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setIsOrdered(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isOrdered) {
    return (
      <div className="pt-40 pb-40 text-center container mx-auto px-4">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter uppercase mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Thank you for shopping with Lifestyle – Family Store. Your order has been placed successfully and we'll contact you shortly for confirmation.
        </p>
        <div className="bg-gray-50 p-8 rounded-sm max-w-md mx-auto mb-12 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Order Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Number:</span>
              <span className="font-bold">#LS-{Math.floor(Math.random() * 100000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method:</span>
              <span className="font-bold">{paymentMethod}</span>
            </div>
          </div>
        </div>
        <Link to="/" className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-all">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <SEO title="Checkout" description="Complete your order at Lifestyle – Family Store." />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tighter uppercase mb-12">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Shipping Info */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <input 
                    type="tel" required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Address</label>
                  <input 
                    type="text" required
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">City</label>
                  <input 
                    type="text" required
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">PIN Code</label>
                  <input 
                    type="text" required
                    value={formData.pinCode}
                    onChange={e => setFormData({...formData, pinCode: e.target.value})}
                    className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-6 border flex flex-col items-center gap-4 transition-all ${paymentMethod === 'UPI' ? 'border-amber-600 bg-amber-50' : 'border-gray-100 hover:border-black'}`}
                >
                  <CreditCard size={24} className={paymentMethod === 'UPI' ? 'text-amber-600' : 'text-gray-400'} />
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest">UPI Payment</p>
                    <p className="text-[10px] text-gray-500 mt-1">Pay via GPay, PhonePe, Paytm</p>
                  </div>
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-6 border flex flex-col items-center gap-4 transition-all ${paymentMethod === 'COD' ? 'border-amber-600 bg-amber-50' : 'border-gray-100 hover:border-black'}`}
                >
                  <Truck size={24} className={paymentMethod === 'COD' ? 'text-amber-600' : 'text-gray-400'} />
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest">Cash on Delivery</p>
                    <p className="text-[10px] text-gray-500 mt-1">Pay when you receive</p>
                  </div>
                </button>
              </div>

              {paymentMethod === 'UPI' && (
                <div className="mt-8 p-8 bg-gray-50 border border-gray-100 text-center">
                  <div className="w-40 h-40 bg-white mx-auto mb-4 flex items-center justify-center border border-gray-200">
                    {/* Mock QR Code */}
                    <div className="w-32 h-32 bg-black/5 flex items-center justify-center text-[10px] text-gray-400 uppercase tracking-widest text-center px-4">
                      Scan to Pay<br />lifestyle@upi
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest">UPI ID: lifestyle@upi</p>
                  <p className="text-[10px] text-gray-500 mt-2">Please complete the payment and we'll verify it shortly.</p>
                </div>
              )}
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-24">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Order Summary</h3>
              <div className="space-y-4 mb-8">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between text-xs">
                    <span className="text-gray-500 truncate max-w-[150px]">{item.name} x {item.quantity}</span>
                    <span className="font-bold">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold uppercase tracking-widest">Total</span>
                  <span className="text-xl font-bold">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
              >
                Place Order
              </button>
              <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure Order Processing</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
