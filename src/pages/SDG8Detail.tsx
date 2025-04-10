import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG8Detail = () => {
  const targets = [
    {
      id: "8.1",
      title: "Sustainable economic growth",
      description: "Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries."
    },
    {
      id: "8.2",
      title: "Economic productivity through innovation",
      description: "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors."
    },
    {
      id: "8.3",
      title: "Promote development-oriented policies",
      description: "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services."
    },
    {
      id: "8.4",
      title: "Improve resource efficiency",
      description: "Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead."
    },
    {
      id: "8.5",
      title: "Full employment and decent work",
      description: "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value."
    },
    {
      id: "8.6",
      title: "Reduce youth unemployment",
      description: "By 2020, substantially reduce the proportion of youth not in employment, education or training."
    },
    {
      id: "8.7",
      title: "End modern slavery and child labor",
      description: "Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms."
    },
    {
      id: "8.8",
      title: "Protect labor rights",
      description: "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment."
    },
    {
      id: "8.9",
      title: "Promote sustainable tourism",
      description: "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products."
    },
    {
      id: "8.10",
      title: "Strengthen financial institutions",
      description: "Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all."
    },
    {
      id: "8.a",
      title: "Increase Aid for Trade",
      description: "Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-Related Technical Assistance to Least Developed Countries."
    },
    {
      id: "8.b",
      title: "Develop youth employment strategy",
      description: "By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization."
    }
  ];

  const challenges = [
    {
      title: "Unemployment",
      description: "Global unemployment remains high, particularly among youth and in developing countries."
    },
    {
      title: "Informal Economy",
      description: "Billions work in the informal economy with limited rights, protections, and security."
    },
    {
      title: "Labor Exploitation",
      description: "Forced labor, modern slavery, and child labor affect millions worldwide."
    },
    {
      title: "Automation and Job Displacement",
      description: "Technological advancement creates concerns about job losses without adequate transitions."
    },
    {
      title: "Unsustainable Growth",
      description: "Economic growth often comes at the expense of environmental degradation and resource depletion."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#A21942] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            8
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 8: Decent Work and Economic Growth</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Decent Work and Economic Growth Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Sustained and inclusive economic growth is essential for prosperity. When growth is inclusive, 
                it creates decent jobs and improves living standards. However, economic growth needs to be 
                balanced with environmental protection and fair labor practices.
              </p>
              <p className="text-lg mb-6">
                Currently, around 172 million people globally are without work, and many more are in vulnerable 
                employment or receiving wages insufficient to lift them out of poverty. The COVID-19 pandemic 
                has exacerbated these challenges, disrupting labor markets worldwide.
              </p>
              <p className="text-lg">
                SDG 8 aims to promote sustained economic growth, higher productivity, technological innovation, 
                and entrepreneurship. It emphasizes decent work for all, including young people and persons with 
                disabilities, and the need to end forced labor, modern slavery, and child labor. Importantly, 
                it recognizes the need to decouple economic growth from environmental degradation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80" 
                alt="Sustainable business" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" 
                alt="Productive employment" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80" 
                alt="Entrepreneurship" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=500&q=80" 
                alt="Innovation and technology" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 8 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#A21942]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#A21942] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Economic and Employment Challenges</h2>
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

      <section className="py-12 bg-[#A21942] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#A21942] hover:bg-pink-800 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG8Detail; 