
import { Search, Leaf, Menu, User, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import AuthModal from "./auth/AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    setIsLoggedIn(true);
  };

  const openLoginModal = () => {
    setAuthModalTab("login");
    setIsAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthModalTab("signup");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-green-800">NatureHurb</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Herbs</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Health Conditions</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Learn</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9 bg-green-50 hover:bg-green-100 text-green-700"
                >
                  <User className="h-4 w-4" />
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex items-center gap-1.5 text-sm text-green-700 border-green-200 hover:bg-green-50"
                    onClick={openLoginModal}
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Log in</span>
                  </Button>
                  <Button
                    size="sm"
                    className="hidden md:flex items-center gap-1.5 text-sm bg-green-600 hover:bg-green-700"
                    onClick={openSignupModal}
                  >
                    <span>Sign up</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-gray-700"
                    onClick={openLoginModal}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </>
              )}
              
              <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-green-600 transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-green-100 space-y-4">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-green-600 py-2">Herbs</a>
                <a href="#" className="text-gray-700 hover:text-green-600 py-2">Health Conditions</a>
                <a href="#" className="text-gray-700 hover:text-green-600 py-2">Learn</a>
                <a href="#" className="text-gray-700 hover:text-green-600 py-2">About</a>
              </nav>
              
              {!isLoggedIn && (
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant="outline"
                    className="w-full justify-center text-green-700 border-green-200 hover:bg-green-50"
                    onClick={openLoginModal}
                  >
                    Log in
                  </Button>
                  <Button
                    className="w-full justify-center bg-green-600 hover:bg-green-700"
                    onClick={openSignupModal}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        defaultTab={authModalTab}
      />
    </>
  );
};

export default Header;
