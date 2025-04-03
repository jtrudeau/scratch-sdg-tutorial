
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-sdg-navy mb-6 leading-tight">
              Create Scratch Projects for 
              <span className="text-sdg-green block"> Global Goals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Learn to make fun games and stories with Scratch that help solve challenges related to the UN Sustainable Development Goals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-sdg-blue hover:bg-sdg-navy text-white px-8 py-3 rounded-full font-medium text-lg">
                <Link to="/sdgs">Explore SDG Goals</Link>
              </Button>
              <Button asChild variant="outline" className="border-sdg-blue text-sdg-blue hover:bg-sdg-blue hover:text-white px-8 py-3 rounded-full font-medium text-lg">
                <Link to="/tutorial">Start Coding</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-full h-full bg-sdg-green opacity-10 rounded-lg transform rotate-3"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-sdg-blue opacity-10 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Students coding together" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-sdg-yellow p-4 rounded-lg shadow-lg z-20 animate-float">
                <img 
                  src="https://scratch.mit.edu/images/scratch-cat.svg" 
                  alt="Scratch Cat" 
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
