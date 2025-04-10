import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG15Detail = () => {
  const targets = [
    {
      id: "15.1",
      title: "Conserve and restore terrestrial ecosystems",
      description: "By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements."
    },
    {
      id: "15.2",
      title: "Sustainable forest management",
      description: "By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally."
    },
    {
      id: "15.3",
      title: "Combat desertification",
      description: "By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world."
    },
    {
      id: "15.4",
      title: "Conserve mountain ecosystems",
      description: "By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development."
    },
    {
      id: "15.5",
      title: "Protect biodiversity and natural habitats",
      description: "Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species."
    },
    {
      id: "15.6",
      title: "Fair sharing of genetic resources",
      description: "Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed."
    },
    {
      id: "15.7",
      title: "End poaching and trafficking",
      description: "Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products."
    },
    {
      id: "15.8",
      title: "Prevent invasive alien species",
      description: "By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species."
    },
    {
      id: "15.9",
      title: "Integrate ecosystem values into planning",
      description: "By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts."
    },
    {
      id: "15.a",
      title: "Increase financial resources for biodiversity",
      description: "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems."
    },
    {
      id: "15.b",
      title: "Finance sustainable forest management",
      description: "Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation."
    },
    {
      id: "15.c",
      title: "Combat global poaching and trafficking",
      description: "Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities."
    }
  ];

  const challenges = [
    {
      title: "Deforestation",
      description: "Forests are being cleared at an alarming rate, with 10 million hectares lost annually."
    },
    {
      title: "Biodiversity Loss",
      description: "One million plant and animal species are at risk of extinction due to human activities."
    },
    {
      title: "Land Degradation",
      description: "About 25% of the Earth's land area has been degraded, affecting 3.2 billion people."
    },
    {
      title: "Wildlife Trafficking",
      description: "Illegal wildlife trade threatens many species and undermines conservation efforts."
    },
    {
      title: "Ecosystem Fragmentation",
      description: "Human development is dividing natural habitats into smaller, isolated patches."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#56C02B] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            15
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 15: Life on Land</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, halt and reverse land degradation and halt biodiversity loss.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Terrestrial Ecosystems Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Healthy terrestrial ecosystems are vital for human survival and well-being. Forests, wetlands, 
                mountains, and drylands provide us with food, fresh water, clean air, and protection from natural 
                disasters. They also support biodiversity and help mitigate climate change by storing carbon.
              </p>
              <p className="text-lg mb-6">
                However, human activities are causing unprecedented land degradation and biodiversity loss. 
                Deforestation continues at an alarming rate, desertification affects millions of people, 
                and many plant and animal species face extinction due to habitat loss and other pressures.
              </p>
              <p className="text-lg">
                SDG 15 aims to protect, restore, and promote sustainable use of terrestrial ecosystems. 
                This includes efforts to sustainably manage forests, combat desertification, halt and 
                reverse land degradation, and stop biodiversity loss. Preserving the health of our land 
                ecosystems is essential not only for environmental sustainability but also for food security, 
                livelihoods, and resilience to climate change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80" 
                alt="Forest conservation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1471513671800-b09c87e1497c?auto=format&fit=crop&w=500&q=80" 
                alt="Biodiversity protection" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable land management" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=500&q=80" 
                alt="Wildlife conservation" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 15 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 9).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#56C02B]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#56C02B] font-bold mr-2">{target.id}</span>
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
            {targets.slice(9).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#56C02B]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#56C02B] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Land Ecosystem Challenges</h2>
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

      <section className="py-12 bg-[#56C02B] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#56C02B] hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG15Detail; 