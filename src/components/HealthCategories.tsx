
import { Heart, Brain, Shield, Zap, Moon, Flower } from "lucide-react";

const HealthCategories = () => {
  const categories = [
    {
      name: "Heart Health",
      icon: Heart,
      description: "Support cardiovascular wellness",
      herbCount: 24,
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Brain & Memory",
      icon: Brain,
      description: "Enhance cognitive function",
      herbCount: 18,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Immune Support",
      icon: Shield,
      description: "Strengthen natural defenses",
      herbCount: 32,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Energy & Vitality",
      icon: Zap,
      description: "Boost natural energy levels",
      herbCount: 21,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Sleep & Relaxation",
      icon: Moon,
      description: "Promote restful sleep",
      herbCount: 16,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      name: "Digestive Health",
      icon: Flower,
      description: "Support digestive wellness",
      herbCount: 28,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Browse by Health Condition</h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Find herbs specifically curated for your health goals and wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-green-900">{category.name}</h3>
                    <p className="text-green-600 text-sm">{category.herbCount} herbs available</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">Explore herbs →</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-500 transition-colors"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthCategories;
