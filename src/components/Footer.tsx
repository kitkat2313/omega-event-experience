import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-glow flex items-center justify-center glow-gold">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-gradient-gold">
                  OMEGA
                </span>
                <span className="font-sub text-xs text-muted-foreground -mt-1">
                  Event Management
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating unforgettable celebrations with premium event planning and management services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Packages", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Sound & Lighting</li>
              <li>Venue Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@omegaevents.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Event Plaza, Celebration City, CC 12345</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:glow-gold transition-all"
                >
                  <Icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Omega Event Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
