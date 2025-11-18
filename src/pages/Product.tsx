import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Product3DCarousel from "@/components/Product3DCarousel";
import { Check, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
  const features = [
    { icon: Sparkles, title: "Smart Analytics", description: "Track your spending patterns with AI-powered insights" },
    { icon: Zap, title: "Instant Notifications", description: "Real-time alerts for every transaction" },
    { icon: Shield, title: "Bank-Level Security", description: "Your data is encrypted and protected" },
  ];

  const mockupScreens = [
    { color: "from-primary/20 via-primary/10 to-transparent", label: "Dashboard" },
    { color: "from-secondary/20 via-secondary/10 to-transparent", label: "Analytics" },
    { color: "from-accent/20 via-accent/10 to-transparent", label: "Goals" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Your Financial
                  <span className="text-primary block">Command Center</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Take control of your finances with our intuitive platform. Track, analyze, and optimize your spending with ease.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <Check className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - 3D Carousel */}
            <div className="relative">
              <Product3DCarousel />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
