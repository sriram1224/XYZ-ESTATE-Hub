import features from "../data/featuresData";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp } from "../animations";

const FeaturedSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#FCFAF8] p-10"
    >
      <motion.h1 
        variants={textVariant(0.2)}
        className="text-3xl lg:text-4xl font-bold text-center text-[#4D3E33] mb-8"
      >
        Why Choose <span className="text-primary">XYZ</span>
      </motion.h1>
      <motion.div variants={fadeInUp(0.4)}>
        <p className="text-center text-lg text-[#7a6f66] mb-12">
          We make finding and renting your perfect home simple, secure, and
          stress-free.
        </p>
      </motion.div>
      <motion.div 
        variants={staggerContainer(0.1, 0.2)}
        className="container mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {features.map((feature, index) => {
          const Icons = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex p-6 flex-col  gap-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#f7d6ab] to bg-[#c3e9ff] rounded-2xl flex items-center justify-center group-hover:scale-110"
              >
                <Icons className="w-8 h-8 text-[#e68333]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-start text-[#4d4d95]">
                  {feature.title}
                </h3>
              </div>
              <p className=" text-start text-[#7a6f66] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default FeaturedSection;
