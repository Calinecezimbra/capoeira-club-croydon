import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";
import { EventRegistrationDialog } from "@/components/EventRegistrationDialog";

export default function Events() {
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
            Events & Workshops
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Celebrating culture, community, and heritage beyond the training space.
          </motion.p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-muted/30 rounded-3xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider w-fit">
                  Upcoming Highlight
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Black History Month Celebration
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our event workshop is a tribute to the African heritage and cultural significance of Capoeira, reflecting its roots and the journey of resilience, strength, and unity. This special occasion highlights the dedication of our students and honors the community they've helped build.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-primary font-medium">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span>16/17 October 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary font-medium">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span>Capoeira Club Croydon</span>
                  </div>
                </div>
                
                <EventRegistrationDialog 
                  triggerText="Register Interest"
                  className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                />
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/images/user_upload/05dd1999-0cfa-4c3e-8f15-2a1415f1dd60.jpg" 
                  alt="Event" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Community Activities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are active beyond the training space through various initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kids & Adults Graduations",
                desc: "Celebrating the progress and achievements of our students, adults, and youngest capoeiristas with family and friends.",
                link: "/kids-graduations"
              },
              {
                title: "School Collaborations",
                desc: "Bringing the energy and culture of Capoeira to local schools and educational organizations.",
                link: "/school-collaborations"
              },
              {
                title: "Breast Cancer Awareness",
                desc: "Empowerment initiatives and support circles for women, led by Professora Areia.",
                link: "/breast-cancer-awareness"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-secondary transition-colors ${item.link ? 'cursor-pointer' : ''}`}
              >
                {item.link ? (
                  <Link href={item.link}>
                    <h3 className="text-xl font-bold text-primary mb-4 hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
