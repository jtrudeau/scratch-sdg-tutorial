import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG14Detail = () => {
  const targets = [
    {
      id: "14.1",
      title: "Reduce marine pollution",
      description: "By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution."
    },
    {
      id: "14.2",
      title: "Protect marine and coastal ecosystems",
      description: "By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans."
    },
    {
      id: "14.3",
      title: "Reduce ocean acidification",
      description: "Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels."
    },
    {
      id: "14.4",
      title: "Sustainable fishing",
      description: "By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics."
    },
    {
      id: "14.5",
      title: "Conserve coastal and marine areas",
      description: "By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information."
    },
    {
      id: "14.6",
      title: "End subsidies that contribute to overfishing",
      description: "By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation."
    },
    {
      id: "14.7",
      title: "Increase economic benefits from sustainable use of marine resources",
      description: "By 2030, increase the economic benefits to small island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism."
    },
    {
      id: "14.a",
      title: "Increase scientific knowledge, research and technology",
      description: "Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries."
    },
    {
      id: "14.b",
      title: "Support small-scale fishers",
      description: "Provide access for small-scale artisanal fishers to marine resources and markets."
    },
    {
      id: "14.c",
      title: "Implement international law for oceans",
      description: "Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in the United Nations Convention on the Law of the Sea, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of 'The Future We Want'."
    }
  ];

  const challenges = [
    {
      title: "Ocean Pollution",
      description: "Marine plastic pollution alone has increased tenfold since 1980, affecting marine life and ecosystems."
    },
    {
      title: "Overfishing",
      description: "About 33% of fish stocks are harvested at biologically unsustainable levels."
    },
    {
      title: "Ocean Acidification",
      description: "Increased CO2 absorption is making oceans more acidic, threatening marine organisms and ecosystems."
    },
    {
      title: "Habitat Destruction",
      description: "Coastal development and destructive fishing practices are destroying critical marine habitats."
    },
    {
      title: "Climate Change Impacts",
      description: "Rising sea temperatures, changing currents, and extreme weather affect marine biodiversity."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#0A97D9] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            14
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 14: Life Below Water</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conserve and sustainably use the oceans, seas and marine resources for sustainable development.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Ocean Conservation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Oceans cover more than 70% of our planet and are essential for all life on Earth. They 
                generate most of the oxygen we breathe, absorb a significant portion of carbon dioxide 
                emissions, provide food and livelihoods for billions of people, and are home to an 
                incredible diversity of life.
              </p>
              <p className="text-lg mb-6">
                However, human activities are placing unprecedented pressure on ocean ecosystems. Plastic 
                pollution, overfishing, ocean acidification, and rising sea temperatures threaten marine 
                biodiversity and the communities that depend on healthy oceans.
              </p>
              <p className="text-lg">
                SDG 14 aims to conserve and sustainably use the oceans, seas, and marine resources. This 
                includes reducing marine pollution, protecting marine ecosystems, addressing ocean acidification, 
                implementing sustainable fishing practices, and increasing scientific knowledge about our oceans. 
                Protecting our oceans is not just about preserving biodiversity—it's essential for sustainable development, 
                food security, and climate regulation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&w=500&q=80" 
                alt="Ocean conservation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=500&q=80" 
                alt="Marine biodiversity" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=500&q=80" 
                alt="Coral reef protection" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1621434029311-dc013e374c13?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable fishing" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 14 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#0A97D9]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#0A97D9] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Ocean Challenges</h2>
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

      <section className="py-12 bg-[#0A97D9] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#0A97D9] hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG14Detail; 