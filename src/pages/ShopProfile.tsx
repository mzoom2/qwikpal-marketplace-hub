
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShopBanner from '@/components/shop/ShopBanner';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mock data for the shop profile
const mockShopData = {
  id: '1',
  name: 'Digital Assets Hub',
  logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  rating: 4.5,
  reviewCount: 124,
  description: 'Premium digital assets marketplace selling high-quality social media accounts, software solutions, and digital services. All products are carefully verified and come with full support.',
  freelancerId: '101',
  freelancerName: 'John Smith',
  freelancerSkill: 'Digital Marketing',
  announcement: 'Special offer this week! Get 20% off on all Instagram accounts with over 5K followers. Use code INSTA20 at checkout.',
  products: [
    {
      id: '201',
      title: 'Instagram Account - 10K Followers',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      price: 199.99,
      rating: 4.7,
    },
    {
      id: '202',
      title: 'SEO Tools Bundle',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      price: 49.99,
      rating: 4.2,
    },
    {
      id: '203',
      title: 'WordPress Premium Theme',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      price: 59.99,
      rating: 4.5,
    },
    {
      id: '204',
      title: 'Social Media Marketing Course',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      price: 89.99,
      rating: 4.8,
    }
  ]
};

const ShopProfile: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shop = mockShopData; // In a real app, you'd fetch the shop data based on shopId
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <ShopBanner 
            id={shop.id}
            name={shop.name}
            logo={shop.logo}
            rating={shop.rating}
            reviewCount={shop.reviewCount}
            description={shop.description}
            freelancerId={shop.freelancerId}
            freelancerName={shop.freelancerName}
            freelancerSkill={shop.freelancerSkill}
          />
          
          {shop.announcement && (
            <div className="bg-qwikpal-blue/10 border border-qwikpal-blue/20 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-qwikpal-blue mb-1">Shop Announcement</h3>
              <p className="text-gray-700">{shop.announcement}</p>
            </div>
          )}
          
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Latest Products</h2>
              <Link to={`/shops/${shop.id}/products`}>
                <Button variant="ghost" className="text-qwikpal-teal hover:text-qwikpal-teal/90">
                  View All <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {shop.products.map(product => (
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopProfile;
