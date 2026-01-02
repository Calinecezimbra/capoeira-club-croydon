import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { RegisterInterestDialog } from "@/components/RegisterInterestDialog";
import { FamilyClassRegistrationDialog } from "@/components/FamilyClassRegistrationDialog";
import { SENDClassRegistrationDialog } from "@/components/SENDClassRegistrationDialog";
import { Link } from "wouter";

export default function Classes() {
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
            src="/images/dbaa9dde-18d4-44d6-934c-66eecb60b77a.jpg" 
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
            Classes & Programs
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Join our supportive community where beginners and experienced practitioners train together.
          </motion.p>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Weekly Schedule</h2>
              <p className="text-muted-foreground">All classes are held at our Croydon location.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kids Class */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary/10 p-6 border-b border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">Kids Capoeira</h3>
                  <p className="text-secondary font-bold">Ages 5-12</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Fridays</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">5:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Croydon, UK</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Specially designed for children, offering an exciting and educational experience. Sessions are all about fun, movement, and learning!
                  </p>
                  <Link href="/kids-class">
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
                  </Link>
                </div>
              </motion.div>

              {/* Adults Class */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/5 p-6 border-b border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">Adults Capoeira</h3>
                  <p className="text-secondary font-bold">All Levels</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Fridays</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">7:30 PM - 8:45 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Croydon, UK</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    A fun and supportive way to learn the basics or advance your skills. Explore movements, music, and history with expert guidance.
                  </p>
                  <Link href="/adult-class">
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
                  </Link>
                </div>
              </motion.div>

              {/* Parents & Kids Class */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary/10 p-6 border-b border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">Parents & Kids Capoeira</h3>
                  <p className="text-secondary font-bold">Family Session</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Saturdays (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">TBA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Croydon, UK</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    A wonderful opportunity for parents and children to bond, move, and learn together. Build strength and connection as a family unit.
                  </p>
                  <FamilyClassRegistrationDialog 
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  />
                </div>
              </motion.div>

              {/* Kids SEND Class */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary/10 p-6 border-b border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">Kids SEND Capoeira</h3>
                  <p className="text-secondary font-bold">Inclusive Session</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Wednesdays (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">TBA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-primary">Croydon, UK</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    A tailored, supportive environment for children with Special Educational Needs and Disabilities. Focus on sensory engagement and motor skills.
                  </p>
                  <SENDClassRegistrationDialog 
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">What Happens in Class</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every class is a journey through the different elements of Capoeira.
            </p>
          </div>
          
          {/* Kids Learning Instruments Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="/images/kids-instruments.jpg" 
              alt="Kids learning Capoeira instruments" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Movement & Fitness",
                desc: "Strength, flexibility, balance, rhythm"
              },
              {
                title: "Music & Tradition",
                desc: "Berimbau, songs, call-and-response"
              },
              {
                title: "Game & Awareness",
                desc: "Strategy, timing, and communication"
              },
              {
                title: "Culture & History",
                desc: "Learning the roots and meaning of Capoeira"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl text-center border border-border"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
