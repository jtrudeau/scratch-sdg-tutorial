import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-sdg-navy leading-tight mb-6">
                SDG Heroes Unite: Code for a Better World
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn to create fun Scratch projects that address the United Nations Sustainable Development Goals. Perfect for 6th graders!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-sdg-blue hover:bg-sdg-navy text-white rounded-full px-8 py-6 text-lg">
                  <Link to="/sdgs">Explore the SDGs</Link>
                </Button>
                <Button asChild variant="outline" className="border-sdg-blue text-sdg-blue hover:bg-blue-50 rounded-full px-8 py-6 text-lg">
                  <Link to="/tutorial">Start Coding</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Students learning in classroom" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-sdg-education text-white p-3 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold">SDG 4</span>
                  <span className="block text-sm">Quality Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sdg-navy mb-4">What Are the SDGs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Sustainable Development Goals (SDGs) are a set of 17 goals adopted by the United Nations to create a better and more sustainable future for all by 2030.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-sdg-blue rounded-full w-12 h-12 flex items-center justify-center text-white mb-4">
                <span className="text-xl font-bold">17</span>
              </div>
              <h3 className="text-xl font-bold text-sdg-navy mb-2">Global Goals</h3>
              <p className="text-gray-600">
                17 interconnected goals addressing challenges like poverty, inequality, climate change, and environmental protection.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-sdg-blue rounded-full w-12 h-12 flex items-center justify-center text-white mb-4">
                <span className="text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-sdg-navy mb-2">Scratch Projects</h3>
              <p className="text-gray-600">
                Use block-based coding to create games, stories, and animations that raise awareness about the SDGs.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-sdg-blue rounded-full w-12 h-12 flex items-center justify-center text-white mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-sdg-navy mb-2">World to Change</h3>
              <p className="text-gray-600">
                Together, we can create positive change by sharing knowledge, taking action, and inspiring others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured SDG Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sdg-navy mb-4">Featured Goal: SDG 4 - Quality Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to create an educational Scratch game that promotes awareness about quality education for all.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Why Education Matters</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-sdg-education flex-shrink-0 mt-0.5" />
                    <span>Education is a fundamental human right</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-sdg-education flex-shrink-0 mt-0.5" />
                    <span>Over 260 million children are out of school worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-sdg-education flex-shrink-0 mt-0.5" />
                    <span>Quality education can help end poverty and reduce inequality</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-sdg-education flex-shrink-0 mt-0.5" />
                    <span>Learning digital skills like coding helps prepare for future jobs</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button asChild className="bg-sdg-education hover:bg-red-700 text-white rounded-full px-6">
                    <Link to="/sdg4">Explore SDG 4</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" 
                  alt="Students in classroom" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sdg-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Ready to Start Your SDG Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow our step-by-step tutorial to create an educational game with Scratch that helps teach others about SDG 4.
          </p>
          <Button asChild className="bg-sdg-blue hover:bg-sdg-navy text-white rounded-full px-8 py-6 text-lg shadow-md">
            <Link to="/tutorial">Start the Tutorial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
