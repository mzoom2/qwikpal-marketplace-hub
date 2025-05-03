
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

// Mock data for the shop products
const mockShopData = {
  id: '1',
  name: 'Digital Assets Hub',
  products: [
    {
      id: '201',
      title: 'Instagram Account - 10K Followers',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      price: 199.99,
      rating: 4.7,
      category: 'Social Media Accounts'
    },
    {
      id: '202',
      title: 'SEO Tools Bundle',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      price: 49.99,
      rating: 4.2,
      category: 'Software'
    },
    {
      id: '203',
      title: 'WordPress Premium Theme',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      price: 59.99,
      rating: 4.5,
      category: 'Software'
    },
    {
      id: '204',
      title: 'Social Media Marketing Course',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      price: 89.99,
      rating: 4.8,
      category: 'Digital Services'
    },
    {
      id: '205',
      title: 'Twitter Account - 5K Followers',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      price: 149.99,
      rating: 4.3,
      category: 'Social Media Accounts'
    },
    {
      id: '206',
      title: 'AI Content Generator',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      price: 79.99,
      rating: 4.6,
      category: 'AI Tools'
    }
  ],
  categories: [
    'All Categories',
    'Social Media Accounts',
    'Software',
    'Digital Services',
    'AI Tools'
  ]
};

const ShopProducts: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shop = mockShopData; // In a real app, you'd fetch the shop data based on shopId

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('default');

  // Filter products based on search query and selected category
  const filteredProducts = shop.products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-to-high':
        return a.price - b.price;
      case 'price-high-to-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <h1 className="text-3xl font-bold mb-2">{shop.name}</h1>
          <p className="text-gray-600 mb-8">Browse all products from this shop</p>
          
          <div className="bg-white shadow-sm rounded-lg p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <Label htmlFor="category" className="text-sm block mb-1">Category</Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {shop.categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="sortBy" className="text-sm block mb-1">Sort By</Label>
                  <Select
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopProducts;
