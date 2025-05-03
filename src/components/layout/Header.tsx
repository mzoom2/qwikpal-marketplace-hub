
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="qwikpal-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-qwikpal-teal">
              <span>Qwik</span>
              <span className="text-qwikpal-blue">Pal</span>
            </div>
          </Link>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/2 relative">
            <Input
              type="text"
              placeholder="Search for products, services, or freelancers..."
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="hidden md:flex">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-qwikpal-teal hover:bg-qwikpal-teal/90 hidden md:flex">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
