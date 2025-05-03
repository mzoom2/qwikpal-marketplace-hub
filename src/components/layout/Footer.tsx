
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-qwikpal-blue text-white mt-12 pt-12 pb-6">
      <div className="qwikpal-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QwikPal</h3>
            <p className="text-sm text-gray-300 mb-4">
              The ultimate marketplace for digital products, services, and freelance talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Main Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Main Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/product/create" className="text-gray-300 hover:text-white">List a Product</Link></li>
              <li><Link to="/shops/1" className="text-gray-300 hover:text-white">Shop Profile</Link></li>
              <li><Link to="/shops/1/products" className="text-gray-300 hover:text-white">Shop Products</Link></li>
              <li><Link to="/freelancers/101" className="text-gray-300 hover:text-white">Freelancer Profile</Link></li>
              <li><Link to="/products/201" className="text-gray-300 hover:text-white">Product Details</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link></li>
              <li><Link to="/checkout" className="text-gray-300 hover:text-white">Checkout</Link></li>
              <li><Link to="/my-orders" className="text-gray-300 hover:text-white">My Orders</Link></li>
              <li><Link to="/admin" className="text-gray-300 hover:text-white">Admin Dashboard</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/help-center" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-white">Tutorials</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white">Community</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/dispute" className="text-gray-300 hover:text-white">Dispute Resolution</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-sm text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} QwikPal Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
