import Layout from '@/components/Layout';
import SDGCard from '@/components/SDGCard';
import useScrollToTop from "@/hooks/useScrollToTop";

const SDGList = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  const sdgs = [
    {
      id: 1,
      title: "No Poverty",
      color: "#E5243B",
      description: "End poverty in all its forms everywhere.",
      link: "/sdg1"
    },
    {
      id: 2,
      title: "Zero Hunger",
      color: "#DDA63A",
      description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
      link: "/sdg2"
    },
    {
      id: 3,
      title: "Good Health and Well-being",
      color: "#4C9F38",
      description: "Ensure healthy lives and promote well-being for all at all ages.",
      link: "/sdg3"
    },
    {
      id: 4,
      title: "Quality Education",
      color: "#C5192D",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      link: "/sdg4"
    },
    {
      id: 5,
      title: "Gender Equality",
      color: "#FF3A21",
      description: "Achieve gender equality and empower all women and girls.",
      link: "/sdg5"
    },
    {
      id: 6,
      title: "Clean Water and Sanitation",
      color: "#26BDE2",
      description: "Ensure availability and sustainable management of water and sanitation for all.",
      link: "/sdg6"
    },
    {
      id: 7,
      title: "Affordable and Clean Energy",
      color: "#FCC30B",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
      link: "/sdg7"
    },
    {
      id: 8,
      title: "Decent Work and Economic Growth",
      color: "#A21942",
      description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
      link: "/sdg8"
    },
    {
      id: 9,
      title: "Industry, Innovation and Infrastructure",
      color: "#FD6925",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
      link: "/sdg9"
    },
    {
      id: 10,
      title: "Reduced Inequalities",
      color: "#DD1367",
      description: "Reduce inequality within and among countries.",
      link: "/sdg10"
    },
    {
      id: 11,
      title: "Sustainable Cities and Communities",
      color: "#FD9D24",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
      link: "/sdg11"
    },
    {
      id: 12,
      title: "Responsible Consumption and Production",
      color: "#BF8B2E",
      description: "Ensure sustainable consumption and production patterns.",
      link: "/sdg12"
    },
    {
      id: 13,
      title: "Climate Action",
      color: "#3F7E44",
      description: "Take urgent action to combat climate change and its impacts.",
      link: "/sdg13"
    },
    {
      id: 14,
      title: "Life Below Water",
      color: "#0A97D9",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
      link: "/sdg14"
    },
    {
      id: 15,
      title: "Life on Land",
      color: "#56C02B",
      description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
      link: "/sdg15"
    },
    {
      id: 16,
      title: "Peace, Justice and Strong Institutions",
      color: "#00689D",
      description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
      link: "/sdg16"
    },
    {
      id: 17,
      title: "Partnerships for the Goals",
      color: "#19486A",
      description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
      link: "/sdg17"
    }
  ];

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-sdg-navy mb-6 text-center">UN Sustainable Development Goals</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            The 17 Sustainable Development Goals (SDGs) are the world's shared plan to end extreme poverty, reduce inequality, and protect the planet by 2030.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg) => (
              <SDGCard
                key={sdg.id}
                id={sdg.id}
                title={sdg.title}
                color={sdg.color}
                description={sdg.description}
                link={sdg.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-sdg-navy mb-4">How to Use This Resource</h2>
            <p className="text-gray-600 mb-6">
              Click on any SDG card to learn more about its targets. For SDG 4 (Quality Education), we've created a special
              Scratch tutorial to help you build a game or story that raises awareness about education challenges and solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://sdgs.un.org/goals" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-sdg-blue hover:bg-sdg-navy text-white px-6 py-2 rounded-full text-center inline-block"
              >
                Visit UN SDG Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SDGList;
