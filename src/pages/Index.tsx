import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ProductCarousel from "@/components/ProductCarousel";
import JobListing from "@/components/JobListing";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Shield, TrendingUp, Users, Handshake, Target, Zap, Globe, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 lg:py-32">
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
                <a href="#product">
                  <Button size="lg" className="w-full sm:w-auto" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Learn More
                  </Button>
                </a>
              </div>
              
              {/* Survey CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Share Your Insights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help us understand your financial needs better and shape the future of our platform
                </p>
                <a 
                  href="https://forms.gle/your-survey-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-md">
                    Take Our Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 inline-block">🐿️</span>
            </div>

            <p>
              We at <span className="font-semibold text-primary">Frugality Fintech</span> are a small team, 
              a modest setup, and a clear vision: to redefine how individuals engage with their finances — 
              with clarity, purpose, and control.
            </p>

            <p>
              Our journey is rooted in a simple belief: that <span className="font-semibold">financial awareness 
              is not a luxury, but a necessity.</span>
            </p>

            <p>
              We draw inspiration from the squirrel — a symbol of foresight and preparation — holding its 
              acorn as a reminder that saving during times of abundance is the key to long-term resilience.
            </p>

            <div className="bg-background border p-8 rounded-xl my-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">We Believe</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>That every drop counts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>That every payment is a decision.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>That every card swipe is a strategy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>And that every rupee deserves its return.</span>
                </li>
              </ul>
            </div>

            <p>
              Our mission is to empower individuals to be <span className="font-semibold">frugal, not stingy</span> — 
              to make informed, intentional choices without compromise.
            </p>

            <p>
              We are building a platform that enables smarter financial behaviour, supported by data, 
              driven by intelligence, and anchored in trust.
            </p>

            <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-xl my-12">
              <p className="text-xl font-medium">
                At Frugality we are building not just a product. We intend to build a mindset — 
                one that transforms how people think about money, plan for the future, and take control 
                of their financial journey, one penny at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're building an exceptional financial awareness platform. Here's a preview of what's coming.
            </p>
          </div>
          <ProductCarousel />
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-muted-foreground mb-4">
              Currently Under Development
            </p>
            <p className="text-muted-foreground mb-8">
              Stay tuned for a platform that will transform how you engage with your finances.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of financial awareness. We're looking for passionate 
              individuals who believe in making finance accessible to everyone.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <JobListing />
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, we can empower millions to take control of their financial future. 
              Let's build something meaningful.
            </p>
          </div>

          {/* Horizontal Scrolling Card Carousel */}
          <div className="relative mb-16">
            <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar">
              <div className="flex gap-6 pb-4">
                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Handshake className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Strategic Alignment</h3>
                    <p className="text-sm text-muted-foreground">
                      Partner with a team that shares your vision for financial empowerment and long-term success
                    </p>
                  </div>
                </div>

                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Mutual Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Grow together through collaborative innovation and shared success in the fintech space
                    </p>
                  </div>
                </div>

                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
                    <p className="text-sm text-muted-foreground">
                      Leverage cutting-edge technology to deliver exceptional value to your customers
                    </p>
                  </div>
                </div>

                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Market Reach</h3>
                    <p className="text-sm text-muted-foreground">
                      Access our growing user base and expand your impact across diverse markets
                    </p>
                  </div>
                </div>

                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Trust & Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Built on a foundation of transparency, data security, and user trust
                    </p>
                  </div>
                </div>

                <div className="flex-none w-[280px] sm:w-[320px] snap-start">
                  <div className="h-full bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">User-Centric Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Every decision we make is guided by what's best for our users and partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              ← Scroll to explore our partnership benefits →
            </div>
          </div>
        </div>
      </section>

      {/* Support/FAQ Section */}
      <section id="support" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help you on your financial journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is available to assist you with any questions about our platform, 
              features, or how to get started on your journey to financial clarity.
            </p>
            <Button size="lg" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to learn more about Frugality Fintech? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    placeholder="Tell us more..."
                    rows={6}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">contact@frugality.finance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 (XXX) XXX-XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office</h4>
                      <p className="text-muted-foreground">
                        Bangalore, Karnataka<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

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
