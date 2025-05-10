
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

export interface ListingProps {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  isSuperhost?: boolean;
  dates?: string;
  category?: string;
  availability?: boolean;
}

const ListingCard: React.FC<ListingProps> = ({
  id,
  title,
  location,
  imageUrl,
  price,
  rating,
  reviewCount,
  isSuperhost = false,
  dates,
  availability = true
}) => {
  return (
    <Link to={`/listings/${id}`}>
      <Card className="border-none overflow-hidden listing-card group rounded-2xl">
        {/* Image Container */}
        <div className="aspect-square relative overflow-hidden rounded-2xl">
          <img 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {isSuperhost && (
            <Badge className="absolute top-2 left-2 bg-white text-airbnb-dark">
              Superhost
            </Badge>
          )}
          {availability !== undefined && (
            <Badge className={`absolute top-2 ${isSuperhost ? 'left-20' : 'left-2'} ${availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {availability ? 'Available' : 'Unavailable'}
            </Badge>
          )}
        </div>
        
        <CardContent className="p-2 pt-4">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg truncate">{title}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-airbnb-primary text-airbnb-primary mr-1" />
              <span>{rating}</span>
              <span className="text-gray-500">({reviewCount})</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">{location}</p>
          {dates && (
            <p className="text-gray-500 text-sm">{dates}</p>
          )}
        </CardContent>
        
        <CardFooter className="pt-0 p-2">
          <p className="font-medium">
            ${price} <span className="text-gray-500 font-normal">night</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ListingCard;
