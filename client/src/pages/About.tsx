import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
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
            src="/images/instruments-music.jpg" 
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
            About Us
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            A thriving community embracing the rhythm, movement, and spirit of Capoeira in Croydon.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest mb-2 text-sm">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                More Than A Martial Arts School
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Capoeira Club Croydon, we're not just a martial arts school—we're a thriving community that embraces the rhythm, movement, and spirit of Capoeira. Deeply rooted in Afro-Brazilian traditions, our club combines martial arts, dance, music, and culture to create an exhilarating and enriching experience for everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to provide a welcoming and inclusive environment where individuals of all ages and skill levels can explore the art of Capoeira. Whether you're taking your first steps or are a seasoned practitioner, our classes are designed to help you build strength, boost confidence, and connect deeply with this extraordinary art form.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Inclusive Community</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Global Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Holistic Growth</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3"></div>
              <img 
                src="/images/user_upload/05359527-f528-4f6c-90f7-b9754c6627d2.jpg" 
                alt="Capoeira Community" 
                className="relative z-10 rounded-2xl w-full shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lineage Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Our Lineage & Connection</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We are honored to be part of the broader Capoeira network, preserving the legacy of <span className="font-bold text-primary">Master Hiram Ribeiro</span>, who founded Capoeira Club London in 2012. Through this connection, our students gain authentic insights into Capoeira's rich history, evolving techniques, and cultural significance.
          </p>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            At Capoeira Club Croydon, you're not just learning a martial art—you're joining a global family. Our classes seamlessly combine physical training, creativity, and self-expression, all within a supportive and inspiring community that empowers you to grow and thrive.
          </p>
          
          <Link href="/instructor">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8">
              Meet Our Instructor <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
