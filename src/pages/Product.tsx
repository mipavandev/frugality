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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-[#0A3052]/5">
      <Navigation />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3052]/10 via-transparent to-[#0A3052]/5" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0A3052]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A3052]/5 rounded-full blur-[100px]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            {/* Left Side - Product Info (Fixed to prevent shaking) */}
            <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-[#0A3052]/10 border border-[#0A3052]/20 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-[#0A3052]">Product Showcase</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Your Financial
                  <span className="block bg-gradient-to-r from-[#0A3052] via-[#0D3B63] to-[#0A3052] bg-clip-text text-transparent">
                    Command Center
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Take control of your finances with our intuitive platform. Track, analyze, and optimize your spending with cutting-edge AI technology.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-[#0A3052]/30 hover:bg-[#0A3052]/5 transition-all duration-500 hover:translate-x-2 group shadow-lg hover:shadow-xl"
                  >
                    <div className="p-3 rounded-xl bg-[#0A3052]/10 group-hover:bg-[#0A3052]/20 transition-colors duration-300 border border-[#0A3052]/20">
                      <feature.icon className="w-6 h-6 text-[#0A3052]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="group bg-[#0A3052] hover:bg-[#0D3B63] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started
                  <Check className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#0A3052]/30 text-[#0A3052] hover:bg-[#0A3052]/5 hover:border-[#0A3052] transition-all duration-300 hover:scale-105">
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
