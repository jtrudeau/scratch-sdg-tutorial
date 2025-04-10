import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG16Detail = () => {
  const targets = [
    {
      id: "16.1",
      title: "Reduce violence everywhere",
      description: "Significantly reduce all forms of violence and related death rates everywhere."
    },
    {
      id: "16.2",
      title: "End abuse and exploitation of children",
      description: "End abuse, exploitation, trafficking and all forms of violence against and torture of children."
    },
    {
      id: "16.3",
      title: "Promote rule of law and ensure equal access to justice",
      description: "Promote the rule of law at the national and international levels and ensure equal access to justice for all."
    },
    {
      id: "16.4",
      title: "Combat organized crime and illicit financial and arms flows",
      description: "By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime."
    },
    {
      id: "16.5",
      title: "Reduce corruption and bribery",
      description: "Substantially reduce corruption and bribery in all their forms."
    },
    {
      id: "16.6",
      title: "Develop effective, accountable and transparent institutions",
      description: "Develop effective, accountable and transparent institutions at all levels."
    },
    {
      id: "16.7",
      title: "Ensure responsive and inclusive decision-making",
      description: "Ensure responsive, inclusive, participatory and representative decision-making at all levels."
    },
    {
      id: "16.8",
      title: "Strengthen participation in global governance",
      description: "Broaden and strengthen the participation of developing countries in the institutions of global governance."
    },
    {
      id: "16.9",
      title: "Provide legal identity for all",
      description: "By 2030, provide legal identity for all, including birth registration."
    },
    {
      id: "16.10",
      title: "Ensure public access to information and protect fundamental freedoms",
      description: "Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements."
    },
    {
      id: "16.a",
      title: "Strengthen institutions to prevent violence and combat terrorism and crime",
      description: "Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime."
    },
    {
      id: "16.b",
      title: "Promote and enforce non-discriminatory laws and policies",
      description: "Promote and enforce non-discriminatory laws and policies for sustainable development."
    }
  ];

  const challenges = [
    {
      title: "Violent Conflict",
      description: "Armed conflicts continue to displace millions and hinder development in many regions."
    },
    {
      title: "Corruption",
      description: "Bribery and corruption cost the global economy approximately $3.6 trillion annually."
    },
    {
      title: "Lack of Justice",
      description: "Millions of people worldwide lack access to fair legal systems and protection of rights."
    },
    {
      title: "Weak Institutions",
      description: "Many countries struggle with ineffective governance and lack of transparency."
    },
    {
      title: "Human Rights Abuses",
      description: "Fundamental freedoms and human rights continue to be threatened in many parts of the world."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#00689D] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            16
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 16: Peace, Justice and Strong Institutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Peace, Justice and Strong Institutions Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Peace, justice, and effective institutions are fundamental to sustainable development. 
                Without peace, stability, human rights, and effective governance based on the rule of law, 
                sustainable development cannot be achieved.
              </p>
              <p className="text-lg mb-6">
                Yet many regions face protracted violence, conflict, and insecurity. High levels of corruption, 
                illicit financial flows, and weak institutions undermine progress toward sustainable development. 
                Millions of people lack access to justice systems that protect their rights.
              </p>
              <p className="text-lg">
                SDG 16 aims to promote peaceful and inclusive societies, provide access to justice for all, 
                and build effective, accountable, and inclusive institutions at all levels. This includes 
                reducing all forms of violence, ending abuse and exploitation of children, promoting the rule 
                of law, reducing corruption, and developing transparent institutions. By creating more stable 
                and just societies, SDG 16 provides a foundation for achieving all other sustainable development goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80" 
                alt="Peace and justice" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=500&q=80" 
                alt="Governance and institutions" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1588859560512-6391b58ecbcf?auto=format&fit=crop&w=500&q=80" 
                alt="Rule of law" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1591189824761-0a4e4e8ee02c?auto=format&fit=crop&w=500&q=80" 
                alt="Human rights" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 16 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#00689D]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#00689D] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Peace and Justice Challenges</h2>
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

      <section className="py-12 bg-[#00689D] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#00689D] hover:bg-blue-900 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG16Detail; 