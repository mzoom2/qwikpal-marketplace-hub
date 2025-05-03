
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductListingForm from '@/components/forms/ProductListingForm';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const ProductListingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/"><Home size={16} /></Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/seller-dashboard">Seller Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink isCurrentPage>List a New Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-6">List a New Product</h1>
          <ProductListingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
