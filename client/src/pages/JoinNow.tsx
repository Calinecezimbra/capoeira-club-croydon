import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Heart, Smile, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function JoinNow() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/adults-class.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Welcome to Your Capoeira Journey!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We're thrilled you're ready to join us. Whether you're a complete beginner or returning to Capoeira, you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                  Book Your First Class
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              Why You'll Love Capoeira
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than just a martial art - it's a complete experience for body, mind, and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Supportive Community",
                description: "Join a welcoming family where everyone supports each other's growth."
              },
              {
                icon: Smile,
                title: "Fun & Energizing",
                description: "Every class is dynamic, musical, and genuinely enjoyable."
              },
              {
                icon: Trophy,
                title: "Visible Progress",
                description: "See yourself improve week by week with clear milestones and graduations."
              },
              {
                icon: Users,
                title: "All Levels Welcome",
                description: "Beginners and experienced practitioners train side by side."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
                Your First Class Experience
              </h2>
              <p className="text-muted-foreground text-lg">
                Here's what to expect when you join us for the first time.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Warm Welcome",
                  description: "Arrive 10 minutes early. Professora Areia will greet you personally and introduce you to the group. Everyone is friendly and excited to meet you!"
                },
                {
                  step: "2",
                  title: "Learn the Basics",
                  description: "We start with fundamental movements at your pace. Don't worry about getting everything perfect - Capoeira is a journey, not a sprint."
                },
                {
                  step: "3",
                  title: "Music & Culture",
                  description: "You'll experience the music of Capoeira - the berimbau, songs, and rhythms that make this art form unique."
                },
                {
                  step: "4",
                  title: "Join the Roda",
                  description: "Watch others play in the circle (roda) and when you're ready, you'll be invited to try. No pressure - you can watch as much as you need."
                },
                {
                  step: "5",
                  title: "Feel Amazing",
                  description: "Leave feeling energized, welcomed, and excited for your next class. You're officially part of our Capoeira family!"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white p-8 rounded-2xl shadow-md"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-10 md:p-16 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                Class Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">When</h3>
                    <p className="text-primary-foreground/90">Every Friday</p>
                    <p className="text-primary-foreground/90">7:30 PM - 8:40 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Where</h3>
                    <p className="text-primary-foreground/90">Croydon, UK</p>
                    <p className="text-sm text-primary-foreground/80">Exact location provided upon booking</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-primary-foreground/20 pt-8">
                <h3 className="font-bold text-xl mb-4">What to Bring</h3>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Comfortable workout clothes
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Water bottle
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Open mind and positive energy!
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Training barefoot (no shoes needed)
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Your first step is simple - just reach out and let us know you're interested. We'll take care of the rest and make sure you feel welcome from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/adult-class#trial-class">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6">
                  Book Your First Class Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6" asChild>
                <a href="https://wa.me/447871378047" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? We're here to help! Contact us anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
