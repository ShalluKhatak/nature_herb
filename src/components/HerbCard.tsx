
import { Star, Clock, Shield } from "lucide-react";

interface HerbCardProps {
  name: string;
  scientificName: string;
  benefits: string[];
  rating: number;
  preparationTime: string;
  image: string;
  primaryBenefit: string;
}

const HerbCard = ({ name, scientificName, benefits, rating, preparationTime, image, primaryBenefit }: HerbCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
        <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">🌿</div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {primaryBenefit}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-1">{name}</h3>
            <p className="text-sm text-green-600 italic">{scientificName}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Shield className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {preparationTime}
          </div>
          <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HerbCard;
