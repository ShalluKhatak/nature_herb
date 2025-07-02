
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
          Natural Healing
          <span className="block text-green-600">Made Simple</span>
        </h1>
        
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the power of nature's pharmacy. Find the perfect herbs for your health needs, 
          backed by traditional wisdom and modern understanding.
        </p>

        <div className="relative max-w-lg mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
            <input
              type="text"
              placeholder="Search herbs or health conditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none text-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
            Explore Herbs
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
