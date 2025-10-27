import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, Target, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Partnerships = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, we can empower millions to take control of their financial future. 
              Let's build something meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Alignment</h3>
              <p className="text-sm text-muted-foreground">
                Partner with a team that shares your vision for financial empowerment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mutual Growth</h3>
              <p className="text-sm text-muted-foreground">
                Grow together through collaborative innovation and shared success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
              <p className="text-sm text-muted-foreground">
                Leverage cutting-edge technology to deliver exceptional value
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Reach</h3>
              <p className="text-sm text-muted-foreground">
                Access our growing user base and expand your impact
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-background border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Who We're Looking For</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We're interested in partnerships with:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Financial institutions looking to enhance their digital offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Technology providers with complementary solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Educational organizations promoting financial literacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Enterprises seeking to improve employee financial wellness</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-background border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Partnership Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">For Financial Institutions</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Enhanced customer engagement</li>
                    <li>• Digital transformation support</li>
                    <li>• Data-driven insights</li>
                    <li>• White-label solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Technology Partners</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• API integration opportunities</li>
                    <li>• Co-development initiatives</li>
                    <li>• Shared innovation roadmap</li>
                    <li>• Revenue sharing models</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together to create meaningful impact 
                in the financial technology space.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
