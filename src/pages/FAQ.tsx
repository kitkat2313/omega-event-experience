import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section, Card } from "@/components/ui/animated-components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer: "We recommend booking 6-12 months in advance for weddings and major events, especially during peak season (May-October). However, we can often accommodate shorter timelines depending on availability. Corporate events and smaller celebrations can typically be arranged with 2-3 months notice.",
  },
  {
    question: "Do you provide services outside your local area?",
    answer: "Yes! While we're based locally, we're happy to travel for destination events. Travel expenses and accommodation for our team will be included in the quote for out-of-area events. We've successfully managed events across the country and internationally.",
  },
  {
    question: "Can I customize a package to fit my budget?",
    answer: "Absolutely! Our packages are flexible starting points. We work closely with you to create a customized solution that fits your vision and budget. We can scale services up or down and suggest alternatives to help you get the most value.",
  },
  {
    question: "What's included in your event coordination service?",
    answer: "Our coordination includes timeline creation, vendor management, setup supervision, day-of coordination, problem-solving, and ensuring everything runs smoothly. We're there from setup to breakdown, managing all logistics so you can enjoy your event stress-free.",
  },
  {
    question: "Do you have partnerships with vendors?",
    answer: "Yes, we have established relationships with top-tier vendors including caterers, photographers, florists, entertainment, and rental companies. These partnerships often result in better rates and priority service for our clients. However, you're welcome to use your own vendors too.",
  },
  {
    question: "What happens if something goes wrong on the event day?",
    answer: "Our experienced team is prepared for any situation. We have contingency plans for common issues and are experts at quick problem-solving. We maintain backup vendor contacts and have protocols for weather, technical issues, or last-minute changes. Your event is insured and protected.",
  },
  {
    question: "How does the payment process work?",
    answer: "We require a non-refundable deposit (typically 25-30%) to secure your date. The remaining balance is due 30 days before the event. We accept various payment methods and can discuss payment plans for larger events to make budgeting easier.",
  },
  {
    question: "Can you help with venue selection?",
    answer: "Yes! Venue selection is one of our core services. We know the best venues in the area and can recommend options based on your guest count, style preferences, and budget. We'll schedule tours, negotiate contracts, and handle all venue coordination.",
  },
  {
    question: "Do you provide décor and rentals?",
    answer: "We design and coordinate all décor elements. We work with trusted rental companies for furniture, linens, lighting, and props. Our design team creates cohesive themes and ensures every visual element aligns with your vision.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer: "We understand plans can change. Deposits are non-refundable, but we're flexible with rescheduling when possible. The earlier you notify us, the more options we have. Each situation is unique, and we'll work with you to find the best solution. Terms are detailed in our contract.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in">
            Everything you need to know about our services
          </p>
        </div>
      </section>

      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto glass-strong">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="font-sub text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto glass text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              We're here to help! Reach out to our team for personalized answers to your event planning questions.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold rounded-xl glow-gold transition-all">
                Contact Us
              </button>
            </a>
          </Card>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
