import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG6Detail = () => {
  const targets = [
    {
      id: "6.1",
      title: "Safe and affordable drinking water",
      description: "By 2030, achieve universal and equitable access to safe and affordable drinking water for all."
    },
    {
      id: "6.2",
      title: "Adequate sanitation and hygiene",
      description: "By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations."
    },
    {
      id: "6.3",
      title: "Improve water quality",
      description: "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally."
    },
    {
      id: "6.4",
      title: "Increase water-use efficiency",
      description: "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity."
    },
    {
      id: "6.5",
      title: "Implement integrated water resources management",
      description: "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate."
    },
    {
      id: "6.6",
      title: "Protect and restore water-related ecosystems",
      description: "By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes."
    },
    {
      id: "6.a",
      title: "Expand international cooperation on water and sanitation",
      description: "By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies."
    },
    {
      id: "6.b",
      title: "Support local water and sanitation management",
      description: "Support and strengthen the participation of local communities in improving water and sanitation management."
    }
  ];

  const challenges = [
    {
      title: "Water Scarcity",
      description: "Over 2 billion people live in countries experiencing high water stress, with numbers rising."
    },
    {
      title: "Poor Sanitation",
      description: "Billions lack access to safe sanitation facilities, leading to disease spread and water pollution."
    },
    {
      title: "Water Pollution",
      description: "Industrial waste, agricultural runoff, and human waste contaminate freshwater sources worldwide."
    },
    {
      title: "Climate Change",
      description: "Changing precipitation patterns and extreme weather events threaten water security."
    },
    {
      title: "Aging Infrastructure",
      description: "Many water systems worldwide are deteriorating and unable to meet growing demands."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#26BDE2] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            6
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 6: Clean Water and Sanitation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure availability and sustainable management of water and sanitation for all.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Clean Water and Sanitation Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Water is the foundation of life and human civilization. Access to clean water and sanitation is 
                not just a basic human right—it's essential for public health, poverty reduction, 
                food security, and ecosystem protection.
              </p>
              <p className="text-lg mb-6">
                Despite progress, billions of people still lack access to safe water, sanitation, and handwashing 
                facilities. Every day, nearly 1,000 children die from preventable water and sanitation-related diseases.
              </p>
              <p className="text-lg">
                SDG 6 aims to ensure access to clean water and sanitation for all, improve water quality, increase 
                water-use efficiency, protect water-related ecosystems, and expand water management cooperation. 
                Achieving this goal is critical for sustainable development and the dignity of all people.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581314344450-707e3c882c14?auto=format&fit=crop&w=500&q=80" 
                alt="Clean water access" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1524100500623-696072836d62?auto=format&fit=crop&w=500&q=80" 
                alt="Water conservation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1564993719576-6d905b689215?auto=format&fit=crop&w=500&q=80" 
                alt="Sanitation facilities" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1589352539988-8871519270d1?auto=format&fit=crop&w=500&q=80" 
                alt="Water ecosystems" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 6 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#26BDE2]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#26BDE2] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Water and Sanitation Challenges</h2>
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

      <section className="py-12 bg-[#26BDE2] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#26BDE2] hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG6Detail; 