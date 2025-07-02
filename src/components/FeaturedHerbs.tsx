
import HerbCard from "./HerbCard";

const FeaturedHerbs = () => {
  const featuredHerbs = [
    {
      name: "Turmeric",
      scientificName: "Curcuma longa",
      benefits: ["Anti-inflammatory", "Joint health", "Digestive support", "Immune boost"],
      rating: 4.8,
      preparationTime: "10 min",
      image: "/turmeric.jpg",
      primaryBenefit: "Anti-inflammatory"
    },
    {
      name: "Ginger",
      scientificName: "Zingiber officinale",
      benefits: ["Digestive aid", "Nausea relief", "Anti-inflammatory", "Circulation boost"],
      rating: 4.7,
      preparationTime: "5 min",
      image: "/ginger.jpg",
      primaryBenefit: "Digestive Health"
    },
    {
      name: "Echinacea",
      scientificName: "Echinacea purpurea",
      benefits: ["Immune support", "Cold prevention", "Wound healing", "Antioxidant"],
      rating: 4.6,
      preparationTime: "15 min",
      image: "/echinacea.jpg",
      primaryBenefit: "Immune Support"
    },
    {
      name: "Lavender",
      scientificName: "Lavandula angustifolia",
      benefits: ["Stress relief", "Sleep aid", "Skin health", "Aromatherapy"],
      rating: 4.9,
      preparationTime: "8 min",
      image: "/lavender.jpg",
      primaryBenefit: "Relaxation"
    },
    {
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      benefits: ["Sleep support", "Digestive calm", "Anxiety relief", "Skin soothing"],
      rating: 4.7,
      preparationTime: "12 min",
      image: "/chamomile.jpg",
      primaryBenefit: "Sleep & Calm"
    },
    {
      name: "Ginkgo Biloba",
      scientificName: "Ginkgo biloba",
      benefits: ["Memory support", "Circulation boost", "Brain health", "Antioxidant"],
      rating: 4.5,
      preparationTime: "20 min",
      image: "/ginkgo.jpg",
      primaryBenefit: "Cognitive Health"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Featured Herbs</h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover our most popular herbs, carefully selected for their proven benefits and versatility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHerbs.map((herb, index) => (
            <HerbCard key={index} {...herb} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-100 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-200 transition-colors">
            View All Herbs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHerbs;
