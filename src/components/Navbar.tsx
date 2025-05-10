import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Optional: Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <h1 className="text-2xl font-bold text-airbnb-primary">
            <span>stay</span>
            <span className="text-airbnb-dark">easy</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/listings" className="text-sm font-medium hover:text-airbnb-primary transition">
            Browse Stays
          </Link>
          <Link to="/become-a-host" className="text-sm font-medium hover:text-airbnb-primary transition">
            Become a Host
          </Link>
        </div>

        {/* Search and User */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Search size={16} />
            <span>Search</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <User size={18} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 p-4 transform transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4">
          <Link to="/listings" className="p-4 rounded-2xl hover:bg-airbnb-light" onClick={handleLinkClick}>
            Browse Stays
          </Link>
          <Link to="/become-a-host" className="p-4 rounded-2xl hover:bg-airbnb-light" onClick={handleLinkClick}>
            Become a Host
          </Link>
          <Link to="/login" className="p-4 rounded-2xl hover:bg-airbnb-light" onClick={handleLinkClick}>
            Login
          </Link>
          <Link to="/signup" className="p-4 rounded-2xl hover:bg-airbnb-light" onClick={handleLinkClick}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
