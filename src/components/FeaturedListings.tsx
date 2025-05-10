
import React from 'react';
import ListingCard from './ListingCard';

// Mock data for featured listings with simpler interior images
const featuredListings = [
  {
    id: '1',
    title: 'Luxurious Beach Villa',
    location: 'Malibu, California',
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170',
    price: 349,
    rating: 4.92,
    reviewCount: 56,
    isSuperhost: true,
    category: 'beachfront',
    availability: true
  },
  {
    id: '2',
    title: 'Mountain Retreat with View',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170',
    location: 'Aspen, Colorado',
    price: 289,
    rating: 4.85,
    reviewCount: 42,
    category: 'cabin',
    availability: true
  },
  {
    id: '3',
    title: 'Modern Downtown Apartment',
    location: 'New York City, New York',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170',
    price: 199,
    rating: 4.78,
    reviewCount: 103,
    category: 'design',
    availability: false
  },
  {
    id: '4',
    title: 'Cozy Countryside Cottage',
    location: 'Portland, Oregon',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170',
    price: 149,
    rating: 4.93,
    reviewCount: 87,
    isSuperhost: true,
    category: 'countryside',
    availability: true
  },
  {
    id: '5',
    title: 'Historic City Townhouse',
    location: 'Boston, Massachusetts',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1171',
    price: 219,
    rating: 4.81,
    reviewCount: 69,
    category: 'historic',
    availability: true
  },
  {
    id: '6',
    title: 'Lakefront Cabin with Dock',
    location: 'Lake Tahoe, Nevada',
    imageUrl: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=1174',
    price: 279,
    rating: 4.88,
    reviewCount: 51,
    category: 'cabin',
    availability: false
  },
  {
    id: '7',
    title: 'Tropical Paradise Villa',
    location: 'Miami, Florida',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174',
    price: 329,
    rating: 4.96,
    reviewCount: 78,
    isSuperhost: true,
    category: 'tropical',
    availability: true
  },
  {
    id: '8',
    title: 'Tiny House Adventure',
    location: 'Austin, Texas',
    imageUrl: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1170',
    price: 119,
    rating: 4.79,
    reviewCount: 64,
    category: 'tiny',
    availability: true
  }
];

interface FeaturedListingsProps {
  category?: string;
}

const FeaturedListings: React.FC<FeaturedListingsProps> = ({ category = 'all' }) => {
  const filteredListings = category === 'all' 
    ? featuredListings 
    : featuredListings.filter(listing => listing.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredListings.map(listing => (
        <div key={listing.id} className="animate-slide-in" style={{
          // Stagger the animation
          animationDelay: `${parseInt(listing.id) * 0.1}s`
        }}>
          <ListingCard {...listing} />
        </div>
      ))}
      
      {filteredListings.length === 0 && (
        <div className="col-span-full text-center py-10">
          <p className="text-lg text-gray-500">No listings found in this category.</p>
          <p className="text-sm text-gray-400">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

export default FeaturedListings;
