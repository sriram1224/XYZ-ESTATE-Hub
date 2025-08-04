import image1 from "./assets/1.jpg";
import image2 from "./assets/2.png";
import image3 from "./assets/3.jpg";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp, scaleIn } from "../animations";

const LuxuryPropertiesSection = () => {
  const badges = [
    {
      title: "Premium Concierge",
      desc: "24/7 dedicated concierge service for all luxury property residents",
      icon: (
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
    },
    {
      title: "Verified Luxury",
      desc: "Every luxury property undergoes rigorous quality and authenticity verification",
      icon: (
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      title: "Instant Booking",
      desc: "Skip the waiting lists - book your luxury property instantly online",
      icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-background to-muted relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          variants={textVariant(0.2)}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary border border-primary/20 text-sm font-medium rounded-full">
            Premium Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Luxury Properties
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Discover exceptional homes where modern architecture meets
            unparalleled comfort. Each property is carefully curated for the
            most discerning tenants.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid gap-8 max-w-7xl mx-auto"
        >
          <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-xl group animate-fade-in">
            <img
              src={image1}
              alt="Luxury Modern Villa with Pool"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

            <span className="absolute top-8 left-8 bg-primary text-white px-4 py-2 text-sm font-semibold rounded-full shadow">
              ✨ Ultra Luxury
            </span>

            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
              <div className="text-2xl font-bold text-primary">$12,500</div>
              <div className="text-sm text-warm-gray">per month</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-start">
              <div className="max-w-4xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Modern Architectural Masterpiece
                </h3>
                <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                  A stunning contemporary villa featuring floor-to-ceiling
                  windows, infinity pool, and panoramic views.
                </p>

                <div className="flex flex-wrap gap-6 mb-8 text-white">
                  {[
                    "5 Bedrooms",
                    "4 Bathrooms",
                    "4,500 sqft",
                    "Infinity Pool",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold text-base">
                    Schedule Private Tour
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-foreground px-8 py-3 rounded-xl font-semibold text-base backdrop-blur-sm">
                    View Floor Plans
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in delay-[300ms]">
            {/* Property 2 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg group">
              <img
                src={image2}
                alt="Luxury Villa with Infinity Pool"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <span className="absolute top-6 left-6 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 items-center">
                🏊 Pool Villa
              </span>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="text-xl font-bold text-primary">$18,900</div>
                <div className="text-xs text-warm-gray">per month</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-start">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Twilight Paradise Villa
                </h4>
                <p className="text-sm text-gray-200 mb-4">
                  Ultra-modern villa with infinity pool and evening
                  entertainment spaces.
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-white text-xs items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>6 Bedrooms</span>
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>5 Bathrooms</span>
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>6,200 sqft</span>
                </div>

                <button className="bg-primary items-start hover:bg-primary/90 text-white text-sm  px-5 py-2 rounded-lg font-medium">
                  Explore Property
                </button>
              </div>
            </div>

            {/* Property 3 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg group">
              <img
                src={image3}
                alt="Contemporary Glass House"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <span className="absolute top-6 left-6 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold rounded-full p-2 bg-gray-100 items-center">
                🌿 Eco-Luxury
              </span>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="text-xl font-bold text-primary">$15,600</div>
                <div className="text-xs text-warm-gray">per month</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-start">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Glass House Sanctuary
                </h4>
                <p className="text-sm text-gray-200 mb-4">
                  Contemporary architecture blending seamlessly with nature.
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-white text-xs items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>4 Bedrooms</span>
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>3 Bathrooms</span>
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>3,800 sqft</span>
                </div>

                <button className="bg-primary hover:bg-primary/90 text-white text-sm px-5 py-2 rounded-lg font-medium">
                  Explore Property
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-[600ms] ">
            {badges.map((feature, idx) => (
              <div
                key={idx}
                className="text-center bg-white p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16  bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-warm-gray">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LuxuryPropertiesSection;
