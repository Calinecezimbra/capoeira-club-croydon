import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Mail, MapPin, Phone, Facebook } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 3h3.2c.2 2.3 1.5 3.8 3.3 4V9c-1.4-.1-2.5-.6-3.3-1.3v4.6c0 2.5-2 4.6-4.5 4.7-2.6 0-4.7-2-4.7-4.6 0-2.5 2-4.6 4.6-4.6.2 0 .3 0 .5.1v2.4c-.2-.1-.3-.1-.5-.1-1.2 0-2.1 1-2.1 2.2s1 2.1 2.2 2.1c1.1 0 2.1-.9 2.1-2V3z" />
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Instructor", href: "/instructor" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              {/* Logo Placeholder - would be replaced by actual logo */}
              <img src="/images/logo.jpg" alt="Capoeira Club Croydon" className="h-12 w-auto rounded-full border-2 border-secondary" />             <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white'} transition-colors`}>
                Capoeira Club <span className="text-secondary">Croydon</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={`text-sm font-medium hover:text-secondary transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-secondary"
                      : isScrolled
                      ? "text-foreground"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/join-now">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                Join Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-foreground md:text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-border">
                <nav className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <span
                        className={`text-lg font-medium hover:text-secondary transition-colors cursor-pointer ${
                          location === link.href ? "text-secondary" : "text-foreground"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  ))}
                  <Link href="/join-now">
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full mt-4">
                      Join Now
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-heading font-bold border border-white/10">
                  CC
                </div>
                <span className="font-heading font-bold text-lg">
                  Capoeira Club <span className="text-secondary">Croydon</span>
                </span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Women-led. Community-powered. Rooted in Afro-Brazilian culture. Building strength, confidence, and connection in Croydon.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/capoeiraclubcroydon/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@capoeira.club.cro" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  <TikTokIcon className="h-5 w-5" />
                                </a>
                                <a href="https://www.facebook.com/p/Capoeira-Club-Croydon-100090366679284/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                  <Facebook className="h-5 w-5" />
                                </a>
                <a href="mailto:capoeiraclubcroydon@gmail.com" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80 text-sm">
                    Croydon, United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    +44 7871 378047
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    info@capoeiraclubcroydon.co.uk
                  </span>
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Capoeira in Motion</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Support our community and wear your strength with our exclusive gymwear.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full"
              >
                <a
                  href="https://capoeirainmotion.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Shop
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Capoeira Club Croydon. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
