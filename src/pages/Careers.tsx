import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of financial awareness. We're looking for passionate 
              individuals who believe in making finance accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-background border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Culture</h3>
              <p className="text-muted-foreground">
                We're a small team with a big vision. We value collaboration, innovation, 
                and the drive to make a meaningful impact on people's financial lives.
              </p>
            </div>

            <div className="bg-background border rounded-xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Join us in the early stages and grow with the company. We invest in our team's 
                development and provide opportunities to learn and lead.
              </p>
            </div>

            <div className="bg-background border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                We believe in sustainable growth. Flexible working hours and a supportive 
                environment help you do your best work.
              </p>
            </div>

            <div className="bg-background border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p className="text-muted-foreground">
                Every line of code, every design, every decision helps people make better 
                financial choices and build a secure future.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. 
              If you're passionate about fintech and making a difference, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
