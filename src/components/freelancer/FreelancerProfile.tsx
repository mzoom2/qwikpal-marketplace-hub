
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MessageSquare, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface PricingPlan {
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
}

interface FreelancerProfileProps {
  id: string;
  name: string;
  avatar: string;
  mainSkill: string;
  skills: string[];
  bio: string;
  experience: string;
  portfolio: string;
  rating: number;
  reviewCount: number;
  shopId?: string;
  pricingPlans: PricingPlan[];
}

const FreelancerProfile: React.FC<FreelancerProfileProps> = ({
  id,
  name,
  avatar,
  mainSkill,
  skills,
  bio,
  experience,
  portfolio,
  rating,
  reviewCount,
  shopId,
  pricingPlans
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        
        <Badge className="bg-qwikpal-blue mt-2 mb-4">{mainSkill}</Badge>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center mb-4">
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
        
        <div className="text-center mb-6 max-w-2xl">
          <p className="text-gray-600">{bio}</p>
        </div>
        
        <div className="w-full mb-8">
          <h3 className="font-semibold text-lg mb-2">Experience & Portfolio</h3>
          <p className="text-gray-700">{experience}</p>
          {portfolio && (
            <p className="mt-2">
              <a href={portfolio} target="_blank" rel="noopener noreferrer" className="text-qwikpal-teal hover:underline">
                View Portfolio →
              </a>
            </p>
          )}
        </div>
        
        <div className="w-full flex flex-wrap gap-4 mb-8">
          {shopId && (
            <Link to={`/shops/${shopId}`} className="flex-1 max-sm:w-full">
              <Button variant="outline" className="w-full">
                <Store size={16} className="mr-2" /> View Shop
              </Button>
            </Link>
          )}
          <Link to={`/messages/freelancer/${id}`} className="flex-1 max-sm:w-full">
            <Button className="w-full bg-qwikpal-blue hover:bg-qwikpal-blue/90">
              <MessageSquare size={16} className="mr-2" /> Send Project Requirements
            </Button>
          </Link>
        </div>
        
        <div className="w-full">
          <h3 className="font-semibold text-xl mb-4">Pricing Plans</h3>
          
          <Tabs defaultValue={pricingPlans[0]?.title.toLowerCase() || "short"} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              {pricingPlans.map(plan => (
                <TabsTrigger key={plan.title} value={plan.title.toLowerCase()}>
                  {plan.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {pricingPlans.map(plan => (
              <TabsContent key={plan.title} value={plan.title.toLowerCase()}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-lg font-semibold">{plan.title} Plan</h3>
                        <div>
                          <span className="text-2xl font-bold text-qwikpal-blue">${plan.price}</span>
                          <span className="text-gray-500 text-sm ml-1">{plan.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-qwikpal-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-qwikpal-blue hover:bg-qwikpal-blue/90">
                      Hire for ${plan.price}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
