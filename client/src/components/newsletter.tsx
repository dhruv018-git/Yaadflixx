import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll be the first to know about new releases.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="scroll-fade">
          <div 
            className="glass-morphism rounded-2xl p-12 text-center bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1478720568477-b0829c5c6dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600')`
            }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-newsletter">Never Miss a Release</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-newsletter-description">
                Subscribe to our newsletter and be the first to know about new movies, exclusive content, and special offers.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-muted/80 backdrop-blur-sm border-border text-foreground placeholder-muted-foreground"
                  data-testid="input-email"
                  required
                />
                <Button 
                  type="submit"
                  className="gradient-button px-6 py-3 rounded-lg text-white font-semibold"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
