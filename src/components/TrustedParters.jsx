import {
  Building2,
  Home,
  KeyRound,
  MapPin,
  Flame,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp } from "../animations";

const partners = [
  { name: "ApartmentList", icon: Building2 },
  { name: "Zillow", icon: Home },
  { name: "Rent.com", icon: KeyRound },
  { name: "PadMapper", icon: MapPin },
  { name: "HotPads", icon: Flame },
  { name: "Realtor.com", icon: Building },
];

const TrustedPartnersSection = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10 border-t border-gray-100 overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={textVariant(0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Trusted by Leading Rental Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our partners help millions of renters and property owners every day.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 active:scale-95"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary/10 text-primary p-3 rounded-full mb-3"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-center text-foreground">
                  {partner.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustedPartnersSection;
