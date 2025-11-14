import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Silver",
    price: "$2,999",
    description: "Perfect for intimate gatherings and small celebrations",
    features: [
      "Up to 50 guests",
      "Venue consultation",
      "Basic décor package",
      "Standard sound system",
      "Photography (4 hours)",
      "Event coordination",
      "Timeline management",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "$6,999",
    description: "Ideal for medium-sized events with premium features",
    features: [
      "Up to 150 guests",
      "Premium venue selection",
      "Premium décor package",
      "Professional sound & lighting",
      "Photography & Videography (6 hours)",
      "Full event planning",
      "Dedicated coordinator",
      "Custom theme design",
      "Catering coordination",
    ],
    popular: true,
  },
  {
    name: "Platinum VIP",
    price: "$15,999+",
    description: "The ultimate luxury experience for grand celebrations",
    features: [
      "Unlimited guests",
      "Exclusive venue access",
      "Luxury custom décor",
      "Premium AV production",
      "Full-day photography & videography",
      "Drone coverage",
      "Complete event design",
      "Personal event designer",
      "Premium catering",
      "Entertainment booking",
      "Valet & concierge services",
      "Post-event video editing",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Event Packages
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Choose the perfect package for your celebration
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  pkg.popular
                    ? "border-2 border-primary glow-gold-strong scale-105"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-sub font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-heading text-4xl font-bold text-gradient-gold mb-3">
                    {pkg.price}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/book" className="block">
                  <Button
                    className={`w-full font-sub font-semibold ${
                      pkg.popular
                        ? "bg-primary hover:bg-gold-glow text-primary-foreground glow-gold"
                        : "bg-card hover:bg-muted text-foreground border border-border"
                    }`}
                  >
                    Select {pkg.name}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Custom Package CTA */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="text-center max-w-4xl mx-auto glass-strong">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Package?
            </h2>
            <p className="font-sub text-lg text-muted-foreground mb-8">
              Every event is unique. Let's create a bespoke package tailored specifically to your needs and budget.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold-strong">
                Request Custom Quote
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Payment Info */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Package Information
            </h2>
            <Card className="glass">
              <div className="space-y-4 font-body text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Flexible Payment:</strong> We offer convenient payment plans to make your dream event accessible.
                </p>
                <p>
                  <strong className="text-foreground">Customization:</strong> All packages can be customized with additional services and upgrades.
                </p>
                <p>
                  <strong className="text-foreground">Pricing:</strong> Final pricing may vary based on specific requirements, venue, and date. A detailed quote will be provided after consultation.
                </p>
                <p>
                  <strong className="text-foreground">Booking:</strong> A non-refundable deposit secures your event date. Balance due 30 days before the event.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
