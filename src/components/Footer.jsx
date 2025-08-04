import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "../animations";

const Footer = () => {
  return (
    <motion.footer 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#4D3E33] text-white"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid grid-cols-1 gap-8 sm:gap-12 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12"
        >
          <motion.div 
            variants={fadeInLeft(0.2)}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold">XYZ ESTATE Hub </h3>
            <p className="max-w-md text-sm sm:text-base text-gray-300 leading-relaxed mx-auto sm:mx-0">
              Making rental housing accessible and stress-free for the next
              generation.
            </p>
            <motion.div 
              variants={fadeInUp(0.3)}
              className="flex items-center justify-center sm:justify-start gap-4"
            >
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeInUp(0.4)}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Browse Listings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUp(0.6)}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInRight(0.8)}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm sm:text-base text-gray-300">
              Get the latest news and rental deals sent to your inbox.
            </p>
            <form className="flex w-full max-w-md mx-auto sm:mx-0 overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="h-10 sm:h-11 flex-grow rounded-l-md border border-r-0 border-white/30 bg-white/10 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 transition-all focus:border-white/50 focus:bg-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 sm:h-11 shrink-0 rounded-r-md bg-[#F18C5A] px-3 sm:px-5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#E87E4C] active:scale-95"
                style={{ minHeight: '44px' }}
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeInUp(1.0)}
          className="border-t border-white/20 pt-6 sm:pt-8 text-center"
        >
          <p className="text-sm text-gray-300">
            © 2025 XYZ ESTATE Hub. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
