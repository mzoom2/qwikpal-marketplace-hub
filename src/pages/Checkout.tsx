
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useStore } from '@/context/StoreContext';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, DollarSign, Bitcoin } from 'lucide-react';
import { StoreProvider } from '@/context/StoreContext';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const paymentMethods = [
  {
    id: 'wallet',
    name: 'QwikPal Wallet',
    icon: Wallet,
    description: 'Pay using your QwikPal wallet balance'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: CreditCard,
    description: 'Pay securely using your card (Visa, Mastercard, etc.)'
  },
  {
    id: 'naira',
    name: 'Naira',
    icon: DollarSign,
    description: 'Pay using Nigerian Naira'
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    icon: Bitcoin,
    description: 'Pay using Bitcoin, Ethereum, or other cryptocurrencies'
  }
];

const Checkout: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('wallet');
  const { cartItems, cartTotal, tax, serviceCharge, orderTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = () => {
    // Here you would typically handle payment processing
    // For now, we'll just show a success message and clear the cart
    
    toast({
      title: "Order placed successfully!",
      description: "Your payment was processed and your order has been placed.",
    });
    
    clearCart();
    navigate('/my-orders');
  };
  
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-8">
          <div className="qwikpal-container">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="ml-3">
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (5%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Fee (2%)</span>
                        <span>${serviceCharge.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Total</span>
                        <span className="text-qwikpal-blue">${orderTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    
                    <RadioGroup 
                      value={selectedPayment} 
                      onValueChange={setSelectedPayment}
                      className="space-y-4"
                    >
                      {paymentMethods.map(method => (
                        <div
                          key={method.id}
                          className={`flex items-center border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedPayment === method.id ? 'border-qwikpal-blue bg-qwikpal-blue/5' : 'border-gray-200'
                          }`}
                        >
                          <RadioGroupItem value={method.id} id={method.id} className="mr-4" />
                          <Label 
                            htmlFor={method.id} 
                            className="flex items-center cursor-pointer flex-1"
                          >
                            <method.icon className="mr-3 text-gray-600" size={20} />
                            <div>
                              <p className="font-medium">{method.name}</p>
                              <p className="text-sm text-gray-500">{method.description}</p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    {/* Payment details field would go here based on selected payment method */}
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                    
                    <div className="space-y-2 border-b pb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
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
                    
                    <div className="flex justify-between py-4 border-b">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-qwikpal-blue">${orderTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-qwikpal-blue hover:bg-qwikpal-blue/90"
                        size="lg"
                      >
                        Place Order
                      </Button>
                      
                      <Link to="/cart">
                        <Button variant="outline" className="w-full">
                          Back to Cart
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="text-center text-sm text-gray-500">
                    <p>By placing your order, you agree to QwikPal's terms and conditions.</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Checkout;
