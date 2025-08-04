import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../animations";
import heroImage from "./assets/hero-tenants.jpg";

const HeroSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative p-4 sm:p-6 md:p-10 md:pt-16 overflow-hidden bg-gradient-to-br from-cream to-soft-blue min-h-screen flex items-center"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={fadeIn} className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4D3E33] text-center lg:text-start">
                Find Your
                <span className="block bg-gradient-to-r from-warm-orange to-primary bg-clip-text text-transparent">
                  Home Fast
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-center lg:text-start text-warm-gray leading-relaxed max-w-lg mx-auto lg:mx-0">
                Verified apartments and instant bookings. Your perfect rental is
                just a click away with our trusted platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                variant="hero"
                size="lg"
                className="inline-flex items-center justify-center rounded-md px-6 sm:px-8 py-4 
  bg-gradient-to-r from-warm-orange to-primary 
  text-base sm:text-lg font-semibold text-white
  shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                Browse Listings
              </button>
              <button
                variant="hero-outline"
                size="lg"
                className=" 
                inline-flex items-center justify-center rounded-md px-6 sm:px-8 py-4 
  bg-white
  text-base sm:text-lg font-semibold text-primary border-2 border-warm-orange
  shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-warm-orange hover:text-white active:scale-95"
              >
                Talk to Us
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-warm-gray justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10,000+ Happy Tenants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Verified Listings</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={zoomIn(0.4, 1)} className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy tenants in their modern apartment"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:left-4 lg:-left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">2 Hours</div>
                <div className="text-xs sm:text-sm text-warm-gray">
                  Average Booking Time
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
