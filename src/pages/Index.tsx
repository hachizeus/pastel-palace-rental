
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-airbnb-beige to-white">
          <div className="container mx-auto px-4 text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-airbnb-dark">
              Find your perfect stay, anywhere
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover unique homes, experiences, and places around the world that feel just right.
            </p>
            
            {/* Search Bar */}
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="container mx-auto px-4 py-6">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>
        
        {/* Featured Listings */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === 'all' 
              ? 'Featured places to stay' 
              : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} places to stay`}
          </h2>
          <FeaturedListings category={selectedCategory} />
        </section>
        
        {/* CTA Section */}
        <section className="bg-airbnb-blue/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Host</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Earn extra income and unlock new opportunities by sharing your space.
            </p>
            <button className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white px-8 py-3 rounded-xl font-medium btn-hover-scale">
              Learn More
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
