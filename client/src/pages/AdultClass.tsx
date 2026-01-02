import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Calendar, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function AdultClass() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const products = [
    {
      title: "Trial Capoeira Class",
      price: "£0.00",
      description: "Free trial class to get started",
      link: "https://buy.stripe.com/dRm9AUa7X3Dg0H51VEawo07"
    },
    {
      title: "Pay as You Go Adult Class",
      price: "£15.00",
      description: "Single class session",
      link: "https://buy.stripe.com/bJe9AU1BrehU4Xl2ZIawo0b"
    },
    {
      title: "Capoeira 4-Class Pass",
      price: "£55.00",
      description: "4 class sessions package",
      link: "https://buy.stripe.com/9B614obc1c9M9dBbweawo0d"
    },
    {
      title: "Adult Capoeira Term Pass – 12 Weeks",
      price: "£150.00",
      description: "Term-long access to all classes",
      link: "https://buy.stripe.com/14AcN6dk93DgblJ2ZIawo0c"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/images/real/4c2900dd-dfa1-485b-a837-8a2061fe47ab.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Adults Capoeira Class
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Dynamic and empowering class for adults of all levels
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Left Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Pay as You Go Adult Class
              </h2>
              
              <div className="mb-8">
                <p className="text-5xl font-bold text-secondary mb-6">£15.00</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Description */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-4">About This Class</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Capoeira Club Croydon invites you to experience the dynamic energy of Capoeira, a martial art that blends dance, acrobatics, and music. Our adult classes offer a fun and engaging way to improve fitness, flexibility, and coordination while immersing yourself in Capoeira's rich cultural heritage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This option is perfect for those who prefer flexibility and do not want to commit to multiple classes in advance.
                </p>
              </div>

              {/* Class Schedule */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-secondary" />
                  Class Schedule
                </h3>
                <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
                  <p className="text-lg font-semibold text-primary mb-2">🔹 Fridays 7:30 PM to 8:45 PM</p>
                  <p className="text-muted-foreground">Duration: 1 hour 15 minutes per session</p>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 mb-8">
                <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Important
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  After purchasing your class, please send a message on WhatsApp to confirm your attendance.
                </p>
              </div>

              {/* Why Join */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">What You'll Get</h3>
                <ul className="space-y-4">
                  {[
                    "Expert instruction from certified Capoeiristas",
                    "Full-body workout combining fitness and art",
                    "Improved flexibility, strength, and coordination",
                    "Cultural immersion in African-Brazilian heritage",
                    "Supportive community of adults at all skill levels",
                    "Stress relief and personal empowerment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Related Products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Other Options</h3>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    id={index === 0 ? "trial-class" : undefined}
                    className="p-6 hover:border-secondary transition-colors"
                  >
                    <h4 className="font-bold text-primary mb-2 text-sm">{product.title}</h4>
                    <p className="text-muted-foreground text-xs mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-secondary mb-4">{product.price}</p>
                    {product.link ? (
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Book Now
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                  </Card>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 bg-primary text-primary-foreground rounded-2xl p-6 text-center">
                <p className="mb-4 font-semibold">Have questions?</p>
                <Link href="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Levels Info */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-border"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">All Levels Welcome</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Whether you're a complete beginner or have prior experience with Capoeira or other martial arts, our adult classes are designed to accommodate all skill levels. Our instructors provide modifications and progressions so everyone can train at their own pace.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No experience necessary—just bring your enthusiasm, willingness to learn, and an open mind. Join our vibrant community of adults who are discovering the joy and power of Capoeira!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
