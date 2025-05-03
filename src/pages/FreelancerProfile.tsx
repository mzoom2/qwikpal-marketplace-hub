
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FreelancerProfileComponent from '@/components/freelancer/FreelancerProfile';

// Mock data for the freelancer
const mockFreelancerData = {
  id: '101',
  name: 'John Smith',
  avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  mainSkill: 'Digital Marketing',
  skills: ['Social Media Management', 'SEO', 'Content Creation', 'PPC Advertising'],
  bio: 'Digital marketing expert with over 8 years of experience helping businesses grow their online presence. Specialized in social media strategy and search engine optimization.',
  experience: 'I have worked with over 50 clients ranging from small businesses to Fortune 500 companies. My expertise includes social media management, SEO optimization, and running successful PPC campaigns. I consistently deliver results that exceed client expectations.',
  portfolio: 'https://example.com/portfolio',
  rating: 4.8,
  reviewCount: 93,
  shopId: '1',
  pricingPlans: [
    {
      title: 'Short',
      price: 49,
      duration: '3 days',
      description: 'Quick digital marketing consultation and basic strategy.',
      features: [
        'Social media audit',
        'Basic SEO recommendations',
        'One revision',
        '3-day delivery'
      ]
    },
    {
      title: 'Standard',
      price: 149,
      duration: '7 days',
      description: 'Comprehensive digital marketing strategy with implementation plan.',
      features: [
        'Complete digital audit',
        'Content calendar for 1 month',
        'Keyword research',
        'SEO strategy',
        'Two revisions',
        '7-day delivery'
      ]
    },
    {
      title: 'Custom',
      price: 299,
      duration: 'custom',
      description: 'Fully customized digital marketing solutions tailored to your needs.',
      features: [
        'Complete digital strategy',
        '3-month content plan',
        'SEO implementation',
        'PPC campaign setup',
        'Monthly reporting',
        'Unlimited revisions',
        'Custom timeline'
      ]
    }
  ]
};

const FreelancerProfilePage: React.FC = () => {
  const { freelancerId } = useParams<{ freelancerId: string }>();
  const freelancer = mockFreelancerData; // In a real app, you'd fetch the freelancer data based on freelancerId
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <FreelancerProfileComponent
            id={freelancer.id}
            name={freelancer.name}
            avatar={freelancer.avatar}
            mainSkill={freelancer.mainSkill}
            skills={freelancer.skills}
            bio={freelancer.bio}
            experience={freelancer.experience}
            portfolio={freelancer.portfolio}
            rating={freelancer.rating}
            reviewCount={freelancer.reviewCount}
            shopId={freelancer.shopId}
            pricingPlans={freelancer.pricingPlans}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreelancerProfilePage;
