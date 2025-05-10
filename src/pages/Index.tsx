
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';
import { useCarouselAutoScroll } from '@/hooks/useCarouselAutoScroll';
import type { CarouselApi } from "@/components/ui/carousel";

// Interior one bedroom design images
const bedroomDesigns = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170",
    description: "Modern Minimalist Bedroom"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170",
    description: "Cozy Scandinavian Style"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1171",
    description: "Contemporary Loft Bedroom"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170",
    description: "Elegant Urban Retreat"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174",
    description: "Industrial Chic Bedroom"
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const activeSlide = useCarouselAutoScroll(bedroomDesigns.length);
  
  // Effect to update the carousel when activeSlide changes
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeSlide);
    }
  }, [activeSlide, carouselApi]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Auto-Scrolling Carousel */}
        <section className="relative py-8 md:py-16 bg-gradient-to-b from-airbnb-beige to-white">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-airbnb-dark text-center">
              Interior One-Bedroom Designs
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <Carousel 
                opts={{ 
                  loop: true,
                  align: "center",
                }}
                setApi={setCarouselApi}
                className="w-full mb-8"
              >
                <CarouselContent>
                  {bedroomDesigns.map((design, index) => (
                    <CarouselItem key={design.id}>
                      <div className="p-1">
                        <Card className="overflow-hidden rounded-2xl shadow-custom">
                          <div className="aspect-video relative">
                            <img 
                              src={design.imageUrl} 
                              alt={design.description}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <p className="text-white text-lg font-medium">{design.description}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80" />
                <CarouselNext className="right-2 bg-white/80" />
              </Carousel>
            </div>
            
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
