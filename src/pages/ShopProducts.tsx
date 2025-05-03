
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal } from 'lucide-react';
import { CheckboxGroup } from '@/components/ui/checkbox';

// Mock data for products
const mockProducts = [
  {
    id: '101',
    title: 'Instagram Account - 5K Followers',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    rating: 4.5,
    seller: 'Digital Assets Hub',
    category: 'Social Media'
  },
  {
    id: '102',
    title: 'E-commerce Website Template',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    rating: 4.2,
    seller: 'Digital Assets Hub',
    category: 'Templates'
  },
  {
    id: '103',
    title: 'Logo Design Package',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea',
    rating: 4.8,
    seller: 'Digital Assets Hub',
    category: 'Design'
  },
  {
    id: '104',
    title: 'SEO Audit & Strategy',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
    rating: 4.6,
    seller: 'Digital Assets Hub',
    category: 'Services'
  },
  {
    id: '105',
    title: 'Content Writing Package',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    rating: 4.3,
    seller: 'Digital Assets Hub',
    category: 'Content'
  },
  {
    id: '106',
    title: 'Mobile App UI Kit',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    rating: 4.7,
    seller: 'Digital Assets Hub',
    category: 'UI/UX'
  },
];

const ShopProducts = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products by search query and price range
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Products by Digital Assets Hub</h1>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal size={16} />
              Filters
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Filters</h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <Slider
                  defaultValue={[0, 200]}
                  max={200}
                  step={5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-social" className="mr-2" />
                    <label htmlFor="cat-social">Social Media</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-templates" className="mr-2" />
                    <label htmlFor="cat-templates">Templates</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-design" className="mr-2" />
                    <label htmlFor="cat-design">Design</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-services" className="mr-2" />
                    <label htmlFor="cat-services">Services</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Ratings</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-4" className="mr-2" />
                    <label htmlFor="rating-4">4★ & above</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-3" className="mr-2" />
                    <label htmlFor="rating-3">3★ & above</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
                seller={product.seller}
                category={product.category}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange([0, 200]);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopProducts;
