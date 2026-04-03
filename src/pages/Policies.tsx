import React from 'react';
import { SEO } from '../components/SEO';

export const Policies: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <SEO title="Policies" description="Shipping, Return, and Privacy policies of Lifestyle – Family Store." />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter uppercase mb-12 text-center">Store Policies</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Shipping Policy</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p>We offer shipping across Assam and Pan India. Orders are typically processed within 24-48 hours.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Local Delivery (North Lakhimpur): 1-2 business days.</li>
                <li>Assam (Major Cities): 3-5 business days.</li>
                <li>Rest of India: 5-8 business days.</li>
                <li>Free shipping on orders above ₹1,999.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Return & Exchange</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p>We want you to be completely satisfied with your purchase. If you're not, we offer a 7-day exchange policy.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Items must be unworn, unwashed, and have all original tags attached.</li>
                <li>Exchanges can be made at our physical store in North Lakhimpur or via courier.</li>
                <li>In case of manufacturing defects, we offer a full refund or replacement.</li>
                <li>Innerwear and accessories are not eligible for return due to hygiene reasons.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Privacy Policy</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p>Your privacy is important to us. We only collect information necessary to process your orders and improve your shopping experience.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We do not share your personal data with third parties for marketing purposes.</li>
                <li>All payment transactions are processed through secure, encrypted gateways.</li>
                <li>You can opt-out of our newsletter at any time.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
