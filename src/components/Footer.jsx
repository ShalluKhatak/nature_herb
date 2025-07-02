
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold">NatureHurb</h3>
            </div>
            <p className="text-green-200 mb-6 max-w-md">
              Your trusted source for natural healing. We believe in the power of nature to support your wellness journey with carefully curated herbs and expert guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-green-200">hello@naturehurb.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-green-200">1-800-HERBS-24</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-green-200">Natural Wellness Center, Earth</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">All Herbs A-Z</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Health Conditions</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Herb Interactions</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Preparation Guide</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Safety Information</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Herb Encyclopedia</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Research Studies</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Expert Articles</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-green-200 hover:text-green-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-300">
            © 2024 NatureHurb. All rights reserved. | 
            <a href="#" className="hover:text-green-400 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-green-400 ml-1">Terms of Service</a>
          </p>
          <p className="text-green-400 text-sm mt-2">
            ⚠️ Always consult with healthcare professionals before using herbs for medicinal purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
