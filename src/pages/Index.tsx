
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedHerbs from "../components/FeaturedHerbs";
import HealthCategories from "../components/HealthCategories";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedHerbs />
      <HealthCategories />
      <Footer />
    </div>
  );
};

export default Index;
