
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal } from 'lucide-react';

// Mock data for categories
const categoryData = {
  'social-media': {
    title: 'Social Media Accounts',
    description: 'Browse verified social media accounts across various platforms.',
    products: [
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
        title: 'TikTok Account - 10K Followers',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432',
        rating: 4.2,
        seller: 'Social Growth Pro',
        category: 'Social Media'
      },
      {
        id: '103',
        title: 'Twitter Account - 3K Followers',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb',
        rating: 4.1,
        seller: 'Digital Presence',
        category: 'Social Media'
      },
    ]
  },
  'software': {
    title: 'Software & Digital Tools',
    description: 'Find premium software, scripts, and digital tools for your business needs.',
    products: [
      {
        id: '201',
        title: 'E-commerce Website Script',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
        rating: 4.8,
        seller: 'CodeMasters',
        category: 'Software'
      },
      {
        id: '202',
        title: 'Social Media Management Tool',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1560472355-109703aa3edc',
        rating: 4.3,
        seller: 'DigitalToolbox',
        category: 'Software'
      },
      {
        id: '203',
        title: 'Automated Trading Bot',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        rating: 4.5,
        seller: 'FinTech Solutions',
        category: 'Software'
      },
    ]
  },
  'digital-services': {
    title: 'Digital Services',
    description: 'Professional digital services from experienced freelancers.',
    products: [
      {
        id: '301',
        title: 'SEO Audit & Strategy',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
        rating: 4.6,
        seller: 'SEO Experts',
        category: 'Services'
      },
      {
        id: '302',
        title: 'Logo Design Package',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea',
        rating: 4.7,
        seller: 'Creative Designs',
        category: 'Services'
      },
      {
        id: '303',
        title: 'Content Writing Package',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
        rating: 4.4,
        seller: 'Word Crafters',
        category: 'Services'
      },
    ]
  },
  'ai-tools': {
    title: 'AI Tools',
    description: 'Cutting-edge AI tools and solutions for automation and productivity.',
    products: [
      {
        id: '401',
        title: 'AI Image Generator',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
        rating: 4.5,
        seller: 'AI Innovations',
        category: 'AI Tools'
      },
      {
        id: '402',
        title: 'AI Copywriting Assistant',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02',
        rating: 4.2,
        seller: 'Text Wizards',
        category: 'AI Tools'
      },
      {
        id: '403',
        title: 'AI Data Analyzer',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
        rating: 4.6,
        seller: 'DataSense AI',
        category: 'AI Tools'
      },
    ]
  },
  'gift-cards': {
    title: 'Gift Cards',
    description: 'Digital gift cards for popular platforms and services.',
    products: [
      {
        id: '501',
        title: 'Amazon Gift Card - $100',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db',
        rating: 4.9,
        seller: 'Gift Card Hub',
        category: 'Gift Cards'
      },
      {
        id: '502',
        title: 'Netflix Gift Card - $50',
        price: 47.99,
        image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5',
        rating: 4.7,
        seller: 'Digital Gifts',
        category: 'Gift Cards'
      },
      {
        id: '503',
        title: 'Steam Gift Card - $20',
        price: 19.49,
        image: 'https://images.unsplash.com/photo-1609042758812-0ea556455c78',
        rating: 4.8,
        seller: 'Gaming Cards',
        category: 'Gift Cards'
      },
    ]
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showFilters, setShowFilters] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 300]);
  
  const category = categoryId && categoryData[categoryId as keyof typeof categoryData];

  // If category doesn't exist
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="qwikpal-container text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-4">The category you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Filter products
  const filteredProducts = category.products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
          <p className="text-gray-600 mb-6">{category.description}</p>
          
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">{filteredProducts.length} products found</p>
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
              placeholder="Search in this category..."
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
                  defaultValue={[0, 300]}
                  max={300}
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
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Sellers</h3>
                <div className="space-y-2">
                  {Array.from(new Set(category.products.map(p => p.seller))).map(seller => (
                    <div key={seller} className="flex items-center">
                      <input type="checkbox" id={`seller-${seller}`} className="mr-2" />
                      <label htmlFor={`seller-${seller}`}>{seller}</label>
                    </div>
                  ))}
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
                  setPriceRange([0, 300]);
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

export default CategoryPage;
