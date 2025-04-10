import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG1Detail = () => {
  const targets = [
    {
      id: "1.1",
      title: "Eradicate extreme poverty",
      description: "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.90 a day."
    },
    {
      id: "1.2",
      title: "Reduce poverty by half",
      description: "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions."
    },
    {
      id: "1.3",
      title: "Implement social protection systems",
      description: "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable."
    },
    {
      id: "1.4",
      title: "Equal rights to resources",
      description: "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance."
    },
    {
      id: "1.5",
      title: "Build resilience to disasters",
      description: "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters."
    },
    {
      id: "1.a",
      title: "Mobilize resources for poverty programs",
      description: "Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions."
    },
    {
      id: "1.b",
      title: "Create policy frameworks",
      description: "Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions."
    }
  ];

  const challenges = [
    {
      title: "Income Inequality",
      description: "The gap between the richest and poorest continues to widen in many parts of the world."
    },
    {
      title: "Lack of Social Protection",
      description: "Billions of people lack access to social security, healthcare, and basic services."
    },
    {
      title: "Economic Shocks",
      description: "Financial crises, natural disasters, and pandemics disproportionately impact the poor."
    },
    {
      title: "Limited Access to Resources",
      description: "Many people lack access to land, property rights, financial services, and technologies."
    },
    {
      title: "Conflict and Displacement",
      description: "War and displacement force people into poverty and prevent sustainable development."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#E5243B] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            1
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 1: No Poverty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End poverty in all its forms everywhere.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Fighting Poverty Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Poverty is more than just a lack of income—it encompasses a lack of basic services, resources, 
                and opportunities. Eradicating poverty in all its forms remains one of humanity's greatest challenges.
              </p>
              <p className="text-lg mb-6">
                Despite significant progress in reducing extreme poverty, about 10% of the world's population still 
                lives on less than $1.90 a day. The COVID-19 pandemic has pushed millions more into poverty, 
                reversing decades of progress.
              </p>
              <p className="text-lg">
                SDG 1 aims to ensure that all people—everywhere—can escape poverty and have access to the 
                resources and opportunities they need to live dignified, fulfilling lives. This includes social 
                protection systems, equal rights to economic resources, and building resilience against disasters.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1530490125459-847a6d437825?auto=format&fit=crop&w=500&q=80" 
                alt="Economic opportunity" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80" 
                alt="Education as a path out of poverty" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80" 
                alt="Community support" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80" 
                alt="Financial inclusion" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 1 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#E5243B]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#E5243B] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Poverty Challenges</h2>
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

      <section className="py-12 bg-[#E5243B] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#E5243B] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG1Detail; 