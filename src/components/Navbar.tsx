
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-sdg-blue">SDG Heroes</span>
            {/* <span className="bg-sdg-blue text-white text-xs px-2 py-1 rounded ml-2">Unite</span> */}
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 font-medium ${isActive('/') ? 'text-sdg-blue' : 'text-gray-600 hover:text-sdg-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/sdgs" 
              className={`px-3 py-2 font-medium ${isActive('/sdgs') ? 'text-sdg-blue' : 'text-gray-600 hover:text-sdg-blue'}`}
            >
              SDGs
            </Link>
            <Link 
              to="/sdg4" 
              className={`px-3 py-2 font-medium ${isActive('/sdg4') ? 'text-sdg-blue' : 'text-gray-600 hover:text-sdg-blue'}`}
            >
              SDG 4
            </Link>
            <Button 
              asChild 
              className={`${isActive('/tutorial') ? 'bg-sdg-navy' : 'bg-sdg-blue hover:bg-sdg-navy'} text-white ml-4`}
            >
              <Link to="/tutorial">Start Tutorial</Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
