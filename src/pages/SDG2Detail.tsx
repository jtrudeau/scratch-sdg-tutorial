import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG2Detail = () => {
  const targets = [
    {
      id: "2.1",
      title: "Universal access to safe and nutritious food",
      description: "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round."
    },
    {
      id: "2.2",
      title: "End all forms of malnutrition",
      description: "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons."
    },
    {
      id: "2.3",
      title: "Double the productivity and incomes of small-scale food producers",
      description: "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment."
    },
    {
      id: "2.4",
      title: "Sustainable food production and resilient agricultural practices",
      description: "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality."
    },
    {
      id: "2.5",
      title: "Maintain genetic diversity in food production",
      description: "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed."
    },
    {
      id: "2.a",
      title: "Increase investment in rural infrastructure",
      description: "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries."
    },
    {
      id: "2.b",
      title: "Prevent agricultural trade restrictions",
      description: "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round."
    },
    {
      id: "2.c",
      title: "Ensure stable food commodity markets",
      description: "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility."
    }
  ];

  const challenges = [
    {
      title: "Climate Change",
      description: "Changing weather patterns and extreme events threaten crop yields and food production."
    },
    {
      title: "Food Waste",
      description: "About one-third of all food produced globally is lost or wasted along the supply chain."
    },
    {
      title: "Access to Markets",
      description: "Small-scale farmers often struggle to access fair markets for their products."
    },
    {
      title: "Resource Scarcity",
      description: "Limited access to land, water, and other resources constrain agricultural production."
    },
    {
      title: "Unsustainable Practices",
      description: "Industrial farming methods can degrade soil and water quality over time."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#DDA63A] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            2
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 2: Zero Hunger</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End hunger, achieve food security and improved nutrition and promote sustainable agriculture.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Fighting Hunger Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Despite producing more than enough food to feed everyone on the planet, hunger remains a critical global 
                challenge. Nearly 690 million people go hungry each day, and that number has been rising.
              </p>
              <p className="text-lg mb-6">
                Hunger and malnutrition are not just about insufficient food—they're also about inadequate nutrition, 
                unequal access to food, and unsustainable agricultural practices that degrade our environment.
              </p>
              <p className="text-lg">
                SDG 2 aims to end hunger, achieve food security, improve nutrition, and promote sustainable 
                agriculture. This requires transforming our food systems to be more inclusive, resilient, and 
                environmentally friendly, while ensuring that everyone has access to the nutritious food they need.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1594489573182-547ba917714c?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable farming" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=500&q=80" 
                alt="Food security" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1571945755790-2e917c7fc4e6?auto=format&fit=crop&w=500&q=80" 
                alt="Community garden" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80" 
                alt="Nutritious food" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 2 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 5).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#DDA63A]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#DDA63A] font-bold mr-2">{target.id}</span>
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
            {targets.slice(5).map((target) => (
              <Card key={target.id} className="border-l-4 border-[#DDA63A]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#DDA63A] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Hunger Challenges</h2>
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

      <section className="py-12 bg-[#DDA63A] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#DDA63A] hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG2Detail; 