import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
        <p className="mb-8 opacity-90">
          Subscribe to our newsletter for updates on smarter financial decisions and product launches.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/10 border-background/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
          />
          <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
