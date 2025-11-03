import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ProductCarousel from "@/components/ProductCarousel";
import JobListing from "@/components/JobListing";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Shield, TrendingUp, Users, Handshake, Target, Zap, Globe, Mail, MapPin, Phone, Briefcase, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState<"careers" | "partnerships" | "collaborations">("careers");

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
      
      {/* Product Slider - At Top */}
      <section id="product" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel />
        </div>
      </section>

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

      {/* About Section with Accordion */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about-us" className="border rounded-xl bg-background px-6">
              <AccordionTrigger className="text-3xl md:text-4xl font-bold hover:no-underline py-6">
                About Us
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8 text-lg leading-relaxed pt-4 pb-6">
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

                  <div className="bg-muted border p-8 rounded-xl my-12">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Work With Us Section */}
      <section id="work-with-us" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our team, partner with us, or collaborate on exciting projects.
            </p>
          </div>

          {/* Hover Tabs */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                  activeTab === "careers"
                    ? "bg-primary/10 border-primary shadow-lg scale-105"
                    : "bg-background border-border hover:border-primary/50 hover:-translate-y-2"
                }`}
                onMouseEnter={() => setActiveTab("careers")}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${
                    activeTab === "careers" ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <Briefcase className={`h-8 w-8 transition-colors ${
                      activeTab === "careers" ? "text-primary" : "text-primary/60"
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold">Careers</h3>
                </div>
              </div>

              <div
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                  activeTab === "partnerships"
                    ? "bg-secondary/10 border-secondary shadow-lg scale-105"
                    : "bg-background border-border hover:border-secondary/50 hover:-translate-y-2"
                }`}
                onMouseEnter={() => setActiveTab("partnerships")}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${
                    activeTab === "partnerships" ? "bg-secondary/20" : "bg-secondary/10"
                  }`}>
                    <Handshake className={`h-8 w-8 transition-colors ${
                      activeTab === "partnerships" ? "text-secondary" : "text-secondary/60"
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold">Partnerships</h3>
                </div>
              </div>

              <div
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                  activeTab === "collaborations"
                    ? "bg-accent/10 border-accent shadow-lg scale-105"
                    : "bg-background border-border hover:border-accent/50 hover:-translate-y-2"
                }`}
                onMouseEnter={() => setActiveTab("collaborations")}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${
                    activeTab === "collaborations" ? "bg-accent/20" : "bg-accent/10"
                  }`}>
                    <HeartHandshake className={`h-8 w-8 transition-colors ${
                      activeTab === "collaborations" ? "text-accent" : "text-accent/60"
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold">Collaborations</h3>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-muted/30 rounded-2xl p-8 min-h-[400px] transition-all duration-500">
              {activeTab === "careers" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6">Open Positions</h3>
                  <JobListing />
                </div>
              )}

              {activeTab === "partnerships" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6">Partnership Opportunities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background border rounded-xl p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Strategic Alignment</h4>
                      <p className="text-muted-foreground">
                        Partner with a team that shares your vision for financial empowerment and long-term success.
                      </p>
                    </div>
                    <div className="bg-background border rounded-xl p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Mutual Growth</h4>
                      <p className="text-muted-foreground">
                        Grow together through collaborative innovation and shared success in the fintech space.
                      </p>
                    </div>
                    <div className="bg-background border rounded-xl p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Market Reach</h4>
                      <p className="text-muted-foreground">
                        Access our growing user base and expand your impact across diverse markets.
                      </p>
                    </div>
                    <div className="bg-background border rounded-xl p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Trust & Security</h4>
                      <p className="text-muted-foreground">
                        Built on a foundation of transparency, data security, and user trust.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button size="lg" onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Get in Touch
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "collaborations" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6">Collaboration Opportunities</h3>
                  <div className="space-y-6">
                    <div className="bg-background border rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Research & Development</h4>
                      <p className="text-muted-foreground mb-4">
                        Collaborate with us on cutting-edge fintech research, exploring new technologies and methodologies 
                        to enhance financial awareness and decision-making.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>AI-driven financial insights</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Behavioral finance studies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Data security innovations</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background border rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Content & Education</h4>
                      <p className="text-muted-foreground mb-4">
                        Work together to create educational content that promotes financial literacy and empowers users 
                        to make informed decisions.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Financial education programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Webinars and workshops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Community outreach initiatives</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background border rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Technology Integration</h4>
                      <p className="text-muted-foreground mb-4">
                        Integrate your technology or services with our platform to deliver enhanced value to users 
                        and create seamless experiences.
                      </p>
                    </div>

                    <div className="mt-8 text-center">
                      <Button size="lg" onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                        Discuss Collaboration
                      </Button>
                    </div>
                  </div>
                </div>
              )}
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
