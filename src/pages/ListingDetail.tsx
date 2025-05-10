
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Star, MapPin, Heart, Share, User, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for listing details
const listingsMock = [
  {
    id: '1',
    title: 'Luxurious Beach Villa',
    description: 'Experience beachfront luxury living with this stunning villa overlooking the Pacific Ocean. Wake up to panoramic ocean views and enjoy direct beach access. This modern villa features high ceilings, an open floor plan, and premium finishes throughout.',
    location: 'Malibu, California',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1064',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170',
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1287',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1287',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170'
    ],
    price: 349,
    rating: 4.92,
    reviewCount: 56,
    isSuperhost: true,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    maxGuests: 10,
    amenities: ['Beachfront', 'Pool', 'Wi-Fi', 'Kitchen', 'Free parking', 'Air conditioning', 'BBQ grill', 'TV', 'Washer', 'Dryer'],
    host: {
      name: 'Jennifer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170',
      isSuperhost: true,
      joinDate: 'January 2018'
    }
  },
  // More mock listings would be here
];

const ListingDetail = () => {
  const { id } = useParams<{id: string}>();
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(1);
  
  // Find the listing from our mock data
  const listing = listingsMock.find(listing => listing.id === id);
  
  if (!listing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <p className="text-gray-500 mb-6">The listing you are looking for doesn't exist or has been removed.</p>
          <Link to="/" className="text-airbnb-primary hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    
    // Calculate the difference in days
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return listing.price * diffDays;
  };
  
  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    console.log('Booking', {
      listingId: id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      totalPrice: calculateTotalPrice()
    });
    
    // Here you would normally handle the booking process
    alert('Booking successful! (This is just a demo)');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-airbnb-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to listings
        </Link>
        
        {/* Listing Title & Quick Actions */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <div className="flex items-center text-sm">
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 fill-airbnb-primary text-airbnb-primary mr-1" />
                <span>{listing.rating}</span>
                <span className="mx-1">·</span>
                <span className="underline">{listing.reviewCount} reviews</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{listing.location}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Share className="h-4 w-4 mr-1" /> Share
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Heart className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {listing.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`${listing.title} - Image ${index + 1}`}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Listing Details */}
          <div className="lg:col-span-2">
            {/* Host Info */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Hosted by {listing.host.name}
                  {listing.host.isSuperhost && (
                    <Badge className="ml-2 bg-airbnb-primary">Superhost</Badge>
                  )}
                </h2>
                <p className="text-gray-600">
                  {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} bathrooms
                </p>
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img 
                  src={listing.host.image} 
                  alt={listing.host.name} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About this place</h3>
              <p className="text-gray-700">{listing.description}</p>
            </div>
            
            <Separator className="my-6" />
            
            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                      ✓
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Calendar */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="p-4 border border-gray-200 rounded-2xl">
                <CalendarComponent
                  mode="range"
                  selected={{
                    from: checkInDate,
                    to: checkOutDate
                  }}
                  onSelect={(range) => {
                    setCheckInDate(range?.from);
                    setCheckOutDate(range?.to);
                  }}
                  numberOfMonths={2}
                  className="pointer-events-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-custom sticky top-24 rounded-2xl border border-gray-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xl font-bold">${listing.price} <span className="text-sm font-normal text-gray-600">night</span></p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-airbnb-primary text-airbnb-primary mr-1" />
                    <span>{listing.rating}</span>
                    <span className="mx-1">·</span>
                    <span className="text-gray-600">{listing.reviewCount} reviews</span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
                  {/* Date Selection */}
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-3">
                      <p className="text-xs font-medium">CHECK-IN</p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-left font-normal p-0 h-auto",
                              !checkInDate && "text-muted-foreground"
                            )}
                          >
                            {checkInDate ? format(checkInDate, 'MMM d, yyyy') : <span>Add date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={checkInDate}
                            onSelect={setCheckInDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium">CHECK-OUT</p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-left font-normal p-0 h-auto",
                              !checkOutDate && "text-muted-foreground"
                            )}
                          >
                            {checkOutDate ? format(checkOutDate, 'MMM d, yyyy') : <span>Add date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={checkOutDate}
                            onSelect={setCheckOutDate}
                            initialFocus
                            disabled={(date) => !checkInDate || date < checkInDate}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  {/* Guests */}
                  <div className="border-t border-gray-200 p-3">
                    <p className="text-xs font-medium mb-1">GUESTS</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>{guests} guest{guests !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-full"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                        >
                          -
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-full"
                          onClick={() => setGuests(Math.min(listing.maxGuests, guests + 1))}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white btn-hover-scale rounded-xl"
                  size="lg"
                >
                  Reserve
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-3">
                  You won't be charged yet
                </p>
                
                {checkInDate && checkOutDate && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="underline">
                        ${listing.price} x {Math.ceil(
                          Math.abs(checkOutDate.getTime() - checkInDate.getTime()) / 
                          (1000 * 60 * 60 * 24)
                        )} nights
                      </span>
                      <span>${calculateTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="underline">Cleaning fee</span>
                      <span>$85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="underline">Service fee</span>
                      <span>$75</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotalPrice() + 85 + 75}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingDetail;
