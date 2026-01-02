import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "wouter";

export default function Graduations() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            Graduations
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Celebrating the progress and achievements of our capoeiristas with family and friends.
          </motion.p>
        </div>
      </section>

      {/* Graduations Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Kids & Adults Graduations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our graduation ceremonies celebrate the dedication, progress, and achievements of our students as they advance their capoeira journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kids Graduations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-20 w-20 text-secondary mx-auto mb-4" />
                  <p className="text-primary font-bold text-lg">Kids Graduations</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Kids Graduations</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Celebrating the progress and achievements of our youngest capoeiristas with family and friends. These special events mark important milestones in their capoeira journey, showcasing their growth, dedication, and the bonds they've built within our community.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    </div>
                    <p className="text-primary">Young warriors showing their newfound skills and confidence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    </div>
                    <p className="text-primary">Family celebrations and community support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    </div>
                    <p className="text-primary">Recognition of hard work and progress</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    </div>
                    <p className="text-primary">Advancement to new belt levels</p>
                  </div>
                </div>

                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Register Interest
                </Button>
              </div>
            </motion.div>

            {/* Adults Graduations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-20 w-20 text-accent mx-auto mb-4" />
                  <p className="text-primary font-bold text-lg">Adults Graduations</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Adults Graduations</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Honoring the commitment and perseverance of our adult students as they progress through their capoeira practice. These ceremonies celebrate discipline, strength, and the transformative power of capoeira in their lives.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-primary">Recognition of dedication and training commitment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-primary">Advancement through skill levels and belts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-primary">Community celebration and support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-primary">Personal growth and transformation stories</p>
                  </div>
                </div>

                <Button className="w-full bg-accent text-white hover:bg-accent/90">
                  Register Interest
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Interested in Graduating?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're a young capoeirista or an adult student, graduation ceremonies are a celebration of your progress and dedication.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
