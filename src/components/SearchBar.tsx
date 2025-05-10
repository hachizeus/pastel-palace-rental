
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, guests });
    // Implement search functionality
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-2xl shadow-custom p-4 flex flex-col lg:flex-row gap-4 animate-fade-in">
      {/* Location */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full p-3 border border-gray-200 rounded-xl search-input focus:outline-none focus:ring-2 focus:ring-airbnb-primary/20"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      {/* Check-in */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal search-input",
                !checkIn && "text-muted-foreground",
                "border border-gray-200 rounded-xl p-3 h-auto"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, 'PPP') : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Check-out */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal search-input",
                !checkOut && "text-muted-foreground",
                "border border-gray-200 rounded-xl p-3 h-auto"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, 'PPP') : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              className="pointer-events-auto"
              disabled={(date) => !checkIn || date < checkIn}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guests */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full border border-gray-200 rounded-xl p-3 h-auto search-input">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select guests" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1 guest</SelectItem>
              <SelectItem value="2">2 guests</SelectItem>
              <SelectItem value="3">3 guests</SelectItem>
              <SelectItem value="4">4 guests</SelectItem>
              <SelectItem value="5">5+ guests</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Search button */}
      <div className="flex items-end">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full lg:w-auto bg-airbnb-primary hover:bg-airbnb-primary/90 text-white rounded-xl btn-hover-scale"
        >
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
