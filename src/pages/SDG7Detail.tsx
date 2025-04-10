import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG7Detail = () => {
  const targets = [
    {
      id: "7.1",
      title: "Universal access to energy",
      description: "By 2030, ensure universal access to affordable, reliable and modern energy services."
    },
    {
      id: "7.2",
      title: "Increase global renewable energy",
      description: "By 2030, increase substantially the share of renewable energy in the global energy mix."
    },
    {
      id: "7.3",
      title: "Double the improvement in energy efficiency",
      description: "By 2030, double the global rate of improvement in energy efficiency."
    },
    {
      id: "7.a",
      title: "Enhance international cooperation",
      description: "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology."
    },
    {
      id: "7.b",
      title: "Expand and upgrade energy services for developing countries",
      description: "By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support."
    }
  ];

  const challenges = [
    {
      title: "Energy Poverty",
      description: "Nearly 800 million people still lack access to electricity, while billions rely on polluting fuels for cooking."
    },
    {
      title: "Fossil Fuel Dependence",
      description: "The global energy system remains heavily dependent on fossil fuels, contributing to climate change."
    },
    {
      title: "Infrastructure Costs",
      description: "Transitioning to clean energy requires significant investment in new infrastructure and technology."
    },
    {
      title: "Energy Storage",
      description: "Storing renewable energy effectively and affordably remains a challenge for widespread adoption."
    },
    {
      title: "Policy Barriers",
      description: "Outdated regulations and fossil fuel subsidies can hinder the transition to sustainable energy."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FCC30B] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            7
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 7: Affordable and Clean Energy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure access to affordable, reliable, sustainable and modern energy for all.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Affordable and Clean Energy Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Energy is central to nearly every major challenge and opportunity the world faces today. 
                Be it jobs, security, climate change, food production, or increasing incomes, access to 
                sustainable energy is essential for all.
              </p>
              <p className="text-lg mb-6">
                Yet, one in ten people still lack electricity, and millions more rely on polluting 
                fuels like wood, coal, charcoal, or animal waste for cooking and heating. This causes harmful 
                indoor air pollution that leads to millions of premature deaths each year.
              </p>
              <p className="text-lg">
                SDG 7 aims to ensure access to affordable, reliable, and sustainable energy for all, 
                while increasing the share of renewable energy and improving energy efficiency. 
                The transition to clean energy is critical for addressing climate change and building 
                more resilient societies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80" 
                alt="Solar panels" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=500&q=80" 
                alt="Wind turbines" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500&q=80" 
                alt="Rural electrification" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1548612324-3472d75e886a?auto=format&fit=crop&w=500&q=80" 
                alt="Energy efficient technology" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 7 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 3).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#FCC30B]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FCC30B] font-bold mr-2">{target.id}</span>
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
              <Card key={target.id} className="border-l-4 border-[#FCC30B]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FCC30B] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Energy Challenges</h2>
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

      <section className="py-12 bg-[#FCC30B] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#FCC30B] hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG7Detail; 