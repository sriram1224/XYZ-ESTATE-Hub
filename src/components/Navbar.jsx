import { useEffect, useState } from "react";
import { LogIn, UserPlus, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navVariants, fadeInLeft, fadeInRight } from "../animations";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down → hide navbar
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 bg-background/80  backdrop-blur-xl border-b border-b-[#ffd9a3] border-border/50  transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            variants={fadeInLeft(0.2)}
            className="flex items-center"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#f28d34] to-[#9d8777] bg-clip-text text-transparent">
                XYZ ESTATE
              </span>
              <span className="text-foreground font-medium"> Hub</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInRight(0.4)}
            className="hidden md:flex items-center gap-3"
          >
            <button
              variant="ghost"
              className="group relative overflow-hidden h-10 px-3 hover:px-6 min-w-[40px] hover:min-w-[80px] bg-transparent border border-[#3d51ff]  transition-all duration-500 ease-out rounded-xl"
            >
              <div className="flex items-center justify-center">
                <LogIn className="w-5 h-5 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 text-[#3d51ff] group-hover:-translate-x-2 " />
                <span className="absolute whitespace-nowrap font-medium text-sm opacity-0 scale-75 translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 text-[#3d51ff]">
                  Login
                </span>
              </div>
            </button>

            <button
              variant="outline"
              className="group relative overflow-hidden h-10 px-3 hover:px-6 min-w-[40px] hover:min-w-[90px] border border-[#ff782a]  hover:text-primary-foreground transition-all duration-500 ease-out rounded-xl shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                <UserPlus className="w-5 h-5 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-2 text-[#ff782a]" />
                <span className="absolute whitespace-nowrap font-medium text-sm opacity-0 scale-75 translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 text-[#ff782a]">
                  Sign Up
                </span>
              </div>
            </button>
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <div className="flex flex-col gap-3 px-4">
              <button className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-transparent border border-[#3d51ff] text-[#3d51ff] rounded-lg font-medium">
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#ff782a] text-white rounded-lg font-medium">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
