
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartButton from '@/components/cart/CartButton';
import { StoreProvider } from '@/context/StoreContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for the product
const mockProductData = {
  id: '201',
  title: 'Instagram Account - 10K Followers',
  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  price: 199.99,
  description: 'Premium Instagram account with 10,000+ organic followers, mainly interested in fashion and lifestyle. The account has high engagement rates and receives approximately 1,000 likes per post. This account is perfect for businesses looking to establish a strong presence in the fashion and lifestyle niche.',
  previewLink: 'https://example.com/preview',
  deliveryType: 'loginDetails',
  deliveryDetails: 'You will receive login credentials for the Instagram account, along with a detailed guide on how to change the email and password for security purposes.',
  rating: 4.7,
  reviewCount: 24,
  shop: {
    id: '1',
    name: 'Digital Assets Hub',
    logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  reviews: [
    {
      id: '1',
      user: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      rating: 5,
      date: '2023-05-15',
      comment: 'Amazing account! Followers were active and engaged. The transfer process was smooth and the seller was very helpful.'
    },
    {
      id: '2',
      user: 'Samantha Lee',
      avatar: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      rating: 4,
      date: '2023-04-22',
      comment: "Good account with good engagement. The only reason I'm giving 4 stars is because the audience was slightly different than what I expected, but still valuable."
    },
    {
      id: '3',
      user: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      rating: 5,
      date: '2023-03-10',
      comment: 'Perfect! The account was exactly as described and the transfer was seamless. I started posting content immediately and the engagement has been great.'
    }
  ]
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = mockProductData; // In a real app, you'd fetch the product data based on productId
  
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col pb-20">
        <Header />
        
        <main className="flex-grow py-8">
          <div className="qwikpal-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                {product.previewLink && (
                  <a 
                    href={product.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute top-4 left-4 bg-qwikpal-blue text-white py-2 px-4 rounded-md flex items-center hover:bg-qwikpal-blue/90 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" /> Preview
                  </a>
                )}
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Link to={`/shops/${product.shop.id}`} className="flex items-center hover:underline">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={product.shop.logo} alt={product.shop.name} />
                      <AvatarFallback>{product.shop.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{product.shop.name}</span>
                  </Link>
                </div>
                
                <h1 className="text-3xl font-bold">{product.title}</h1>
                
                <div className="flex items-center mt-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviewCount} reviews)</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-qwikpal-blue">${product.price}</span>
                </div>
                
                <Badge className="bg-green-500 mb-4">In Stock</Badge>
                
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Description</h2>
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-2">Delivery Details</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Badge className="mb-2">{product.deliveryType === 'loginDetails' ? 'Login Details' : product.deliveryType}</Badge>
                    <p className="text-gray-700">{product.deliveryDetails}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Tabs defaultValue="reviews">
                <TabsList className="mb-6">
                  <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
                  <TabsTrigger value="details">Additional Details</TabsTrigger>
                  <TabsTrigger value="seller">About Seller</TabsTrigger>
                </TabsList>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {product.reviews.map(review => (
                      <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-start">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={review.avatar} alt={review.user} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium">{review.user}</span>
                              <span className="text-gray-400 text-sm ml-2">• {review.date}</span>
                            </div>
                            <div className="flex mt-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="details">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-4">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Category:</span>
                        <span className="font-medium ml-2">Social Media Accounts</span>
                      </div>
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium ml-2">Instagram</span>
                      </div>
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Followers:</span>
                        <span className="font-medium ml-2">10,000+</span>
                      </div>
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Engagement Rate:</span>
                        <span className="font-medium ml-2">3.2%</span>
                      </div>
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Account Age:</span>
                        <span className="font-medium ml-2">2+ years</span>
                      </div>
                      <div className="border-b pb-2">
                        <span className="text-gray-500">Primary Niche:</span>
                        <span className="font-medium ml-2">Fashion & Lifestyle</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="seller">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 mr-4">
                        <AvatarImage src={product.shop.logo} alt={product.shop.name} />
                        <AvatarFallback>{product.shop.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{product.shop.name}</h3>
                        <p className="text-gray-500">Member since January 2022</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm ml-1">4.9 (124 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Digital Assets Hub specializes in high-quality digital products including social media accounts, software solutions, and digital services. All products come with full support and guidance.
                    </p>
                    <Link to={`/shops/${product.shop.id}`}>
                      <Button variant="outline">Visit Shop</Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        
        <CartButton 
          productId={product.id}
          productTitle={product.title}
          productPrice={product.price}
          productImage={product.image}
        />
        
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default ProductDetail;
