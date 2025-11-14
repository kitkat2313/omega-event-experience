import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { useState } from "react";
import { X } from "lucide-react";

// Import gallery images
import wedding1 from "@/assets/gallery-wedding-1.jpg";
import wedding2 from "@/assets/gallery-wedding-2.jpg";
import corporate1 from "@/assets/gallery-corporate-1.jpg";
import corporate2 from "@/assets/gallery-corporate-2.jpg";
import birthday1 from "@/assets/gallery-birthday-1.jpg";
import birthday2 from "@/assets/gallery-birthday-2.jpg";
import stage1 from "@/assets/gallery-stage-1.jpg";
import decor1 from "@/assets/gallery-decor-1.jpg";

const galleryImages = [
  { src: wedding1, alt: "Elegant outdoor wedding ceremony at sunset", category: "Weddings" },
  { src: wedding2, alt: "Luxurious wedding reception ballroom", category: "Weddings" },
  { src: corporate1, alt: "Professional corporate conference", category: "Corporate" },
  { src: corporate2, alt: "Elegant corporate gala dinner", category: "Corporate" },
  { src: birthday1, alt: "Vibrant birthday party celebration", category: "Birthdays" },
  { src: birthday2, alt: "Luxury milestone birthday party", category: "Birthdays" },
  { src: stage1, alt: "Event stage with dramatic lighting", category: "Stage & Lighting" },
  { src: decor1, alt: "Beautiful floral decoration entrance", category: "Décor" },
];

const categories = ["All", "Weddings", "Corporate", "Birthdays", "Stage & Lighting", "Décor"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-12 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Event Gallery
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in">
            Explore our portfolio of unforgettable celebrations and events
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl font-sub font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground glow-gold"
                  : "glass border border-border/50 text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <Card key={idx} className="group overflow-hidden hover-tilt-3d">
                <div 
                  className="relative h-80 overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm font-sub font-semibold mb-2">
                        {image.category}
                      </span>
                      <p className="text-foreground font-body text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full glass border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors z-10"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <div className="max-w-6xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg font-sub font-semibold mb-2">
                {lightboxImage.category}
              </span>
              <p className="text-foreground font-body text-lg">{lightboxImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
