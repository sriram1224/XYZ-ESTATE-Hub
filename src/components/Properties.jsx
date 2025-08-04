import properties from "../data/properties";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp, scaleIn } from "../animations";
const Properties = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#FCFAF8] p-4 sm:p-6 md:p-10"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          variants={textVariant(0.2)}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#4D3E33] mb-6 sm:mb-8"
        >
          Featured Properties
        </motion.h1>
        <motion.p 
          variants={fadeInUp(0.4)}
          className="text-center text-base sm:text-xl text-[#7a6f66] mb-6"
        >
          Handpicked apartments available for immediate booking
        </motion.p>
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:p-4 md:m-10 mb-5"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-3xl group bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden active:scale-95"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 sm:h-56 md:h-64 group-hover:scale-110 
              transition-transform duration-700 rounded-t-3xl"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full">
                  {property.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-start text-lg sm:text-xl font-bold text-[#4D3E33] mt-1">
                  {property.title}
                </h2>
                <p className="text-[#967760] text-start flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {property.location}
                </p>
                <p className="text-primary text-xl sm:text-2xl text-start font-bold mt-4">
                  {property.price}
                </p>

                <div className="flex flex-wrap gap-2 py-4 sm:py-6 lg:py-8">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs sm:text-sm font-semibold text-[#4D3E33] bg-[#E0EDF7] px-2 sm:px-3 py-1 rounded-xl"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div>
                  <button className="w-full group-hover:bg-primary-glow duration-300 items-center justify-center rounded-2xl px-4 py-3 bg-[#F18C5A] text-base sm:text-lg font-semibold text-white hover:-translate-y-0.5 active:scale-95">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          variants={fadeInUp(0.6)}
          whileHover={{ scale: 1.05, y: -2 }}
          className="group-hover:bg-primary-glow duration-300 border border-[#F18C5A] items-center justify-center rounded-lg px-6 sm:px-12 lg:px-16 py-2 bg-[#ffffff] text-base sm:text-lg font-semibold text-[#F18C5A]
        hover:bg-[#F18C5A] hover:text-white hover:border-[#F18C5A] hover:-translate-y-0.5"
        >
          View More
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Properties;
