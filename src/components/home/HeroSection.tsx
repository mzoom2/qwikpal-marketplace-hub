
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-qwikpal-blue to-qwikpal-teal text-white pt-16 pb-24 md:pb-16">
      <div className="qwikpal-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Your <span className="text-qwikpal-accent">One-Stop</span> Digital Marketplace
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Buy, sell, or offer services in the world's fastest-growing digital marketplace.
              From social media accounts to software, we've got it all.
            </p>
            
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for digital products, services, or freelancers..."
                  className="w-full pl-10 pr-32 py-6 rounded-md text-black"
                />
                <Button className="absolute right-1 bg-qwikpal-teal hover:bg-qwikpal-teal/90 text-white">
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Social Accounts</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Software</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Freelancers</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Gift Cards</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="QwikPal Marketplace" 
              className="rounded-lg shadow-lg animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
