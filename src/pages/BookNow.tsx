
import React from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, PayPal, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BookingState {
  listingId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  listingTitle: string;
  listingImage: string;
}

const BookNow = () => {
  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const location = useLocation();
  const bookingState = location.state as BookingState;
  
  if (!bookingState) {
    // Handle case when someone navigates directly to this page without state
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Booking Information Not Found</h1>
            <p className="mb-6">Please select a property and dates before booking.</p>
            <Link to="/" className="text-airbnb-primary flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to listings
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Format dates for display
  const checkInFormatted = format(new Date(bookingState.checkIn), 'MMM d, yyyy');
  const checkOutFormatted = format(new Date(bookingState.checkOut), 'MMM d, yyyy');
  
  // Calculate number of nights
  const diffTime = Math.abs(
    new Date(bookingState.checkOut).getTime() - new Date(bookingState.checkIn).getTime()
  );
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const handleMpesaCheckout = () => {
    // In a real app, this would integrate with the M-PESA API
    alert('Redirecting to M-PESA payment... (This is a demo)');
  };
  
  const handlePayPalCheckout = () => {
    // In a real app, this would integrate with the PayPal API
    alert('Redirecting to PayPal payment... (This is a demo)');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center text-gray-600 hover:text-airbnb-primary mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </button>
        
        <h1 className="text-3xl font-bold mb-8">Complete your booking</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Options */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 bg-gray-50">
                <h2 className="text-xl font-semibold">Payment Options</h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* M-PESA Payment */}
                <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors cursor-pointer">
                  <button 
                    onClick={handleMpesaCheckout} 
                    className="w-full flex items-center"
                  >
                    <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-medium">Pay with M-PESA</h3>
                      <p className="text-sm text-gray-500">Fast and secure mobile payment</p>
                    </div>
                  </button>
                </div>
                
                {/* PayPal Payment */}
                <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors cursor-pointer">
                  <button 
                    onClick={handlePayPalCheckout} 
                    className="w-full flex items-center"
                  >
                    <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <PayPal className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-medium">Pay with PayPal</h3>
                      <p className="text-sm text-gray-500">Safe online payment</p>
                    </div>
                  </button>
                </div>
                
                <div className="pt-4">
                  <p className="text-center text-sm text-gray-500">
                    By selecting a payment method, you agree to the Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Summary */}
          <div className="md:col-span-1">
            <Card className="sticky top-24 rounded-2xl border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={bookingState.listingImage} 
                      alt={bookingState.listingTitle}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">{bookingState.listingTitle}</h3>
                    <p className="text-sm text-gray-500">ID: {bookingState.listingId}</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm"><span className="font-medium">Check-in:</span> {checkInFormatted}</p>
                      <p className="text-sm"><span className="font-medium">Check-out:</span> {checkOutFormatted}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <p className="text-sm">{bookingState.guests} guest{bookingState.guests !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <h3 className="text-lg font-semibold mb-4">Price Details</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Price × {nights} night{nights !== 1 ? 's' : ''}</span>
                    <span>${bookingState.totalPrice - 85 - 75}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cleaning fee</span>
                    <span>$85</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Service fee</span>
                    <span>$75</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold">
                  <span>Total (USD)</span>
                  <span>${bookingState.totalPrice}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 rounded-b-2xl">
                <p className="text-sm text-gray-500 text-center w-full">
                  This booking is fully refundable if canceled within 48 hours.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookNow;
