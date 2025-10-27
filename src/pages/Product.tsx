import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <Construction className="w-24 h-24 mx-auto mb-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Under Development</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're working hard to bring you an exceptional financial awareness platform. 
            Our product is currently under development and will be launching soon.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Stay tuned for a platform that will transform how you engage with your finances — 
            with clarity, purpose, and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Early Access
              </Button>
            </Link>
            <a href="#newsletter">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Subscribe for Updates
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
