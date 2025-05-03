
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, MessageSquare, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Mock data for orders
const mockOrders = [
  {
    id: '1001',
    date: '2023-06-15',
    status: 'completed',
    product: {
      id: '201',
      title: 'Instagram Account - 10K Followers',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      price: 199.99
    },
    seller: {
      id: '1',
      name: 'Digital Assets Hub'
    },
    deliveryType: 'loginDetails',
    deliveryData: {
      platformUrl: 'instagram.com',
      username: 'fashion_lifestyle_10k',
      password: '**********'
    }
  },
  {
    id: '1002',
    date: '2023-06-10',
    status: 'completed',
    product: {
      id: '202',
      title: 'SEO Tools Bundle',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      price: 49.99
    },
    seller: {
      id: '1',
      name: 'Digital Assets Hub'
    },
    deliveryType: 'softwareLink',
    deliveryData: {
      downloadLink: 'https://example.com/download/seo-tools-bundle'
    }
  },
  {
    id: '1003',
    date: '2023-05-28',
    status: 'completed',
    product: {
      id: '203',
      title: 'WordPress Premium Theme',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      price: 59.99
    },
    seller: {
      id: '2',
      name: 'Web Solutions Pro'
    },
    deliveryType: 'pdfFile',
    deliveryData: {
      fileUrl: 'https://example.com/files/wordpress-theme-guide.pdf'
    }
  }
];

const MyOrders: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('completed');
  const filteredOrders = mockOrders.filter(order => order.status === selectedTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <h1 className="text-3xl font-bold mb-6">My Orders</h1>
          
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="mb-8"
          >
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="mt-6">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-700">No active orders</h2>
                <p className="text-gray-500 mt-2 mb-6">You don't have any active orders at the moment</p>
                <Link to="/">
                  <Button className="bg-qwikpal-blue hover:bg-qwikpal-blue/90">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-6">
              <div className="space-y-6">
                {filteredOrders.map(order => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <img 
                            src={order.product.image} 
                            alt={order.product.title} 
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="md:w-3/4 md:pl-6">
                          <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <div>
                              <Link to={`/products/${order.product.id}`} className="text-xl font-semibold hover:text-qwikpal-blue">
                                {order.product.title}
                              </Link>
                              <p className="text-gray-500">
                                Order #{order.id} • {order.date}
                              </p>
                              <p className="text-gray-500">
                                Seller: {order.seller.name}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="font-bold">${order.product.price}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold mb-2">Delivery Details</h3>
                            
                            {order.deliveryType === 'loginDetails' && (
                              <div>
                                <p><span className="font-medium">Platform:</span> {order.deliveryData.platformUrl}</p>
                                <p><span className="font-medium">Username:</span> {order.deliveryData.username}</p>
                                <p><span className="font-medium">Password:</span> {order.deliveryData.password}</p>
                              </div>
                            )}
                            
                            {order.deliveryType === 'softwareLink' && (
                              <div>
                                <p><span className="font-medium">Download Link:</span></p>
                                <a 
                                  href={order.deliveryData.downloadLink} 
                                  className="text-qwikpal-blue hover:underline flex items-center" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink size={16} className="mr-1" /> Access Download
                                </a>
                              </div>
                            )}
                            
                            {order.deliveryType === 'pdfFile' && (
                              <div>
                                <p><span className="font-medium">File:</span></p>
                                <a 
                                  href={order.deliveryData.fileUrl} 
                                  className="text-qwikpal-blue hover:underline flex items-center" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <Download size={16} className="mr-1" /> Download File
                                </a>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Link to={`/messages/order/${order.id}`}>
                              <Button variant="outline" size="sm">
                                <MessageSquare size={16} className="mr-1" /> Message Seller
                              </Button>
                            </Link>
                            
                            <Link to={`/review/${order.id}`}>
                              <Button variant="outline" size="sm">
                                <Star size={16} className="mr-1" /> Leave Review
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cancelled" className="mt-6">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-700">No cancelled orders</h2>
                <p className="text-gray-500 mt-2">You don't have any cancelled orders</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyOrders;
