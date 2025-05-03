
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  count: number;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name, count, link }) => {
  return (
    <a 
      href={link}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-qwikpal-teal/20 transition-all duration-200"
    >
      <div className="flex items-center">
        <div className="w-12 h-12 bg-qwikpal-light rounded-lg flex items-center justify-center text-qwikpal-teal mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{count} listings</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </a>
  );
};

const CategorySection = () => {
  const categories = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>,
      name: "Social Media",
      count: 248,
      link: "/category/social-media",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
      name: "Software",
      count: 195,
      link: "/category/software",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>,
      name: "AI Tools",
      count: 317,
      link: "/category/ai-tools",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><line x1="3" x2="21" y1="10" y2="10"></line></svg>,
      name: "Gift Cards",
      count: 124,
      link: "/category/gift-cards",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>,
      name: "Digital Services",
      count: 243,
      link: "/category/digital-services",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>,
      name: "Educational",
      count: 182,
      link: "/category/educational",
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="qwikpal-container">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Browse Categories</h2>
          <p className="text-gray-600">Find digital products and services across popular categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              icon={category.icon}
              name={category.name}
              count={category.count}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
