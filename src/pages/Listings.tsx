
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';

const Listings = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>
        
        {/* Category Filter */}
        <div className="mb-6">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {/* Listing Count & Filters */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            {selectedCategory === 'all' 
              ? 'All stays' 
              : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} stays`}
          </h1>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-200 rounded-xl p-2 text-sm">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>
        
        {/* Listings */}
        <FeaturedListings category={selectedCategory} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;
