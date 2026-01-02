import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Star, Target, Globe } from "lucide-react";
import { Link } from "wouter";

export default function SchoolCollaborations() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const benefits = [
    {
      icon: BookOpen,
      title: "Cultural Education",
      desc: "Students learn about Afro-Brazilian heritage, history, and the cultural significance of Capoeira beyond just the physical movements."
    },
    {
      icon: Users,
      title: "Physical Activity",
      desc: "Engaging, fun movement that improves coordination, strength, flexibility, and overall health in a dynamic way."
    },
    {
      icon: Heart,
      title: "Confidence Building",
      desc: "Kids develop self-esteem, discipline, and a sense of belonging to a supportive community."
    },
    {
      icon: Star,
      title: "Diversity & Inclusion",
      desc: "Celebrate diverse cultures and create an inclusive environment where all students feel valued and represented."
    },
    {
      icon: Target,
      title: "Life Skills",
      desc: "Learn discipline, respect, teamwork, and resilience through traditional capoeira training principles."
    },
    {
      icon: Globe,
      title: "Community Connection",
      desc: "Students connect with our club, discover new interests, and potentially join ongoing classes."
    }
  ];

  const programs = [
    {
      title: "Interactive Workshop",
      duration: "45-60 minutes",
      desc: "Introduction to capoeira with history lesson, basic movements, and games. Perfect for assembly or PE class."
    },
    {
      title: "Multi-Session Program",
      duration: "4-6 weeks",
      desc: "Structured series of sessions building on each other, allowing students to develop real skills and progress."
    },
    {
      title: "School Events",
      duration: "Varies",
      desc: "Special performances or workshops for school cultural events, health week, or diversity celebrations."
    },
    {
      title: "Teacher Training",
      duration: "Custom",
      desc: "Professional development for educators interested in incorporating capoeira elements into their classes."
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
            School Collaborations
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Bringing the energy and culture of Capoeira to local schools and educational organizations.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our school collaboration program brings cultural education, physical activity, and community engagement to students of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                  <h3 className="text-lg font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Program Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We customize our workshops and collaborations to meet your school's needs and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-border p-8 hover:shadow-xl transition-shadow"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                  {program.duration}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Students Learn
            </h2>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl border border-border p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Physical Skills</h3>
                <ul className="space-y-3">
                  {["Basic capoeira movements (ginga, kicks, escapes)", "Rhythm and coordination", "Balance and flexibility", "Strength and agility", "Partner awareness and safety"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <span className="text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Cultural & Life Skills</h3>
                <ul className="space-y-3">
                  {["African & Brazilian history and heritage", "Respect and discipline", "Teamwork and community", "Self-confidence and courage", "Cultural appreciation and diversity"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              School Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The capoeira workshop was an absolute hit with our students. They were engaged, energetic, and learned about an amazing culture. Highly recommended!",
                author: "PE Teacher, Local Primary School"
              },
              {
                quote: "Students who are usually disengaged came alive during the capoeira sessions. The blend of movement, music, and cultural education was perfect.",
                author: "School Activities Coordinator"
              },
              {
                quote: "What impressed me most was how the instructors created a safe, inclusive space where every student felt welcome and encouraged to participate.",
                author: "Secondary School Head of Year"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Interested in Bringing Capoeira to Your School?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Get in touch with us to discuss customized workshop options, pricing, and availability for your school or educational organization.
            </p>
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
