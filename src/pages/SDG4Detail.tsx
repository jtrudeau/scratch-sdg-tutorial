import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SDG4Detail = () => {
  const targets = [
    {
      id: "4.1",
      title: "Free primary and secondary education",
      description: "By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes."
    },
    {
      id: "4.2",
      title: "Early childhood development",
      description: "By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education."
    },
    {
      id: "4.3",
      title: "Equal access to technical/vocational and higher education",
      description: "By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university."
    },
    {
      id: "4.4",
      title: "Relevant skills for employment",
      description: "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship."
    },
    {
      id: "4.5",
      title: "Eliminate inequality in education",
      description: "By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations."
    },
    {
      id: "4.6",
      title: "Universal literacy and numeracy",
      description: "By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy."
    },
    {
      id: "4.7",
      title: "Education for sustainable development",
      description: "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture's contribution to sustainable development."
    },
    {
      id: "4.a",
      title: "Build and upgrade inclusive education facilities",
      description: "Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all."
    },
    {
      id: "4.b",
      title: "Expand scholarships for higher education",
      description: "By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries."
    },
    {
      id: "4.c",
      title: "Increase supply of qualified teachers",
      description: "By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States."
    }
  ];

  const challenges = [
    {
      title: "Lack of Access",
      description: "Many children around the world don't have schools nearby or can't afford education."
    },
    {
      title: "Education Quality",
      description: "Some schools don't have enough resources, trained teachers, or good learning materials."
    },
    {
      title: "Gender Inequality",
      description: "In some places, girls don't get the same educational opportunities as boys."
    },
    {
      title: "Conflict & Emergencies",
      description: "Wars, natural disasters, and health crises can interrupt education."
    },
    {
      title: "Digital Divide",
      description: "Not everyone has access to computers, internet, or digital learning tools."
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-sdg-education rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            4
          </div>
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">SDG 4: Quality Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Why Education Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Education is a basic human right and a key to unlocking opportunities. When quality education 
                is available to all, it helps reduce inequality, increase economic growth, and build more 
                peaceful societies.
              </p>
              <p className="text-lg mb-6">
                However, millions of children worldwide still don't have access to education, and 
                many more aren't learning effectively even when they attend school. The COVID-19 pandemic 
                made this situation even worse, with school closures affecting over 1.5 billion students.
              </p>
              <p className="text-lg">
                SDG 4 aims to address these problems by ensuring everyone has access to quality education,
                from early childhood through adulthood. This includes both formal schooling and developing 
                practical skills for life and work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80" 
                alt="Books and education" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" 
                alt="Students collaborating" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80" 
                alt="Classroom learning" 
                className="rounded-lg shadow-md w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80" 
                alt="Digital education" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">SDG 4 Targets</h2>
          
          <h3 className="text-2xl font-bold text-sdg-navy mb-6">Core Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {targets.slice(0, 7).map((target) => (
              <Card key={target.id} className="border-l-4 border-sdg-education">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-sdg-education font-bold mr-2">{target.id}</span>
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
            {targets.slice(7).map((target) => (
              <Card key={target.id} className="border-l-4 border-sdg-education">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-sdg-education font-bold mr-2">{target.id}</span>
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
          <h2 className="text-3xl font-bold text-sdg-navy mb-8 text-center">Education Challenges</h2>
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

      <section className="py-12 bg-sdg-education bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sdg-navy mb-6">Ready to Start Coding?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn to create a Scratch project that helps solve education challenges and promotes SDG 4!
          </p>
          <Button asChild className="bg-sdg-education hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg">
            <Link to="/tutorial">Start the Tutorial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SDG4Detail;
