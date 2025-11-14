import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero3D } from "@/components/Hero3D";
import { Section, Card } from "@/components/ui/animated-components";
import { Heart, Briefcase, Cake, Music, Sparkles, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import weddingImg from "@/assets/wedding-service.jpg";
import corporateImg from "@/assets/corporate-service.jpg";
import birthdayImg from "@/assets/birthday-service.jpg";
import soundLightingImg from "@/assets/sound-lighting-service.jpg";
import themeDecorImg from "@/assets/theme-decor-service.jpg";
import photographyImg from "@/assets/photography-service.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Crafting your dream wedding with every detail perfectly orchestrated.",
    image: weddingImg,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event management that elevates your brand presence.",
    image: corporateImg,
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Making milestone moments truly spectacular and memorable.",
    image: birthdayImg,
  },
  {
    icon: Music,
    title: "Sound & Lighting",
    description: "Premium audio-visual solutions for immersive event experiences.",
    image: soundLightingImg,
  },
  {
    icon: Sparkles,
    title: "Theme Décor",
    description: "Transforming venues with stunning, bespoke decoration concepts.",
    image: themeDecorImg,
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing every precious moment with cinematic excellence.",
    image: photographyImg,
  },
];

const stats = [
  { value: "500+", label: "Events Executed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 3D Hero Section */}
      <Hero3D />

      {/* Stats Section */}
      <Section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="font-sub text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group cursor-pointer overflow-hidden">
                {service.image && (
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4 ${!service.image ? 'mt-4' : ''}`}>
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Omega
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in every detail, passion in every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Industry veterans with a decade of event management excellence",
              },
              {
                title: "Tailored Solutions",
                description: "Every event uniquely designed to match your vision perfectly",
              },
              {
                title: "End-to-End Service",
                description: "Complete event management from concept to flawless execution",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold-glow flex items-center justify-center mx-auto mb-4 glow-gold">
                  <Sparkles className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4">
          <Card className="text-center max-w-4xl mx-auto glass-strong">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="font-sub text-lg text-muted-foreground mb-8">
              Let's turn your celebration into an unforgettable experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold-strong">
                  Book Your Event
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-sub font-semibold px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
