import statsIllustration from "./assets/illus 1.svg";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp, floatingAnimation, pulseAnimation } from "../animations";

const stats = [
  {
    number: "10k+",
    label: "Happy Tenants",
    description: "Satisfied residents nationwide",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: "2.5k+",
    label: "Verified Properties",
    description: "Premium locations available",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    number: "4.9",
    label: "Average Rating",
    description: "Based on verified reviews",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const StatsSection = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-32 relative overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-background to-accent/5">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img
            src={statsIllustration}
            alt="Family with house illustration"
            className="w-full h-full max-w-2xl object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/90"></div>
      </div>

      <div className="absolute top-20 left-4 sm:left-20 w-8 h-8 sm:w-16 sm:h-16 bg-primary/5 rounded-full blur-sm"></div>
      <div className="absolute bottom-20 right-4 sm:right-20 w-6 h-6 sm:w-12 sm:h-12 bg-accent/5 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 right-4 sm:right-1/4 w-5 h-5 sm:w-10 sm:h-10 bg-secondary/5 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 left-4 sm:left-1/4 w-4 h-4 sm:w-8 sm:h-8 bg-primary/5 rounded-full blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Platform Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-white to-foreground bg-clip-text">
            Proven Results
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Numbers that speak for themselves — join a community that's
            revolutionizing the rental experience.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-border/50 bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
                <div className="text-primary mb-4 sm:mb-6 lg:mb-8 group-hover:text-primary transition-all duration-500 group-hover:scale-125 transform flex justify-center">
                  {stat.icon}
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500 text-center">
                  <span className="text-primary group-hover:text-primary/90">
                    {stat.number}
                  </span>
                  {stat.label === "Average Rating" && (
                    <span className="text-xl sm:text-2xl lg:text-3xl text-yellow-500">★</span>
                  )}
                </div>

                <div className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 text-center group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>

                <div className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                  {stat.description}
                </div>

                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 rounded-3xl border border-primary/20 backdrop-blur-md">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Ready to become part of our success story?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                size="lg"
                className="px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-primary to-primary/90 text-accent/90 text-white active:scale-95"
              >
                Join the Community
              </button>
              <button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white active:scale-95"
              >
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
