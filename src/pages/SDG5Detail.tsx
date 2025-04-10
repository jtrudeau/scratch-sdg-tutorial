import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG5Detail = () => {
  const targets = [
    {
      id: "5.1",
      title: "End discrimination against women and girls",
      description: "End all forms of discrimination against all women and girls everywhere."
    },
    {
      id: "5.2",
      title: "End violence against women and girls",
      description: "Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation."
    },
    {
      id: "5.3",
      title: "Eliminate harmful practices",
      description: "Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation."
    },
    {
      id: "5.4",
      title: "Value unpaid care and domestic work",
      description: "Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate."
    },
    {
      id: "5.5",
      title: "Ensure women's participation and leadership",
      description: "Ensure women's full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life."
    },
    {
      id: "5.6",
      title: "Universal access to reproductive health and rights",
      description: "Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences."
    },
    {
      id: "5.a",
      title: "Equal rights to economic resources",
      description: "Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws."
    },
    {
      id: "5.b",
      title: "Promote empowerment through technology",
      description: "Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women."
    },
    {
      id: "5.c",
      title: "Adopt policies for gender equality",
      description: "Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels."
    }
  ];

  const challenges = [
    {
      title: "Wage Gap",
      description: "Women globally earn less than men for the same work, with the gender pay gap averaging around 20%."
    },
    {
      title: "Gender-Based Violence",
      description: "One in three women worldwide experiences physical or sexual violence during their lifetime."
    },
    {
      title: "Limited Leadership Roles",
      description: "Women remain underrepresented in leadership positions in both politics and business."
    },
    {
      title: "Unequal Access to Education",
      description: "Girls face more barriers to education in many regions, especially at secondary and tertiary levels."
    },
    {
      title: "Legal Discrimination",
      description: "Many countries still have laws that explicitly discriminate against women and girls."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FF3A21] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            5
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 5: Gender Equality</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Achieve gender equality and empower all women and girls.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Gender Equality Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Gender equality is not only a fundamental human right but also a necessary foundation for a peaceful, 
                prosperous, and sustainable world. Despite progress in recent decades, gender inequalities persist 
                in all countries.
              </p>
              <p className="text-lg mb-6">
                Women and girls continue to face discrimination and violence, have less access to education and 
                economic opportunities, and are underrepresented in political and economic decision-making processes.
              </p>
              <p className="text-lg">
                SDG 5 aims to end all forms of discrimination against women and girls, eliminate harmful practices, 
                ensure women's full participation in leadership, and provide universal access to sexual and reproductive 
                health and rights. Empowering women and girls helps expand economic growth, promote social development, 
                and establish more stable and just societies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1574221120589-ebc13f2d5334?auto=format&fit=crop&w=500&q=80" 
                alt="Women's leadership" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1621352404112-52559ba24ed3?auto=format&fit=crop&w=500&q=80" 
                alt="Gender equality" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=500&q=80" 
                alt="Women's empowerment" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=500&q=80" 
                alt="Girls education" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 5 Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target) => (
              <Card key={target.id} className="border-l-4 border-[#FF3A21]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-[#FF3A21] font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Gender Equality Challenges</h2>
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

      <section className="py-12 bg-[#FF3A21] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Learn More About SDGs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore all the Sustainable Development Goals and see how they interconnect to build a better future for everyone.
          </p>
          <Button asChild className="bg-[#FF3A21] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/sdglist">View All SDGs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG5Detail; 