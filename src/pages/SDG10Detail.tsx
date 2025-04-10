import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG10Detail = () => {
  const targets = [
    {
      id: "10.1",
      title: "Reduce income inequalities",
      description: "By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average."
    },
    {
      id: "10.2",
      title: "Promote universal social, economic and political inclusion",
      description: "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status."
    },
    {
      id: "10.3",
      title: "Ensure equal opportunity and reduce inequalities",
      description: "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard."
    },
    {
      id: "10.4",
      title: "Adopt fiscal and social policies that promote equality",
      description: "Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality."
    },
    {
      id: "10.5",
      title: "Improve regulation of global financial markets",
      description: "Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations."
    },
    {
      id: "10.6",
      title: "Enhanced representation for developing countries",
      description: "Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions."
    },
    {
      id: "10.7",
      title: "Responsible and well-managed migration policies",
      description: "Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies."
    },
    {
      id: "10.a",
      title: "Special and differential treatment for developing countries",
      description: "Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements."
    },
    {
      id: "10.b",
      title: "Encourage development assistance and investment in least developed countries",
      description: "Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes."
    },
    {
      id: "10.c",
      title: "Reduce transaction costs for migrant remittances",
      description: "By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent."
    }
  ];

  const challenges = [
    {
      title: "Income Gaps",
      description: "The gap between the rich and poor is growing in many countries, with wealth increasingly concentrated among the top 1%."
    },
    {
      title: "Unequal Access to Services",
      description: "Marginalized groups often face barriers to healthcare, education, and economic opportunities."
    },
    {
      title: "Discrimination",
      description: "Systemic discrimination continues to affect outcomes for people based on gender, race, ethnicity, and other factors."
    },
    {
      title: "Global Power Imbalances",
      description: "Developing countries often have limited voice in international financial and political institutions."
    },
    {
      title: "Digital Divide",
      description: "Unequal access to technology and digital resources widens existing inequality gaps."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#DD1367] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            10
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 10: Reduced Inequalities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reduce inequality within and among countries.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Reducing Inequality Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Inequality threatens long-term social and economic development, harms poverty reduction efforts, 
                and undermines people's sense of fulfillment and self-worth. It can breed crime, disease, and 
                environmental degradation.
              </p>
              <p className="text-lg mb-6">
                Despite some progress, inequality is increasing within and among countries. The richest 1% of the 
                global population holds a disproportionate share of wealth, while the poorest continue to have 
                limited access to basic services and opportunities.
              </p>
              <p className="text-lg">
                SDG 10 aims to reduce inequalities in income as well as those based on age, sex, disability, race, 
                ethnicity, origin, religion, or economic status. It also addresses inequalities among countries, 
                including those related to representation, migration, and development assistance. By focusing on 
                equity, SDG 10 aims to ensure no one is left behind in the journey toward sustainable development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1594712844133-d4193f13c17e?auto=format&fit=crop&w=500&q=80" 
                alt="Social inclusion" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80" 
                alt="Economic equality" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&w=500&q=80" 
                alt="Global cooperation" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1608403890284-e023b57a79a8?auto=format&fit=crop&w=500&q=80" 
                alt="Equal opportunity" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 10 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#DD1367]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#DD1367] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Inequality Challenges</h2>
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

      <section className="py-12 bg-[#DD1367] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#DD1367] hover:bg-pink-800 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG10Detail; 