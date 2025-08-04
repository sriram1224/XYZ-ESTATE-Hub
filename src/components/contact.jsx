import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeInUp, scaleIn } from "../animations";

/**
 * A Call-To-Action (CTA) section designed to match the provided image.
 * It features a clean, light background with warm orange accents for buttons and highlights.
 * The layout encourages user interaction through an email subscription form and action buttons.
 */
const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    // Section container with a light, warm off-white background.
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#eff4f6] via-[#e8f6fd] to-[#fbf1e3] py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMTJCOTgxIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik02MCA2MEwzMCAzMHY2MGg2MFYzMEw2MCA2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Introductory content block with a fade-in animation */}
          <motion.div 
            variants={textVariant(0.2)}
            className="mb-10"
          >
            {/* "Join our community" badge with orange accents */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-grey-100 border border-[#F18C5A] px-4 py-1.5 text-sm font-semibold text-[#F18C5A]">
              <span className="h-2 w-2 rounded-full bg-[#F18C5A]"></span>
              Join our community
            </div>

            {/* Main Headline with a highlighted part */}
            <h2 className="mb-4 text-4xl font-bold text-gray-800 lg:text-5xl">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-[#f2994a] to-primary-glow bg-clip-text text-transparent">
                Perfect Home
              </span>
            </h2>

            {/* Supporting paragraph with muted text */}
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
              Get early access to new listings and exclusive rental deals. Join
              thousands of satisfied tenants.
            </p>
          </motion.div>

          {/* Email subscription form */}
          <motion.div
            variants={fadeInUp(0.4)}
            className="mb-8"
          >
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-lg border border-gray-300 bg-white px-5 text-base text-gray-800 placeholder-gray-400 transition-shadow duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
              <button
                type="submit"
                className="h-12 transform rounded-lg bg-[#F18C5A] px-8 font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={fadeInUp(0.6)}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button className="h-12 w-full transform rounded-lg bg-[#F18C5A] px-8 font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95 sm:w-auto">
              Browse Listings
            </button>
            <button className="h-12 w-full transform rounded-lg border border-[#F18C5A] bg-white px-8 font-semibold text-orange-500 shadow-sm transition-all duration-300 hover:bg-orange-50 hover:shadow-md active:scale-95 sm:w-auto">
              Talk to Us
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp(0.8)}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1112 0v2h-2V6a4 4 0 10-8 0v2H4zM2 8v10h16V8H2zm14 2H4v6h12v-6z" />
              </svg>
              <span>Your data is secure with us</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft, floating decorative elements to match the image's aesthetic */}
      <motion.div 
        variants={fadeInUp(1.0)}
        className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse"
      ></motion.div>
      <motion.div
        variants={fadeInUp(1.2)}
        className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>
      <motion.div
        variants={fadeInUp(1.4)}
        className="absolute top-1/2 right-1/4 w-12 h-12 bg-warm-orange/20 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></motion.div>
    </motion.section>
  );
};

export default CTASection;
