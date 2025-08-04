import image2 from "./assets/tenenats 3.jpg";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants, textVariant, fadeInUp } from "../animations";
const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    image: image2,
    quote:
      "Found my dream apartment in just 2 hours! The verification process gave me complete peace of mind.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "The instant booking feature is a game-changer. No more waiting weeks for landlord responses!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote:
      "24/7 support team helped me through every step. Best rental experience I've ever had.",
    rating: 5,
  },
];

const EnhancedTestimonialsSection = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          variants={textVariant(0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Our Tenants Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who found their perfect home with us.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, rotate: 1, scale: 1.02 }}
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-serif">
                &ldquo;
              </div>

              <div className="flex text-primary mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current animate-scale-in"
                    style={{
                      animationDelay: `${index * 0.2 + i * 0.1}s`,
                    }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-foreground italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground flex items-center">
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
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnhancedTestimonialsSection;
