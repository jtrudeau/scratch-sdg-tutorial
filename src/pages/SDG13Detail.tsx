import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG13Detail = () => {
  const targets = [
    {
      id: "13.1",
      title: "Strengthen resilience to climate hazards",
      description: "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries."
    },
    {
      id: "13.2",
      title: "Integrate climate change into policies",
      description: "Integrate climate change measures into national policies, strategies and planning."
    },
    {
      id: "13.3",
      title: "Improve education on climate change",
      description: "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning."
    },
    {
      id: "13.a",
      title: "Implement the UN Framework Convention on Climate Change",
      description: "Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible."
    },
    {
      id: "13.b",
      title: "Promote planning and management",
      description: "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities."
    }
  ];

  const challenges = [
    {
      title: "Rising Temperatures",
      description: "Global temperatures continue to rise, causing more frequent and severe heat waves."
    },
    {
      title: "Extreme Weather",
      description: "Climate change is increasing the frequency and intensity of extreme weather events."
    },
    {
      title: "Sea Level Rise",
      description: "Rising sea levels threaten coastal communities and low-lying island nations."
    },
    {
      title: "Carbon Emissions",
      description: "Despite international agreements, global carbon emissions continue to increase."
    },
    {
      title: "Climate Justice",
      description: "Those least responsible for climate change often face its worst impacts."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#3F7E44] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            13
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 13: Climate Action</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take urgent action to combat climate change and its impacts.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Climate Action Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Climate change is one of the defining issues of our time. It is disrupting national economies, 
                affecting lives, and costing people, communities, and countries dearly today and even more tomorrow.
              </p>
              <p className="text-lg mb-6">
                The impacts of climate change are global in scope and unprecedented in scale. Without drastic 
                action today, adapting to these impacts in the future will be more difficult and costly. Rising global 
                temperatures have already brought changes in weather patterns, rising sea levels, and more extreme weather events.
              </p>
              <p className="text-lg">
                SDG 13 recognizes the urgent need to combat climate change and its impacts. This involves building 
                resilience to climate hazards, integrating climate change measures into national policies, 
                improving education and awareness, and supporting developing countries in their climate action efforts. 
                Climate action is closely linked with other SDGs, as climate change impacts many aspects of sustainable development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=500&q=80" 
                alt="Renewable energy" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80" 
                alt="Environmental protection" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1595761540881-28cf9287a724?auto=format&fit=crop&w=500&q=80" 
                alt="Climate activism" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1584974292709-5c2f0619971b?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable cities" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 13 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 3).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#3F7E44]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#3F7E44] font-bold mr-2">{target.id}</span>
                    <span>{target.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Implementation Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.slice(3).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#3F7E44]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#3F7E44] font-bold mr-2">{target.id}</span>
                    <span>{target.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Climate Change Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#3F7E44] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#3F7E44] hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG13Detail; 