
import React from 'react';
import ProductCard from '@/components/product/ProductCard';

const FeaturedProducts = () => {
  // Mock product data
  const products = [
    {
      id: "1",
      title: "Instagram Account with 10K Real Followers",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      seller: "SocialMediaHub",
      category: "Social Media"
    },
    {
      id: "2",
      title: "Premium WordPress Theme - E-commerce",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      seller: "WebDesignPro",
      category: "Software"
    },
    {
      id: "3",
      title: "AI Content Generator - Lifetime License",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1663152441691-d4ee13214110?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      seller: "AIToolsLab",
      category: "AI Tools"
    },
    {
      id: "4",
      title: "Netflix Gift Card - $100",
      price: 85.00,
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      seller: "GiftCardDeals",
      category: "Gift Cards"
    },
    {
      id: "5",
      title: "Logo Design Package - Professional Brand",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5.0,
      seller: "CreativeDesigns",
      category: "Services"
    },
    {
      id: "6",
      title: "Twitter Account - 25K Followers in Tech",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      seller: "TechInfluencers",
      category: "Social Media"
    },
    {
      id: "7",
      title: "SEO Mastery Course - Complete Guide",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      seller: "SEOAcademy",
      category: "Educational"
    },
    {
      id: "8",
      title: "Mobile App Template - Flutter & React Native",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      seller: "AppDevStudio",
      category: "Software"
    }
  ];

  return (
    <section className="py-12">
      <div className="qwikpal-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Explore our top-rated digital products</p>
          </div>
          <a href="/products" className="text-qwikpal-teal font-medium hover:underline">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
    </section>
  );
};

export default FeaturedProducts;
