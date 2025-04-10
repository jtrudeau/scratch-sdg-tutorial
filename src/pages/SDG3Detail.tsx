import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG3Detail = () => {
  const targets = [
    {
      id: "3.1",
      title: "Reduce maternal mortality",
      description: "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births."
    },
    {
      id: "3.2",
      title: "End preventable deaths of newborns and children",
      description: "By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births."
    },
    {
      id: "3.3",
      title: "End epidemics and communicable diseases",
      description: "By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases."
    },
    {
      id: "3.4",
      title: "Reduce non-communicable diseases and promote mental health",
      description: "By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being."
    },
    {
      id: "3.5",
      title: "Prevent and treat substance abuse",
      description: "Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol."
    },
    {
      id: "3.6",
      title: "Reduce road traffic accidents",
      description: "By 2020, halve the number of global deaths and injuries from road traffic accidents."
    },
    {
      id: "3.7",
      title: "Universal access to sexual and reproductive care",
      description: "By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes."
    },
    {
      id: "3.8",
      title: "Achieve universal health coverage",
      description: "Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all."
    },
    {
      id: "3.9",
      title: "Reduce illnesses from hazardous chemicals and pollution",
      description: "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination."
    }
  ];

  const challenges = [
    {
      title: "Healthcare Inequality",
      description: "Access to quality healthcare varies widely both between and within countries."
    },
    {
      title: "Disease Outbreaks",
      description: "Emerging infectious diseases and pandemics pose serious threats to global health security."
    },
    {
      title: "Funding Gaps",
      description: "Many health systems, especially in developing countries, suffer from chronic underfunding."
    },
    {
      title: "Healthcare Worker Shortage",
      description: "There is a global shortage of trained healthcare professionals, particularly in rural areas."
    },
    {
      title: "Climate Change Health Impacts",
      description: "Climate change increases health risks through extreme weather, changing disease patterns, and more."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#4C9F38] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            3
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 3: Good Health and Well-being</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure healthy lives and promote well-being for all at all ages.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Health Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Good health is fundamental to human happiness and well-being. It also makes an important contribution 
                to economic progress, as healthy populations live longer, are more productive, and save more.
              </p>
              <p className="text-lg mb-6">
                Despite remarkable progress in improving health outcomes globally, significant challenges remain. 
                Millions of people still die from preventable diseases, lack access to essential healthcare, 
                and suffer from poor mental health.
              </p>
              <p className="text-lg">
                SDG 3 aims to ensure healthy lives and promote well-being for all at all ages. This includes 
                reducing maternal and child mortality, ending epidemics of communicable diseases, providing 
                universal healthcare coverage, and addressing the growing burden of non-communicable diseases.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=500&q=80" 
                alt="Healthcare workers" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80" 
                alt="Medical research" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80" 
                alt="Vaccination" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
                alt="Mental well-being" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 3 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#4C9F38]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#4C9F38] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Health Challenges</h2>
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

      <section className="py-12 bg-[#4C9F38] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#4C9F38] hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG3Detail; 