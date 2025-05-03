
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TopFreelancers from '@/components/home/TopFreelancers';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Category Section */}
        <CategorySection />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="qwikpal-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How QwikPal Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our marketplace makes buying and selling digital products and services simple, secure, and seamless.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-qwikpal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qwikpal-teal"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discover</h3>
                <p className="text-gray-600 mb-4">
                  Browse thousands of digital products and services from sellers and freelancers worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-qwikpal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qwikpal-teal"><path d="M5 7 3 5l2-2"/><path d="M9 5H1"/><line x1="13" y1="5" x2="21" y2="5"/><line x1="21" y1="19" x2="13" y2="19"/><path d="M5 19h8"/><path d="m19 17-2 2 2 2"/><path d="M9 12a4 4 0 0 0 8 0 4 4 0 0 0-8 0Z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                <p className="text-gray-600 mb-4">
                  Pay securely using your QwikPal wallet with multiple payment options including Naira, USD, or Crypto.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-qwikpal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qwikpal-teal"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Receive your digital products instantly after purchase with our automated delivery system.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Top Freelancers */}
        <TopFreelancers />
        
        {/* Get Started Section */}
        <section className="py-16 bg-gradient-to-br from-qwikpal-blue to-qwikpal-teal text-white">
          <div className="qwikpal-container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join thousands of users buying and selling digital products and services on QwikPal Marketplace.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/register">
                    <Button className="bg-white text-qwikpal-blue hover:bg-gray-100">
                      Create Account
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">
                      Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 space-y-6">
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 mr-4 text-qwikpal-accent" />
                  <div>
                    <h3 className="font-semibold mb-1">Secure & Protected</h3>
                    <p className="text-sm opacity-90">Your transactions are 100% secure with our escrow system</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-6 w-6 mr-4 text-qwikpal-accent" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Marketplace</h3>
                    <p className="text-sm opacity-90">Connect with buyers and sellers from around the world</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 text-qwikpal-accent" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-sm opacity-90">Our dedicated team is here to help whenever you need assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
