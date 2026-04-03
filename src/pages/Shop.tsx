import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Men', 'Women', 'Kids'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (currentCategory !== 'All') {
      result = result.filter(p => p.category === currentCategory);
    }

    switch (currentSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew ? -1 : 1));
        break;
      default:
        result.sort((a, b) => (a.isFeatured ? -1 : 1));
    }

    return result;
  }, [currentCategory, currentSort]);

  const handleCategoryChange = (cat: string) => {
    setSearchParams({ category: cat, sort: currentSort });
    setIsFilterOpen(false);
  };

  const handleSortChange = (sort: string) => {
    setSearchParams({ category: currentCategory, sort });
  };

  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="Shop" 
        description="Browse our premium collection of Men's, Women's, and Kids' wear at Lifestyle – Family Store North Lakhimpur."
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-4">Our Collection</h1>
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-black font-bold">Shop</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-y border-gray-100 py-6">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              <Filter size={16} /> Filter
            </button>
            <div className="hidden md:flex items-center gap-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors",
                    currentCategory === cat ? "text-amber-600" : "text-gray-400 hover:text-black"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 uppercase tracking-widest">{filteredProducts.length} Products</span>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-gray-400" />
              <select 
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="text-xs font-bold uppercase tracking-widest bg-transparent outline-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-500 uppercase tracking-widest">No products found in this category.</p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="mt-4 text-amber-600 font-bold uppercase tracking-widest text-xs border-b border-amber-600"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-[70]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white z-[80] p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-xl font-bold uppercase tracking-widest">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Categories</h4>
                <div className="flex flex-col gap-4">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={cn(
                        "text-sm font-medium text-left transition-colors",
                        currentCategory === cat ? "text-amber-600" : "text-black hover:text-amber-600"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
