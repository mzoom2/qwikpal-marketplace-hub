
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  seller: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
  seller,
  category
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-qwikpal-teal text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      <CardContent className="py-3 flex-grow">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-lg line-clamp-2 mb-1 hover:text-qwikpal-teal transition-colors">
            {title}
          </h3>
        </Link>
        <Link to={`/sellers/${seller}`} className="text-sm text-gray-500 hover:underline">
          by {seller}
        </Link>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-3 flex items-center justify-between">
        <div className="font-bold text-lg">${price.toFixed(2)}</div>
        <Button size="sm" className="bg-qwikpal-teal hover:bg-qwikpal-teal/90">
          <ShoppingCart size={16} className="mr-1" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
