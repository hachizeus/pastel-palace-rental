
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="text-airbnb-primary text-6xl font-bold">404</div>
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="rounded-xl">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
