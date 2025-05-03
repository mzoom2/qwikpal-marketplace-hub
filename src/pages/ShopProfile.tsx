
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShopBanner from '@/components/shop/ShopBanner';
import ProductCard from '@/components/product/ProductCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star } from 'lucide-react';

// Mock data for shop
const mockShopData = {
  id: '1',
  name: 'Digital Assets Hub',
  logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  coverImage: 'https://images.unsplash.com/photo-1557821552-17105176677c',
  description: 'We specialize in high-quality digital products including social media accounts, software solutions, and digital services. All products come with full support and guidance.',
  rating: 4.9,
  reviewCount: 124,
  memberSince: 'January 2022',
  verification: 'verified',
  freelancer: {
    id: '101',
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    skill: 'Web Developer',
  },
  announcement: 'Summer Sale! Get 20% off all digital products until the end of the month. Use code SUMMER20 at checkout.',
  products: [
    {
      id: '201',
      title: 'Instagram Account - 10K Followers',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
      rating: 4.7,
      seller: 'Digital Assets Hub',
      category: 'Social Media'
    },
    {
      id: '202',
      title: 'E-commerce Website Template',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      rating: 4.5,
      seller: 'Digital Assets Hub',
      category: 'Templates'
    },
    {
      id: '203',
      title: 'SEO Marketing Package',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
      rating: 4.8,
      seller: 'Digital Assets Hub',
      category: 'Services'
    },
  ]
};

const ShopProfile = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shop = mockShopData; // In a real app, fetch shop data using shopId
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <ShopBanner coverImage={shop.coverImage} />
        
        <div className="qwikpal-container py-8">
          {/* Shop Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <Avatar className="h-24 w-24 mb-4 border-4 border-white shadow-md">
              <AvatarImage src={shop.logo} alt={shop.name} />
              <AvatarFallback>{shop.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <h1 className="text-2xl font-bold mb-2">{shop.name}</h1>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm">{shop.rating} ({shop.reviewCount} reviews)</span>
              </div>
              {shop.verification === 'verified' && (
                <Badge className="ml-2 bg-green-500">Verified Seller</Badge>
              )}
            </div>
            
            <p className="text-gray-600 max-w-2xl mb-4">{shop.description}</p>
            
            <div className="flex gap-3">
              <Link to={`/shops/${shop.id}/products`}>
                <Button>View All Products</Button>
              </Link>
              <Link to="/messages">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Message Seller
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Freelancer Banner */}
          {shop.freelancer && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={shop.freelancer.avatar} alt={shop.freelancer.name} />
                  <AvatarFallback>{shop.freelancer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-gray-500">Hire {shop.freelancer.skill}</p>
                  <h3 className="font-semibold">{shop.freelancer.name}</h3>
                </div>
              </div>
              <Link to={`/freelancers/${shop.freelancer.id}`}>
                <Button variant="link">View Freelancer Profile →</Button>
              </Link>
            </div>
          )}
          
          {/* Shop Announcement */}
          {shop.announcement && (
            <div className="bg-qwikpal-blue/10 border-l-4 border-qwikpal-blue p-4 rounded mb-8">
              <h3 className="font-semibold mb-1">Shop Announcement</h3>
              <p>{shop.announcement}</p>
            </div>
          )}
          
          {/* Latest Products */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Latest Products</h2>
              <Link to={`/shops/${shop.id}/products`}>
                <Button variant="link">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shop.products.map((product) => (
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopProfile;
