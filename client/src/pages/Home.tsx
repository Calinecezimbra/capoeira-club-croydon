import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Music, Heart, Users, Globe, Star, MapPin, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Link } from "wouter";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/v24044gl0000d45815fog65g344e2rb0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="container relative z-10 text-center md:text-left pt-24 pb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/50 backdrop-blur-sm">
              <span className="text-secondary font-bold text-sm tracking-wide uppercase">Women-Led • Community-Powered</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Find Your <span className="text-secondary">Rhythm</span>.<br />
              Build Your <span className="text-secondary">Strength</span>.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              More than a martial art. We are a movement-driven community in Croydon rooted in Afro-Brazilian culture, created to support body, mind, and collective strength.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
              <Link href="/join-now">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 h-14 rounded-full w-full sm:w-auto">
                  Join Our Community
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-12 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-secondary animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* What is Capoeira Section */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/user_upload/5155c082-1dfa-4170-9118-8af7b89f798a.jpg" 
                  alt="Capoeira Roda" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 rounded-xl overflow-hidden shadow-xl border-4 border-background -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                <img 
                  src="/images/instruments-music.jpg" 
                  alt="Capoeira Instruments" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-secondary font-bold uppercase tracking-widest mb-2 text-sm">The Art Form</motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                More Than A Martial Art
              </motion.h3>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Capoeira is a vibrant blend of movement, music, and culture, born from resilience and the enduring pursuit of freedom. It's a game, a dance, and a fight all at once, where creativity flows, strength is tested, and rhythm drives expression.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Capoeira Club Croydon, we use this powerful tool for physical fitness, coordination, confidence, and cultural education.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <Music className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Music & Rhythm</h4>
                    <p className="text-sm text-muted-foreground">Berimbau, songs, and tradition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Culture & History</h4>
                    <p className="text-sm text-muted-foreground">Afro-Brazilian heritage</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Women-Led Leadership Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-bold uppercase tracking-wider">
                  Our Leadership
                </motion.div>
                <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold mb-6">
                  Led by Women.<br />Built for Everyone.
                </motion.h2>
                <motion.p variants={fadeIn} className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                  Capoeira Club Croydon is proudly led by <span className="text-secondary font-bold">Professora Areia</span>, shaping a space where leadership, care, discipline, and empowerment coexist.
                </motion.p>
                
                <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="border-l-2 border-secondary pl-6">
                    <p className="text-lg font-bold text-white mb-2">Inclusive Perspective</p>
                    <p className="text-primary-foreground/70">This perspective influences how classes are taught, how people are welcomed, and how the community grows.</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-6">
                    <p className="text-lg font-bold text-white mb-2">Empowerment Focus</p>
                    <p className="text-primary-foreground/70">A special dedication to helping women discover their strength and leadership within this art form.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-8">
                    <Link href="/instructor">
                      Meet Professora Areia <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/images/leadership-photo.jpg" 
                  alt="Professora Areia" 
                  className="relative z-10 rounded-2xl w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For (Values) */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">
              We use Capoeira as a powerful tool for holistic growth, connecting body, mind, and spirit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Physical Fitness",
                desc: "Strength, flexibility, balance, coordination, and mobility."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Confidence",
                desc: "Self-expression, emotional release, and personal empowerment."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Culture",
                desc: "Afro-Brazilian heritage, history, and authentic traditions."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Belonging",
                desc: "Social connection, mental wellbeing, and supportive community."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 md:py-32 bg-background" id="classes">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold uppercase tracking-widest mb-2 text-sm">Our Offerings</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">Classes & Programs</h3>
            </div>
            <Button variant="outline" className="hidden md:flex">View Full Schedule</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adult Classes */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src="/images/adults-class.jpg" 
                  alt="Adults Capoeira class in action" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  All Levels
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Adults Capoeira</h3>
                <p className="text-muted-foreground mb-6">
                  Join our supportive adult classes where beginners and experienced practitioners train together. Build fitness, learn authentic techniques, and connect.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Fridays</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>7:30 PM - 8:40 PM</span>
                </div>
                <a href="https://buy.stripe.com/dRm9AUa7X3Dg0H51VEawo07" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Join Now</Button>
                </a>
              </CardContent>
            </Card>
            
            {/* Kids Classes */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src="/images/kids-instruments.jpg" 
                  alt="Kids learning Capoeira instruments" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  Ages 5-12
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Kids Capoeira</h3>
                <p className="text-muted-foreground mb-6">
                  Specially designed for children, combining fun, movement, and learning. Kids develop coordination, confidence, and cultural awareness.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Fridays</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>5:00 PM - 6:00 PM</span>
                </div>
                <Link href="/kids-class">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Enroll Your Child</Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Events */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src="/images/bhm-event.png" 
                  alt="Black History Month Event" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  Special
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Workshops & Events</h3>
                <p className="text-muted-foreground mb-6">
                  Experience Capoeira beyond regular classes through cultural celebrations, Black History Month events, graduations, and community gatherings.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Check Calendar</span>
                </div>
                <Link href="/events">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">View Events</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full">View Full Schedule</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Community Voices</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Hear from the people who make our community special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Capoeira Club Croydon has transformed my fitness journey. The classes are fun, challenging, and full of energy. Professor Areia's passion is contagious.",
                author: "Benjamin Thistlewood",
                role: "Adult Student"
              },
              {
                quote: "My child loves the kids' classes! The instructors are amazing—fun, patient, and engaging. It's been wonderful to see my child grow in confidence.",
                author: "Emma Thompson",
                role: "Parent"
              },
              {
                quote: "The classes are the highlight of my week. The perfect mix of technique, fitness, and fun, all in a supportive community. I've gained confidence and strength.",
                author: "Oliver Hartman",
                role: "Adult Student"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                <div className="text-secondary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="flex gap-1 mb-4 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-lg italic mb-6 relative z-10 leading-relaxed">
                  {item.quote}
                </p>
                <div>
                  <p className="font-bold text-white">{item.author}</p>
                  <p className="text-sm text-primary-foreground/60">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What should I wear to a Capoeira class?",
                a: "Wear comfortable workout clothes that allow for freedom of movement. Long trousers are recommended to protect your knees. Traditional Capoeira attire such as white pants and a t-shirt is also appropriate once you decide to join regularly."
              },
              {
                q: "Do I need prior experience or fitness level?",
                a: "Not at all! Our classes are open to all levels, from complete beginners to advanced practitioners. We tailor the training to your individual ability and help you build fitness and coordination at your own pace."
              },
              {
                q: "Is Capoeira suitable for all ages?",
                a: "Absolutely! Capoeira is a versatile art form that can be enjoyed by individuals of all ages. We have specific classes for kids (ages 5-12) and adults, ensuring age-appropriate instruction."
              },
              {
                q: "Are there different styles of Capoeira?",
                a: "Yes, there are various styles of Capoeira, each with its unique characteristics and regional influences. Our classes encompass a blend of different styles to provide a well-rounded Capoeira experience."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border mb-4">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Join us for a class and experience the energy, community, and culture of Capoeira Club Croydon.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">Location</p>
                      <p className="text-primary-foreground/70">Croydon, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">Next Class</p>
                      <p className="text-primary-foreground/70">This Friday at 7:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg h-14 rounded-full px-8">
                    Book Your First Class
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 rounded-full px-8">
                    Contact Us
                  </Button>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/images/dbaa9dde-18d4-44d6-934c-66eecb60b77a.jpg" 
                  alt="Join Us" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />
    </Layout>
  );
}
