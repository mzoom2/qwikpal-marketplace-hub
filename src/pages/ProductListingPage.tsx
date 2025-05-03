
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductListingForm from '@/components/forms/ProductListingForm';

const ProductListingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="qwikpal-container">
          <h1 className="text-3xl font-bold mb-6">List a New Product</h1>
          <ProductListingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
