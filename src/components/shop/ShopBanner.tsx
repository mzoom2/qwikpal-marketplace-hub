
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Star, MessageSquare, Store } from 'lucide-react';

interface ShopBannerProps {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  description: string;
}

const ShopBanner: React.FC<ShopBannerProps> = ({
  id,
  name,
  logo,
  rating,
  reviewCount,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={logo} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        
        <div className="flex items-center mt-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviewCount} reviews)</span>
        </div>
        
        <p className="text-gray-600 text-center mb-6 max-w-2xl">{description}</p>
        
        <div className="flex space-x-4">
          <Link to={`/shops/${id}/products`}>
            <Button className="bg-qwikpal-blue hover:bg-qwikpal-blue/90">
              <Store size={16} className="mr-2" /> View Items
            </Button>
          </Link>
          <Link to={`/messages/shop/${id}`}>
            <Button variant="outline" className="border-qwikpal-teal text-qwikpal-teal hover:bg-qwikpal-teal/10">
              <MessageSquare size={16} className="mr-2" /> Message
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
