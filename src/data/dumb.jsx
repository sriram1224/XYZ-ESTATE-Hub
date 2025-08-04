import statsIllustration from "./assets/illus 1.svg";

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
    <section className="relative overflow-hidden py-24 bg-background">
      {/* Background Illustration on Right */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-0">
        <img
          src={statsIllustration}
          alt="Background illustration"
          className="h-full w-full object-contain opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Text & Stats */}
        <div className="w-full lg:w-1/2">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Our platform has become the preferred choice for discerning
              renters and property owners worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow hover:shadow-lg transition duration-300"
              >
                <div className="text-primary mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.number}
                  {stat.label === "Average Rating" && (
                    <span className="text-xl">★</span>
                  )}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <p className="text-muted-foreground mb-4">
              Join thousands of satisfied users who've found their perfect home
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow hover:shadow-xl transition-all">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
