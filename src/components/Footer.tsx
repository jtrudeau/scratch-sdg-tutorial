
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SDG Heroes Unite</h3>
            <p className="text-gray-400">
              Helping 6th graders learn to code for the Sustainable Development Goals (SDGs).
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sdgs" className="text-gray-400 hover:text-white transition-colors">
                  All SDGs
                </Link>
              </li>
              <li>
                <Link to="/sdg4" className="text-gray-400 hover:text-white transition-colors">
                  SDG 4: Quality Education
                </Link>
              </li>
              <li>
                <Link to="/tutorial" className="text-gray-400 hover:text-white transition-colors">
                  Scratch Tutorial
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://sdgs.un.org/goals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UN SDG Website
                </a>
              </li>
              <li>
                <a 
                  href="https://scratch.mit.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Scratch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SDG Heroes Unite. Created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
