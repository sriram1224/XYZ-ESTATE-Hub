import heroImage from "./assets/hero-tenants.jpg";

const HeroSection = () => {
  return (
    <section className="relative p-2  md:p-10 md:pt-16 overflow-hidden bg-gradient-to-br from-cream to-soft-blue min-h-screen  flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl text-start lg:text-6xl font-bold leading-tight text-[#4D3E33]">
                Find Your
                <span className="block bg-gradient-to-r from-warm-orange to-primary bg-clip-text text-transparent">
                  Home Fast
                </span>
              </h1>
              <p className="text-xl text-start text-warm-gray leading-relaxed max-w-lg justify-center">
                Verified apartments and instant bookings. Your perfect rental is
                just a click away with our trusted platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                variant="hero"
                size="lg"
                className="inline-flex items-center justify-center rounded-md px-8 py-3 
  bg-gradient-to-r from-warm-orange to-primary 
  text-lg font-semibold text-white
  shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Browse Listings
              </button>
              <button
                variant="hero-outline"
                size="lg"
                className=" 
                inline-flex items-center justify-center rounded-md px-8 py-3 
  bg-white
  text-lg font-semibold text-primary border-2 border-warm-orange
  shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-warm-orange hover:text-white"
              >
                Talk to Us
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-warm-gray">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10,000+ Happy Tenants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Verified Listings</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy tenants in their modern apartment"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2 Hours</div>
                <div className="text-sm text-warm-gray">
                  Average Booking Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
