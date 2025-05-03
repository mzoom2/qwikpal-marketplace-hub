
import React from 'react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/context/StoreContext';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CartButtonProps {
  productId?: string;
  productTitle?: string;
  productPrice?: number;
  productImage?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ 
  productId, 
  productTitle, 
  productPrice,
  productImage
}) => {
  const { addToCart, cartCount, orderTotal } = useStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (productId && productTitle && productPrice) {
      addToCart({
        id: productId,
        title: productTitle,
        price: productPrice,
        image: productImage || ''
      });
      
      toast({
        title: "Added to cart",
        description: `${productTitle} has been added to your cart.`,
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-3">
      <div className="qwikpal-container flex items-center justify-between">
        {productId ? (
          <Button 
            onClick={handleAddToCart}
            className="bg-qwikpal-blue hover:bg-qwikpal-blue/90 px-6"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="text-sm text-gray-500">
            {cartCount > 0 ? `${cartCount} item${cartCount !== 1 ? 's' : ''} in cart` : 'Your cart is empty'}
          </div>
        )}

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm text-gray-500">Total</p>
            <p className="font-bold">${orderTotal.toFixed(2)}</p>
          </div>
          
          <Link to="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-qwikpal-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
