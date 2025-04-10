import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG9Detail = () => {
  const targets = [
    {
      id: "9.1",
      title: "Develop sustainable infrastructure",
      description: "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all."
    },
    {
      id: "9.2",
      title: "Promote inclusive industrialization",
      description: "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry's share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries."
    },
    {
      id: "9.3",
      title: "Increase access to financial services",
      description: "Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets."
    },
    {
      id: "9.4",
      title: "Upgrade infrastructure with clean technologies",
      description: "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities."
    },
    {
      id: "9.5",
      title: "Enhance research and industrial technology",
      description: "Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending."
    },
    {
      id: "9.a",
      title: "Support sustainable infrastructure development",
      description: "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States."
    },
    {
      id: "9.b",
      title: "Support domestic technology development",
      description: "Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities."
    },
    {
      id: "9.c",
      title: "Increase access to ICT",
      description: "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020."
    }
  ];

  const challenges = [
    {
      title: "Infrastructure Gap",
      description: "Many regions lack basic infrastructure like roads, water, electricity, and digital connectivity."
    },
    {
      title: "Digital Divide",
      description: "About half the world's population still lacks internet access, limiting opportunities in the digital economy."
    },
    {
      title: "Research and Development",
      description: "Low-income countries invest much less in R&D as a percentage of GDP, hindering innovation."
    },
    {
      title: "Industrial Emissions",
      description: "Manufacturing and industry are significant sources of carbon emissions and pollution."
    },
    {
      title: "Small Enterprise Access",
      description: "Small businesses often lack access to credit, markets, and technology needed to grow."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FD6925] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            9
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 9: Industry, Innovation and Infrastructure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Industry, Innovation and Infrastructure Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Infrastructure, industrialization, and innovation are the backbone of economic development. 
                They enable societies to build resilient systems, create jobs, foster new technologies, 
                and provide essential services to communities.
              </p>
              <p className="text-lg mb-6">
                Today, billions of people still lack access to basic infrastructure like clean water, electricity, 
                and internet connectivity. Many developing countries face challenges in building resilient infrastructure, 
                promoting industrialization, and fostering innovation.
              </p>
              <p className="text-lg">
                SDG 9 aims to bridge these gaps by promoting inclusive and sustainable industrial development, 
                supporting technological research and innovation, and building resilient infrastructure. 
                This includes expanding access to financial services for small businesses, upgrading 
                infrastructure with clean technologies, and increasing access to information and 
                communications technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=500&q=80" 
                alt="Modern infrastructure" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80" 
                alt="Industrial development" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80" 
                alt="Technological innovation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=500&q=80" 
                alt="Digital connectivity" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 9 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#FD6925]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FD6925] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Infrastructure and Innovation Challenges</h2>
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

      <section className="py-12 bg-[#FD6925] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#FD6925] hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG9Detail; 