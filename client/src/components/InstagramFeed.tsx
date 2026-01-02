import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

interface InstagramPost {
  imageUrl: string;
  caption: string;
}

// Static CTA-only section (grid removed per request)
const FEATURED_POSTS: InstagramPost[] = [];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Instagram className="w-5 h-5" />
            <span className="font-semibold">Follow Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See what's happening at Capoeira Club Croydon. Follow us on Instagram for class updates, 
            event highlights, and community moments.
          </p>
        </div>

        {/* CTA-only footer */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Want to see more? Follow us on Instagram to view the latest photos and updates.
          </p>
        </div>
      </div>
    </section>
  );
}
