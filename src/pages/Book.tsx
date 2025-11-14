import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Book = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    package: "",
    date: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    venue: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm details.",
      });
      // In a real app, this would send data to backend
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Book Your Event
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in">
            Let's create something extraordinary together
          </p>
        </div>
      </section>

      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold transition-all ${
                      step >= num
                        ? "bg-primary text-primary-foreground glow-gold"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                  </div>
                  <span className="font-sub text-xs mt-2 text-muted-foreground">
                    {num === 1 && "Event Type"}
                    {num === 2 && "Details"}
                    {num === 3 && "Contact"}
                    {num === 4 && "Review"}
                  </span>
                </div>
              ))}
            </div>

            <Card className="glass-strong">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Event Type */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Select Event Type
                    </h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="font-sub">Event Type *</Label>
                      <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                        <SelectTrigger className="glass border-glass-border">
                          <SelectValue placeholder="Choose event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="other">Other Celebration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="package" className="font-sub">Preferred Package</Label>
                      <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                        <SelectTrigger className="glass border-glass-border">
                          <SelectValue placeholder="Choose package (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="silver">Silver</SelectItem>
                          <SelectItem value="gold">Gold</SelectItem>
                          <SelectItem value="platinum">Platinum VIP</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Event Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Event Details
                    </h2>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="font-sub">Event Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="font-sub">Expected Guest Count *</Label>
                      <Input
                        id="guests"
                        type="number"
                        required
                        placeholder="e.g., 100"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="venue" className="font-sub">Venue Preference</Label>
                      <Input
                        id="venue"
                        placeholder="Have a venue in mind? (optional)"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Your Information
                    </h2>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-sub">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sub">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sub">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="glass border-glass-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-sub">Additional Notes</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your vision, special requirements, or any questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="glass border-glass-border min-h-[120px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Review & Submit
                    </h2>

                    <div className="space-y-4 font-body">
                      <div className="glass rounded-xl p-4">
                        <div className="text-sm text-muted-foreground mb-1">Event Type</div>
                        <div className="text-foreground capitalize">{formData.eventType || "Not specified"}</div>
                      </div>

                      <div className="glass rounded-xl p-4">
                        <div className="text-sm text-muted-foreground mb-1">Package</div>
                        <div className="text-foreground capitalize">{formData.package || "To be discussed"}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass rounded-xl p-4">
                          <div className="text-sm text-muted-foreground mb-1">Date</div>
                          <div className="text-foreground">{formData.date || "Not set"}</div>
                        </div>
                        <div className="glass rounded-xl p-4">
                          <div className="text-sm text-muted-foreground mb-1">Guests</div>
                          <div className="text-foreground">{formData.guests || "TBD"}</div>
                        </div>
                      </div>

                      <div className="glass rounded-xl p-4">
                        <div className="text-sm text-muted-foreground mb-1">Contact</div>
                        <div className="text-foreground">{formData.name}</div>
                        <div className="text-sm text-muted-foreground">{formData.email}</div>
                        <div className="text-sm text-muted-foreground">{formData.phone}</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground font-body">
                      By submitting this request, you agree to be contacted by our team to discuss your event details and receive a customized quote.
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="ml-auto bg-primary hover:bg-gold-glow text-primary-foreground glow-gold font-sub font-semibold"
                  >
                    {step === 4 ? "Submit Booking Request" : "Continue"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Book;
