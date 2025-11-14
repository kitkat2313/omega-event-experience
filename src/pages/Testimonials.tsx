import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Star, Play } from "lucide-react";
import videoCorporate from "@/assets/video-corporate.jpg";
import videoBirthday from "@/assets/video-birthday.jpg";
import videoWedding from "@/assets/video-wedding.jpg";

const testimonials = [
  {
    name: "Sarah & Michael Thompson",
    event: "Wedding Reception",
    rating: 5,
    text: "Omega Events transformed our wedding into an absolute fairy tale. Every detail was perfect, from the stunning floral arrangements to the seamless coordination. Our guests still talk about how magical the evening was!",
    date: "October 2024",
  },
  {
    name: "David Chen",
    event: "Corporate Gala",
    rating: 5,
    text: "Professional, creative, and incredibly organized. The team managed our 300-person corporate gala flawlessly. The AV production was spectacular, and the timeline execution was impeccable.",
    date: "September 2024",
  },
  {
    name: "Jennifer Martinez",
    event: "50th Birthday Celebration",
    rating: 5,
    text: "They turned my vision into reality and exceeded all expectations. The themed décor was breathtaking, and the entertainment they arranged kept everyone dancing all night. Absolutely worth every penny!",
    date: "August 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Client Testimonials
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in">
            Hear from our delighted clients
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <Section className="pb-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Corporate Event Success", image: videoCorporate },
              { id: 2, title: "Birthday Celebration", image: videoBirthday },
              { id: 3, title: "Wedding Dreams Come True", image: videoWedding }
            ].map((video) => (
              <Card key={video.id} className="group cursor-pointer overflow-hidden hover-scale">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform glow-gold">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-sub font-semibold text-foreground">
                    {video.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Written Testimonials */}
      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-sub font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {testimonial.event}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-1">
                    {testimonial.date}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Testimonials;
