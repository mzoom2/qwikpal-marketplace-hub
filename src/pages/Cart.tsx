
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useStore } from '@/context/StoreContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import CartButton from '@/components/cart/CartButton';
import { StoreProvider } from '@/context/StoreContext';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, tax, serviceCharge, orderTotal } = useStore();
  
  if (cartItems.length === 0) {
    return (
      <StoreProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow py-12 flex flex-col items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link to="/">
                <Button className="bg-qwikpal-blue hover:bg-qwikpal-blue/90">
                  Browse Products
                </Button>
              </Link>
            </div>
          </main>
          
          <Footer />
        </div>
      </StoreProvider>
    );
  }
  
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col pb-20">
        <Header />
        
        <main className="flex-grow py-8">
          <div className="qwikpal-container">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <h2 className="font-medium">Product</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Price</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Quantity</h2>
                      </div>
                      <div className="col-span-2 text-right">
                        <h2 className="font-medium">Total</h2>
                      </div>
                    </div>
                  </div>
                  
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 border-b">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-16 h-16 object-cover rounded" 
                            />
                            <div className="ml-4">
                              <Link to={`/products/${item.id}`} className="font-medium text-gray-800 hover:text-qwikpal-blue">
                                {item.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-span-2 text-center">
                          <p className="text-gray-800">${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="col-span-2">
                          <div className="flex items-center justify-center">
                            <button 
                              className="bg-gray-100 p-1 rounded-l"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </button>
                            <input 
                              type="text" 
                              value={item.quantity} 
                              className="w-10 text-center border-y border-gray-200 py-1"
                              readOnly
                            />
                            <button 
                              className="bg-gray-100 p-1 rounded-r"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-1 text-right">
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        
                        <div className="col-span-1 flex justify-end">
                          <button 
                            className="text-gray-400 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="font-bold text-xl mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 border-b pb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (5%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee (2%)</span>
                      <span>${serviceCharge.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 mb-6">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-qwikpal-blue">${orderTotal.toFixed(2)}</span>
                  </div>
                  
                  <Link to="/checkout">
                    <Button className="w-full bg-qwikpal-blue hover:bg-qwikpal-blue/90">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <Link to="/" className="block text-center mt-4 text-sm text-gray-600 hover:text-qwikpal-blue">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <CartButton />
        
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Cart;
