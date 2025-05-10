
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'trending', name: 'Trending' },
  { id: 'beachfront', name: 'Beachfront' },
  { id: 'cabin', name: 'Cabins' },
  { id: 'mansion', name: 'Mansions' },
  { id: 'countryside', name: 'Countryside' },
  { id: 'pool', name: 'Amazing pools' },
  { id: 'ski', name: 'Ski-in/out' },
  { id: 'design', name: 'Design' },
  { id: 'tiny', name: 'Tiny homes' },
  { id: 'historic', name: 'Historic homes' },
  { id: 'tropical', name: 'Tropical' },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory = 'all', 
  onSelectCategory 
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap py-2">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`rounded-full px-4 transition-all ${
              selectedCategory === category.id 
                ? "bg-airbnb-primary text-white hover:bg-airbnb-primary/90" 
                : "hover:bg-airbnb-light"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoryFilter;
