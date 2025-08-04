import {
  Building2,
  Home,
  KeyRound,
  MapPin,
  Flame,
  Building,
} from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Trusted by Leading Rental Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our partners help millions of renters and property owners every day.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-center text-foreground">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
