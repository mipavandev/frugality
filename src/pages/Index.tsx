import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Redefine Your
                <span className="text-primary"> Financial Journey</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Every payment is a decision. Every rupee deserves its return. 
                We empower you to be frugal, not stingy — making informed, intentional choices without compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Frugality Fintech - Financial Awareness Platform" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Frugality?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that every drop counts. Financial awareness is not a luxury, but a necessity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Decisions</h3>
              <p className="text-muted-foreground">
                Make informed, intentional financial choices backed by intelligent data and insights.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-muted-foreground">
                Your financial data is protected with enterprise-grade security and complete transparency.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Join a community committed to building better financial habits, one penny at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step towards financial clarity and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
              <a 
                href="https://forms.gle/your-survey-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Take Our Survey
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
