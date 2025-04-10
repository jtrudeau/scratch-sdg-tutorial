import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG12Detail = () => {
  const targets = [
    {
      id: "12.1",
      title: "Implement the 10-Year Framework of Programs on sustainable consumption and production",
      description: "Implement the 10-Year Framework of Programs on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries."
    },
    {
      id: "12.2",
      title: "Sustainable management of natural resources",
      description: "By 2030, achieve the sustainable management and efficient use of natural resources."
    },
    {
      id: "12.3",
      title: "Cut global per capita food waste in half",
      description: "By 2030, cut per capita global food waste in half at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses."
    },
    {
      id: "12.4",
      title: "Responsible management of chemicals and waste",
      description: "By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment."
    },
    {
      id: "12.5",
      title: "Substantially reduce waste generation",
      description: "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse."
    },
    {
      id: "12.6",
      title: "Encourage companies to adopt sustainable practices",
      description: "Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle."
    },
    {
      id: "12.7",
      title: "Promote sustainable public procurement practices",
      description: "Promote public procurement practices that are sustainable, in accordance with national policies and priorities."
    },
    {
      id: "12.8",
      title: "Promote universal understanding of sustainable lifestyles",
      description: "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature."
    },
    {
      id: "12.a",
      title: "Support developing countries' scientific and technological capacity",
      description: "Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production."
    },
    {
      id: "12.b",
      title: "Develop and implement tools to monitor sustainable tourism",
      description: "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products."
    },
    {
      id: "12.c",
      title: "Remove market distortions that encourage wasteful consumption",
      description: "Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities."
    }
  ];

  const challenges = [
    {
      title: "Resource Depletion",
      description: "Our planet is experiencing unprecedented rates of resource extraction and depletion."
    },
    {
      title: "Food Waste",
      description: "About one-third of all food produced annually is wasted, while millions go hungry."
    },
    {
      title: "Hazardous Waste",
      description: "Proper management of chemicals and waste remains a significant challenge globally."
    },
    {
      title: "Consumption Patterns",
      description: "Unsustainable consumption drives environmental degradation and climate change."
    },
    {
      title: "Corporate Practices",
      description: "Many businesses still prioritize short-term profits over sustainability."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#BF8B2E] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            12
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 12: Responsible Consumption and Production</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure sustainable consumption and production patterns.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Responsible Consumption and Production Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Sustainable consumption and production is about doing more and better with less. It's about 
                decoupling economic growth from environmental degradation, increasing resource efficiency, 
                and promoting sustainable lifestyles.
              </p>
              <p className="text-lg mb-6">
                Currently, our material footprint is increasing faster than population growth and economic output. 
                The world continues to use ever-increasing amounts of natural resources to support our economic 
                activity. The way we produce, consume, and dispose of our waste causes a destructive impact on the planet.
              </p>
              <p className="text-lg">
                SDG 12 aims to ensure sustainable consumption and production patterns. This includes efficient 
                use of natural resources, reducing food waste, proper management of chemicals and waste, 
                sustainable business practices, and promoting sustainable lifestyles. The goal recognizes 
                that systemic changes are needed at all levels—from businesses to individual consumers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1587578104013-35ba5a281c13?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable consumption" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=80" 
                alt="Reducing food waste" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1611284446333-11ba6c9bfa22?auto=format&fit=crop&w=500&q=80" 
                alt="Recycling and waste management" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable production" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 12 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#BF8B2E]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#BF8B2E] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Consumption and Production Challenges</h2>
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

      <section className="py-12 bg-[#BF8B2E] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#BF8B2E] hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG12Detail; 