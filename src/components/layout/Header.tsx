
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      <Link to="/category/social-media" className="block p-2 hover:bg-gray-100 rounded">
                        Social Media Accounts
                      </Link>
                      <Link to="/category/software" className="block p-2 hover:bg-gray-100 rounded">
                        Software
                      </Link>
                      <Link to="/category/digital-services" className="block p-2 hover:bg-gray-100 rounded">
                        Digital Services
                      </Link>
                      <Link to="/category/ai-tools" className="block p-2 hover:bg-gray-100 rounded">
                        AI Tools
                      </Link>
                      <Link to="/category/gift-cards" className="block p-2 hover:bg-gray-100 rounded">
                        Gift Cards
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/product/create" className="block p-2 hover:text-qwikpal-teal">
                    Sell
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <Link to="/my-orders">
              <Button variant="ghost" size="sm">
                My Orders
              </Button>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <User className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-2 w-[200px]">
                      <Link to="/login" className="block p-2 hover:bg-gray-100 rounded">Sign In</Link>
                      <Link to="/register" className="block p-2 hover:bg-gray-100 rounded">Sign Up</Link>
                      <Link to="/profile" className="block p-2 hover:bg-gray-100 rounded">My Profile</Link>
                      <Link to="/admin" className="block p-2 hover:bg-gray-100 rounded">Admin Dashboard</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-2">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Link to="/" className="block py-2 hover:text-qwikpal-teal">Home</Link>
              <Link to="/category/social-media" className="block py-2 hover:text-qwikpal-teal">Social Media Accounts</Link>
              <Link to="/category/software" className="block py-2 hover:text-qwikpal-teal">Software</Link>
              <Link to="/category/digital-services" className="block py-2 hover:text-qwikpal-teal">Digital Services</Link>
              <Link to="/product/create" className="block py-2 hover:text-qwikpal-teal">Sell a Product</Link>
              <Link to="/my-orders" className="block py-2 hover:text-qwikpal-teal">My Orders</Link>
              <Link to="/messages" className="block py-2 hover:text-qwikpal-teal">Messages</Link>
              <Link to="/profile" className="block py-2 hover:text-qwikpal-teal">My Profile</Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full mb-2">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-qwikpal-teal hover:bg-qwikpal-teal/90">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
