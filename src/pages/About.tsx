import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import workspaceImg from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            About Omega Events
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crafting unforgettable experiences for over a decade
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To transform celebrations into extraordinary experiences through meticulous planning, 
                innovative design, and flawless execution. We believe every event deserves the perfect 
                blend of creativity, elegance, and precision.
              </p>
            </Card>

            <Card>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be the premier choice for luxury event management, setting industry standards 
                for excellence and innovation. We aspire to create moments that become cherished 
                memories for our clients and their guests.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Story with Images */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="rounded-2xl overflow-hidden h-96">
                <img 
                  src={teamImg} 
                  alt="Omega Event Management Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-96">
                <img 
                  src={workspaceImg} 
                  alt="Our Creative Workspace" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <Card className="glass-strong">
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Founded over 10 years ago, Omega Event Management began with a simple yet powerful vision: 
                  to elevate celebrations into extraordinary experiences. What started as a passion project 
                  has evolved into a full-service luxury event management company.
                </p>
                <p>
                  Our journey has been marked by countless successful events, from intimate gatherings to 
                  grand galas. Each celebration has taught us something new, refined our expertise, and 
                  deepened our commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have orchestrated over 500 memorable events, earned the trust of 
                  hundreds of clients, and built a team of passionate professionals who share our dedication 
                  to creating magic.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Uncompromising quality in every detail of your event",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working closely with you to bring your vision to life",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Fresh ideas and creative solutions for unique celebrations",
              },
              {
                icon: TrendingUp,
                title: "Reliability",
                description: "Dependable service and flawless execution every time",
              },
            ].map((value, idx) => (
              <Card key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold-glow flex items-center justify-center mx-auto mb-4 glow-gold">
                  <value.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Preview */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="font-sub text-lg text-muted-foreground mb-12">
              A dedicated group of professionals passionate about creating extraordinary events
            </p>
            <Card className="glass-strong">
              <p className="font-body text-muted-foreground leading-relaxed">
                Our team comprises experienced event planners, creative designers, technical specialists, 
                and logistics experts. Together, we bring over 100 years of combined experience in the 
                events industry. Each member is committed to turning your vision into reality with 
                precision, creativity, and care.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
