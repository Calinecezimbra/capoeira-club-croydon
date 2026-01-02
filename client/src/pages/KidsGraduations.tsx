import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, Users, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function KidsGraduations() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const achievements = [
    {
      icon: Award,
      title: "Belt Progression",
      desc: "Students advance through color belts as they master new movements and demonstrate dedication."
    },
    {
      icon: Heart,
      title: "Confidence Building",
      desc: "Capoeira develops self-esteem, courage, and a strong sense of identity in all our students."
    },
    {
      icon: Users,
      title: "Community Connection",
      desc: "Students build lasting friendships and become part of a supportive, multicultural family."
    },
    {
      icon: Zap,
      title: "Physical Fitness",
      desc: "Improved strength, flexibility, agility, and overall health through dynamic capoeira training."
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
            Kids & Adults Graduations
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Celebrating the progress and achievements of our students, adults, and youngest capoeiristas with family and friends.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Makes Our Graduation Program Special
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              More than just exercise, our graduation ceremonies celebrate character, confidence, and cultural pride through the ancient art of capoeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Graduation Showcase */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Graduation Celebrations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our graduation ceremonies are special occasions where students showcase what they've learned and celebrate their achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What Happens */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/20">
                      <span className="text-secondary font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Skills Demonstration</h4>
                    <p className="text-muted-foreground text-sm">Students showcase movements and techniques they've mastered</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/20">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Belt Advancement</h4>
                    <p className="text-muted-foreground text-sm">Students receive their new belts recognizing their progress</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/20">
                      <span className="text-secondary font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Family Celebration</h4>
                    <p className="text-muted-foreground text-sm">Family and friends celebrate together and witness achievements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/20">
                      <span className="text-secondary font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Community Time</h4>
                    <p className="text-muted-foreground text-sm">Refreshments and socializing with the capoeira family</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why It Matters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/5 p-10 rounded-2xl border border-secondary/20"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Why Graduations Matter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">Building Self-Esteem</h4>
                  <p className="text-muted-foreground text-sm">Recognition of hard work boosts confidence and motivation</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Goal Setting</h4>
                  <p className="text-muted-foreground text-sm">Graduations provide clear milestones and goals to work toward</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Family Bonding</h4>
                  <p className="text-muted-foreground text-sm">Loved ones witness growth and progress firsthand</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Community Pride</h4>
                  <p className="text-muted-foreground text-sm">Students feel part of something bigger than themselves</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Cultural Heritage</h4>
                  <p className="text-muted-foreground text-sm">Celebrating African-Brazilian traditions and their importance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Ready to Start Your Capoeira Journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kids-class">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                  View Kids Classes
                </Button>
              </Link>
              <Link href="/adult-class">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                  View Adult Classes
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Register Interest
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
