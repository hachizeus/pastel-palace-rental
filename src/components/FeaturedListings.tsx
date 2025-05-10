
import React from 'react';
import ListingCard from './ListingCard';

// Mock data for featured listings
const featuredListings = [
  {
    id: '1',
    title: 'Luxurious Beach Villa',
    location: 'Malibu, California',
    imageUrl: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1064',
    price: 349,
    rating: 4.92,
    reviewCount: 56,
    isSuperhost: true,
    category: 'beachfront'
  },
  {
    id: '2',
    title: 'Mountain Retreat with View',
    location: 'Aspen, Colorado',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=930',
    price: 289,
    rating: 4.85,
    reviewCount: 42,
    category: 'cabin'
  },
  {
    id: '3',
    title: 'Modern Downtown Apartment',
    location: 'New York City, New York',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1080',
    price: 199,
    rating: 4.78,
    reviewCount: 103,
    category: 'design'
  },
  {
    id: '4',
    title: 'Cozy Countryside Cottage',
    location: 'Portland, Oregon',
    imageUrl: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=933',
    price: 149,
    rating: 4.93,
    reviewCount: 87,
    isSuperhost: true,
    category: 'countryside'
  },
  {
    id: '5',
    title: 'Historic City Townhouse',
    location: 'Boston, Massachusetts',
    imageUrl: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1170',
    price: 219,
    rating: 4.81,
    reviewCount: 69,
    category: 'historic'
  },
  {
    id: '6',
    title: 'Lakefront Cabin with Dock',
    location: 'Lake Tahoe, Nevada',
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1170',
    price: 279,
    rating: 4.88,
    reviewCount: 51,
    category: 'cabin'
  },
  {
    id: '7',
    title: 'Tropical Paradise Villa',
    location: 'Miami, Florida',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074',
    price: 329,
    rating: 4.96,
    reviewCount: 78,
    isSuperhost: true,
    category: 'tropical'
  },
  {
    id: '8',
    title: 'Tiny House Adventure',
    location: 'Austin, Texas',
    imageUrl: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1170',
    price: 119,
    rating: 4.79,
    reviewCount: 64,
    category: 'tiny'
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
