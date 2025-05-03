
import React from 'react';
import FreelancerCard from '@/components/freelancer/FreelancerCard';

const TopFreelancers = () => {
  // Mock freelancer data
  const freelancers = [
    {
      id: "1",
      name: "Jessica Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      skills: ["Logo Design", "Branding", "Illustration"],
      rating: 5.0,
      mainSkill: "Graphic Designer"
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=8",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 4.9,
      mainSkill: "Web Developer"
    },
    {
      id: "3",
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=5",
      skills: ["SEO", "Content Marketing", "Social Media"],
      rating: 4.8,
      mainSkill: "Digital Marketer"
    },
    {
      id: "4",
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=4",
      skills: ["After Effects", "Premiere Pro", "Animation"],
      rating: 4.9,
      mainSkill: "Video Editor"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="qwikpal-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Top Freelancers</h2>
            <p className="text-gray-600">Skilled professionals ready to help with your projects</p>
          </div>
          <a href="/freelancers" className="text-qwikpal-teal font-medium hover:underline">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {freelancers.map((freelancer) => (
            <FreelancerCard
              key={freelancer.id}
              id={freelancer.id}
              name={freelancer.name}
              avatar={freelancer.avatar}
              skills={freelancer.skills}
              rating={freelancer.rating}
              mainSkill={freelancer.mainSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;
