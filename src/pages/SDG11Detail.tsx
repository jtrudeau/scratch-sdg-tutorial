import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG11Detail = () => {
  const targets = [
    {
      id: "11.1",
      title: "Safe and affordable housing",
      description: "By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums."
    },
    {
      id: "11.2",
      title: "Sustainable transport systems",
      description: "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons."
    },
    {
      id: "11.3",
      title: "Inclusive urbanization",
      description: "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries."
    },
    {
      id: "11.4",
      title: "Protect cultural and natural heritage",
      description: "Strengthen efforts to protect and safeguard the world's cultural and natural heritage."
    },
    {
      id: "11.5",
      title: "Reduce adverse effects of disasters",
      description: "By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations."
    },
    {
      id: "11.6",
      title: "Reduce environmental impact of cities",
      description: "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management."
    },
    {
      id: "11.7",
      title: "Provide universal access to green spaces",
      description: "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities."
    },
    {
      id: "11.a",
      title: "Strong national and regional development planning",
      description: "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning."
    },
    {
      id: "11.b",
      title: "Implement policies for inclusion, resource efficiency and disaster risk reduction",
      description: "By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015–2030, holistic disaster risk management at all levels."
    },
    {
      id: "11.c",
      title: "Support sustainable buildings in least developed countries",
      description: "Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials."
    }
  ];

  const challenges = [
    {
      title: "Rapid Urbanization",
      description: "Cities are growing faster than ever, with 70% of the world's population expected to live in urban areas by 2050."
    },
    {
      title: "Informal Settlements",
      description: "Over 1 billion people live in slums or informal settlements with inadequate housing and services."
    },
    {
      title: "Air Pollution",
      description: "Urban air pollution causes millions of premature deaths annually, especially in developing countries."
    },
    {
      title: "Infrastructure Gaps",
      description: "Many cities lack adequate transportation, waste management, and other essential services."
    },
    {
      title: "Climate Vulnerability",
      description: "Cities are particularly vulnerable to climate change impacts like flooding, heat waves, and sea level rise."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FD9D24] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            11
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 11: Sustainable Cities and Communities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make cities and human settlements inclusive, safe, resilient and sustainable.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Sustainable Cities and Communities Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Cities are hubs for ideas, commerce, culture, science, productivity, and social development. 
                However, many challenges exist to maintaining cities in a way that continues to create jobs 
                and prosperity while not straining land and resources.
              </p>
              <p className="text-lg mb-6">
                Today, more than half of the world's population lives in urban areas, and by 2050, that figure 
                will rise to 6.5 billion people. Rapid urbanization is resulting in growing numbers of slum 
                dwellers, inadequate infrastructure, and increased air pollution.
              </p>
              <p className="text-lg">
                SDG 11 aims to make cities and human settlements inclusive, safe, resilient, and sustainable. 
                This involves ensuring access to safe and affordable housing, upgrading slum settlements, improving 
                urban planning, implementing integrated policies for resource efficiency, and reducing the 
                environmental impact of cities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=500&q=80" 
                alt="Smart sustainable city" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=500&q=80" 
                alt="Green public transportation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=500&q=80" 
                alt="Urban community garden" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable urban housing" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 11 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 7).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#FD9D24]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FD9D24] font-bold mr-2">{target.id}</span>
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
            {targets.slice(7).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#FD9D24]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FD9D24] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Urban Challenges</h2>
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

      <section className="py-12 bg-[#FD9D24] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#FD9D24] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG11Detail; 