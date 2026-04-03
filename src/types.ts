export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: 'Men' | 'Women' | 'Kids';
  images: string[];
  sizes: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface WishlistItem extends Product {}
