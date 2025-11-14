import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Heart, Briefcase, Cake, Music, Sparkles, Camera, Utensils, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import weddingImg from "@/assets/wedding-service.jpg";
import corporateImg from "@/assets/corporate-service.jpg";
import birthdayImg from "@/assets/birthday-service.jpg";
import soundLightingImg from "@/assets/sound-lighting-service.jpg";
import themeDecorImg from "@/assets/theme-decor-service.jpg";
import photographyImg from "@/assets/photography-service.jpg";
import cateringImg from "@/assets/catering-service.jpg";
import venueImg from "@/assets/venue-service.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "From intimate ceremonies to grand receptions, we orchestrate every moment of your special day with precision and elegance. Our comprehensive wedding planning includes venue selection, décor design, catering coordination, and timeline management.",
    image: weddingImg,
    features: ["Venue Selection", "Décor & Styling", "Vendor Coordination", "Timeline Management"],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Elevate your brand with professional corporate events that leave lasting impressions. From conferences and product launches to team-building activities and galas, we ensure seamless execution that reflects your company's excellence.",
    image: corporateImg,
    features: ["Conferences & Seminars", "Product Launches", "Award Ceremonies", "Team Building"],
  },
  {
    icon: Cake,
    title: "Birthday & Anniversaries",
    description: "Make milestone moments truly spectacular with our bespoke celebration planning. Whether it's an intimate gathering or a grand party, we create memorable experiences tailored to your unique vision and style.",
    image: birthdayImg,
    features: ["Theme Development", "Venue Transformation", "Entertainment Booking", "Custom Cakes & Catering"],
  },
  {
    icon: Music,
    title: "Sound & Lighting",
    description: "State-of-the-art audio-visual solutions that create immersive event experiences. Professional sound systems, dynamic lighting design, and LED displays that bring your event to life with technical excellence.",
    image: soundLightingImg,
    features: ["Professional Sound Systems", "Dynamic Lighting Design", "LED Displays", "Stage Setup"],
  },
  {
    icon: Sparkles,
    title: "Theme Décor",
    description: "Transform any venue into a breathtaking space with our creative décor concepts. From elegant florals to dramatic installations, we craft stunning visual experiences that captivate and inspire your guests.",
    image: themeDecorImg,
    features: ["Floral Arrangements", "Fabric Draping", "Prop Design", "Entrance Décor"],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Capture every precious moment with cinematic excellence. Our professional photography and videography services ensure your memories are preserved in stunning detail, telling the story of your event beautifully.",
    image: photographyImg,
    features: ["Event Photography", "Cinematic Videography", "Drone Coverage", "Same-Day Edits"],
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Delight your guests with exceptional culinary experiences. Our catering partners deliver exquisite menus tailored to your preferences, dietary requirements, and event theme, ensuring every bite is memorable.",
    image: cateringImg,
    features: ["Custom Menus", "Live Cooking Stations", "Beverage Services", "Dietary Accommodations"],
  },
  {
    icon: MapPin,
    title: "Venue Management",
    description: "End-to-end venue management that handles every logistical detail. From setup to breakdown, we ensure your chosen space is perfectly prepared and professionally managed throughout your event.",
    image: venueImg,
    features: ["Site Inspection", "Layout Planning", "Logistics Coordination", "Vendor Access Management"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Our Premium Services
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive event solutions tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group overflow-hidden">
                {service.image && (
                  <div className="w-full h-64 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-sub text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="font-body text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/book" className="block">
                    <Button className="w-full bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold glow-gold">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="text-center max-w-4xl mx-auto glass-strong">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="font-sub text-lg text-muted-foreground mb-8">
              Let's discuss your event requirements and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold-strong">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-sub font-semibold px-8 py-6 text-lg">
                  View Packages
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

export default Services;
