import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG17Detail = () => {
  const targetGroups = [
    {
      title: "Finance",
      targets: [
        {
          id: "17.1",
          title: "Strengthen domestic resource mobilization",
          description: "Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection."
        },
        {
          id: "17.2",
          title: "Implement development assistance commitments",
          description: "Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries."
        },
        {
          id: "17.3",
          title: "Mobilize additional financial resources",
          description: "Mobilize additional financial resources for developing countries from multiple sources."
        },
        {
          id: "17.4",
          title: "Assist developing countries in attaining debt sustainability",
          description: "Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress."
        },
        {
          id: "17.5",
          title: "Invest in least developed countries",
          description: "Adopt and implement investment promotion regimes for least developed countries."
        }
      ]
    },
    {
      title: "Technology",
      targets: [
        {
          id: "17.6",
          title: "Enhance knowledge sharing and cooperation",
          description: "Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism."
        },
        {
          id: "17.7",
          title: "Promote sustainable technologies to developing countries",
          description: "Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed."
        },
        {
          id: "17.8",
          title: "Strengthen science and innovation capacity",
          description: "Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology."
        }
      ]
    },
    {
      title: "Capacity Building",
      targets: [
        {
          id: "17.9",
          title: "Enhance international support for capacity building",
          description: "Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the sustainable development goals, including through North-South, South-South and triangular cooperation."
        }
      ]
    },
    {
      title: "Trade",
      targets: [
        {
          id: "17.10",
          title: "Promote universal trading system",
          description: "Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda."
        },
        {
          id: "17.11",
          title: "Increase exports of developing countries",
          description: "Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries' share of global exports by 2020."
        },
        {
          id: "17.12",
          title: "Remove trade barriers for least developed countries",
          description: "Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access."
        }
      ]
    },
    {
      title: "Systemic Issues",
      targets: [
        {
          id: "17.13",
          title: "Enhance global macroeconomic stability",
          description: "Enhance global macroeconomic stability, including through policy coordination and policy coherence."
        },
        {
          id: "17.14",
          title: "Enhance policy coherence",
          description: "Enhance policy coherence for sustainable development."
        },
        {
          id: "17.15",
          title: "Respect country's policy space",
          description: "Respect each country's policy space and leadership to establish and implement policies for poverty eradication and sustainable development."
        }
      ]
    },
    {
      title: "Multi-stakeholder Partnerships",
      targets: [
        {
          id: "17.16",
          title: "Enhance global partnership for sustainable development",
          description: "Enhance the global partnership for sustainable development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the sustainable development goals in all countries, in particular developing countries."
        },
        {
          id: "17.17",
          title: "Encourage partnerships",
          description: "Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships."
        }
      ]
    },
    {
      title: "Data, Monitoring and Accountability",
      targets: [
        {
          id: "17.18",
          title: "Enhance data availability",
          description: "By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts."
        },
        {
          id: "17.19",
          title: "Develop measurements of progress",
          description: "By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries."
        }
      ]
    }
  ];

  const challenges = [
    {
      title: "Funding Gaps",
      description: "There's a significant shortfall in financing needed to achieve the SDGs, especially in developing countries."
    },
    {
      title: "Policy Incoherence",
      description: "Inconsistent policies across sectors and countries can undermine sustainable development efforts."
    },
    {
      title: "Technology Divides",
      description: "Many developing countries lack access to essential technologies needed for sustainable development."
    },
    {
      title: "Data Limitations",
      description: "Insufficient data collection and monitoring capabilities hinder tracking progress toward the SDGs."
    },
    {
      title: "Global Inequality",
      description: "Power imbalances in global institutions and decision-making processes can marginalize developing countries."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#19486A] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            17
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 17: Partnerships for the Goals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strengthen the means of implementation and revitalize the global partnership for sustainable development.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Partnerships Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Achieving the ambitious targets of the 2030 Agenda requires strong global partnerships and cooperation. 
                The SDGs can only be realized with a strong commitment to global partnership and cooperation among 
                governments, the private sector, civil society, and other stakeholders.
              </p>
              <p className="text-lg mb-6">
                While official development assistance from developed countries increased by 66 percent between 2000 
                and 2014, humanitarian crises and conflicts continue to demand financial resources and aid. Many 
                countries also require assistance to encourage investment for sustainable growth and development.
              </p>
              <p className="text-lg">
                SDG 17 seeks to strengthen global partnerships to support and achieve the ambitious targets of the 
                2030 Agenda. This includes improving domestic capacity for tax collection, addressing debt issues 
                for developing countries, enhancing North-South and South-South cooperation, promoting international 
                trade, and building more inclusive global governance structures. By working together, sharing resources, 
                knowledge, and expertise, the world can accelerate progress toward all of the Sustainable Development Goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556484687-30636164638b?auto=format&fit=crop&w=500&q=80" 
                alt="Global partnerships" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80" 
                alt="Collaboration" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=500&q=80" 
                alt="Technology sharing" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=500&q=80" 
                alt="International aid" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 17 Targets</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
            Goal 17 is a cross-cutting goal that strengthens the implementation of all SDGs through themed categories of global partnership, from finance and technology to capacity building and trade. These interconnected partnerships are essential for achieving the entire 2030 Agenda.
          </p>
          
          {targetGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
              <h3 className="text-2xl font-semibold text-sdg-navy mb-4">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.targets.map((target) => (
                  <Card key={target.id} className="border-l-4 border-[#19486A]">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-[#19486A] font-bold mr-2">{target.id}</span>
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
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Partnership Challenges</h2>
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

      <section className="py-12 bg-[#19486A] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#19486A] hover:bg-blue-950 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG17Detail; 