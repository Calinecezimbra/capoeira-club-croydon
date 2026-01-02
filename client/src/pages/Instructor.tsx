import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Award, Music, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Instructor() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Hero Profile */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative sticky top-32"
              >
                <div className="absolute inset-0 bg-secondary rounded-2xl transform -translate-x-4 translate-y-4"></div>
                <img 
                  src="/images/professora-areia-portrait.jpg" 
                  alt="Professora Areia" 
                  className="relative z-10 rounded-2xl w-full shadow-2xl"
                />
                
                <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-border relative z-20">
                  <h3 className="font-heading font-bold text-xl mb-4">Key Credentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Award className="h-5 w-5 text-secondary shrink-0" />
                      <span>Capoeira Professor & Dance Instructor</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Award className="h-5 w-5 text-secondary shrink-0" />
                      <span>Degree in Business & Marketing (2025)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Award className="h-5 w-5 text-secondary shrink-0" />
                      <span>Physical Education & Coaching Certification</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Award className="h-5 w-5 text-secondary shrink-0" />
                      <span>Autism Awareness Diploma</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
              >
                <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold text-primary mb-2">
                  Professora "Areia"
                </motion.h1>
                <motion.h2 variants={fadeIn} className="text-2xl text-secondary font-bold mb-8">
                  Caline Cezimbra
                </motion.h2>
                
                <motion.div variants={fadeIn} className="prose prose-lg text-muted-foreground mb-10">
                  <p className="lead text-xl text-primary font-medium">
                    "It's not just a martial art to me, it's a way of life, a connection to my cultural heritage, and a powerful tool for transformation."
                  </p>
                  
                  <p>
                    Hello, I'm Caline Cezimbra, and I'm honoured to be known in the Capoeira community as Professora "Areia." Since 2006, I've had the privilege of being part of London's vibrant Capoeira scene, sharing the art form I love with students from all walks of life.
                  </p>
                  
                  <p>
                    I was born and raised in Brazil, and my passion for Capoeira and Brazilian dance runs deep in my soul. Beyond teaching Capoeira, I also specialise in Brazilian rhythms, bringing the heartbeat of Brazil into every class and creating immersive cultural experiences for my students.
                  </p>
                  
                  <p>
                    As a teacher, I believe in blending the physical discipline of Capoeira with its profound historical and cultural roots. My mission is to foster confidence and empowerment in every student who walks through our doors, with a special dedication to helping women discover their strength and leadership within this beautiful art form.
                  </p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-muted/30 p-8 rounded-2xl border-l-4 border-secondary mb-10">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">My Journey of Growth and Purpose</h3>
                  <p className="text-muted-foreground mb-4">
                    Earlier this year, in April, I was diagnosed with breast cancer. This diagnosis changed my perspective on everything, but it also revealed something profound: the true power of Capoeira.
                  </p>
                  <p className="text-muted-foreground font-medium italic">
                    "During my battle, I turned to the art form that has defined my life, and it became my sanctuary, my strength, and my weapon against fear. Capoeira kept me moving, kept me fighting, and kept my spirit alive."
                  </p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="h-6 w-6 text-secondary" />
                      <h3 className="text-xl font-bold text-primary">Empowering Women</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      From my personal struggle, I've made it my mission to empower and bring awareness to women facing similar journeys. We've expanded our events to include breast cancer awareness initiatives, creating a space where women can find strength together.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Music className="h-6 w-6 text-secondary" />
                      <h3 className="text-xl font-bold text-primary">Voice & Passion</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Music has always been my way of telling stories. My song "A Minha Capoeira" is available on Spotify, representing my deep connection to this art form and my desire to share its essence with the world.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8">
                      Train With Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              See Professora Areia in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch demonstrations and performances showcasing the art of Capoeira and Brazilian dance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/sCyH4bY61q8" 
                  className="w-full h-full"
                  title="Professora Areia Capoeira"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/iZrG02v0Vos" 
                  className="w-full h-full"
                  title="Professora Areia Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/tO-DJejcKBk" 
                  className="w-full h-full"
                  title="Professora Areia Black History Month"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
