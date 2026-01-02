import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function BreastCancerAwareness() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <video 
          src="/images/user_upload/fe7ad302-0754-4278-8575-2dd6479777cd.mp4" 
          autoPlay
          muted
          loop
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-30"
        />
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Breast Cancer Awareness
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Empowerment, support, and community for women through Capoeira
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Led by Professora Areia, our Breast Cancer Awareness initiative brings together women in our community to celebrate strength, resilience, and solidarity. Through Capoeira, we create a safe space for empowerment and mutual support.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This program combines the physical and spiritual benefits of Capoeira with peer support circles, where women can share experiences, find encouragement, and build lasting connections with others on similar journeys.
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Get Involved
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img 
                src="/images/user_upload/CACB8031-CFE4-46BF-817C-591311BF201F.jpg" 
                alt="Breast cancer support group" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Video Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-video">
              <iframe 
                src="https://www.youtube.com/embed/ZVZsH-pWapo" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-muted-foreground leading-relaxed">
              Monitora Jinga shares her poema from our Black History Month event, honouring breast cancer awareness and giving space for women to tell their stories.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                Our Three Pillars
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Support Circles",
                  desc: "Safe spaces where women can share their stories, listen to others, and provide mutual encouragement and compassion."
                },
                {
                  icon: Zap,
                  title: "Physical Empowerment",
                  desc: "Capoeira builds strength, confidence, and body awareness while celebrating the beauty and power of movement."
                },
                {
                  icon: Users,
                  title: "Community Building",
                  desc: "Creating lasting connections and friendships with women who understand the journey of resilience and healing."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-border"
                  >
                    <Icon className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Professora Areia Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/10 rounded-3xl p-12 md:p-16 border border-secondary/20"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Led by Professora Areia
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Professora Areia brings not only her expertise in Capoeira but also her deep commitment to women's empowerment and wellness. Her compassionate approach creates an environment where healing and growth flourish.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through her leadership, this initiative has become a beacon of hope and strength for women in our community facing breast cancer and seeking support from others who understand their journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/real/4c2900dd-dfa1-485b-a837-8a2061fe47ab.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90"
          >
            Whether you're seeking support, wanting to support others, or simply interested in learning more, we welcome you with open arms and open hearts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 font-bold text-lg">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
