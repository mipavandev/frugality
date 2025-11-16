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
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { toast } from "sonner";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState<"careers" | "partnerships" | "collaborations" | null>(null);
  const [isHoveringContent, setIsHoveringContent] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax effect for hero image
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset activeTab when scrolling away from Work With Us section
  useEffect(() => {
    const handleScroll = () => {
      const workWithUsSection = document.getElementById('work-with-us');
      if (!workWithUsSection) return;

      const rect = workWithUsSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInView && !isHoveringContent) {
        setActiveTab(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHoveringContent]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const workWithUsAnimation = useScrollAnimation();
  const supportAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  // Typing animation for hero title
  const { displayedText: typedText, isComplete } = useTypingAnimation("Redefine Your Financial Journey", 80, 300);


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
          <div ref={heroAnimation.ref} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ${
                heroAnimation.isVisible ? "opacity-100 animate-fade-in-left" : "opacity-0"
              }`}>
                <span className="inline-block">
                  {typedText}
                  {!isComplete && <span className="inline-block w-1 h-12 bg-primary ml-1 animate-pulse"></span>}
                </span>
              </h1>
              <p className={`text-lg text-muted-foreground max-w-xl transition-all duration-1000 animation-delay-200 ${
                heroAnimation.isVisible ? "opacity-100 animate-fade-in-left" : "opacity-0"
              }`}>
                Every payment is a decision. Every rupee deserves its return. 
                We empower you to be frugal, not stingy — making informed, intentional choices without compromise.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 animation-delay-400 ${
                heroAnimation.isVisible ? "opacity-100 animate-fade-in-left" : "opacity-0"
              }`}>
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
            <div className={`relative overflow-hidden transition-all duration-1000 animation-delay-300 ${
              heroAnimation.isVisible ? "opacity-100 animate-fade-in-right" : "opacity-0"
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Frugality Fintech - Financial Awareness Platform" 
                  className="rounded-2xl w-full"
                  style={{ 
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Accordion */}
      <section id="about" className="py-20 bg-muted/30">
        <div ref={aboutAnimation.ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl transition-all duration-1000 ${
          aboutAnimation.isVisible ? "opacity-100 animate-scale-in" : "opacity-0"
        }`}>
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
        <div ref={workWithUsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            workWithUsAnimation.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our team, partner with us, or collaborate on exciting projects.
            </p>
          </div>

          {/* Hover Tabs */}
          <div className={`max-w-6xl mx-auto transition-all duration-1000 animation-delay-200 ${
            workWithUsAnimation.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Careers Tab */}
              <div
                className={`group relative p-10 rounded-3xl cursor-pointer transition-all duration-700 ease-out ${
                  activeTab === "careers"
                    ? "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary shadow-2xl"
                    : "bg-gradient-to-br from-background to-muted/30 border-2 border-border/50 hover:border-primary/30 shadow-lg"
                } ${
                  activeTab !== "careers" && activeTab !== null ? "-translate-y-4 scale-95 opacity-70" : ""
                }`}
                onMouseEnter={() => setActiveTab("careers")}
                onMouseLeave={() => setActiveTab("careers")}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    activeTab === "careers" 
                      ? "bg-primary/30 scale-110 shadow-lg shadow-primary/20" 
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <Briefcase className={`h-10 w-10 transition-all duration-500 ${
                      activeTab === "careers" ? "text-primary scale-110" : "text-primary/70 group-hover:text-primary"
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-all duration-500 ${
                    activeTab === "careers" ? "text-primary" : ""
                  }`}>Careers</h3>
                  <p className={`text-sm mt-2 transition-all duration-500 ${
                    activeTab === "careers" ? "text-foreground" : "text-muted-foreground"
                  }`}>Join our innovative team</p>
                </div>
              </div>

              {/* Partnerships Tab */}
              <div
                className={`group relative p-10 rounded-3xl cursor-pointer transition-all duration-700 ease-out ${
                  activeTab === "partnerships"
                    ? "bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5 border-2 border-secondary shadow-2xl"
                    : "bg-gradient-to-br from-background to-muted/30 border-2 border-border/50 hover:border-secondary/30 shadow-lg"
                } ${
                  activeTab !== "partnerships" && activeTab !== null ? "-translate-y-4 scale-95 opacity-70" : ""
                }`}
                onMouseEnter={() => setActiveTab("partnerships")}
                onMouseLeave={() => setActiveTab("careers")}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    activeTab === "partnerships" 
                      ? "bg-secondary/30 scale-110 shadow-lg shadow-secondary/20" 
                      : "bg-secondary/10 group-hover:bg-secondary/20"
                  }`}>
                    <Handshake className={`h-10 w-10 transition-all duration-500 ${
                      activeTab === "partnerships" ? "text-secondary scale-110" : "text-secondary/70 group-hover:text-secondary"
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-all duration-500 ${
                    activeTab === "partnerships" ? "text-secondary" : ""
                  }`}>Partnerships</h3>
                  <p className={`text-sm mt-2 transition-all duration-500 ${
                    activeTab === "partnerships" ? "text-foreground" : "text-muted-foreground"
                  }`}>Grow together with us</p>
                </div>
              </div>

              {/* Collaborations Tab */}
              <div
                className={`group relative p-10 rounded-3xl cursor-pointer transition-all duration-700 ease-out ${
                  activeTab === "collaborations"
                    ? "bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 border-2 border-accent shadow-2xl"
                    : "bg-gradient-to-br from-background to-muted/30 border-2 border-border/50 hover:border-accent/30 shadow-lg"
                } ${
                  activeTab !== "collaborations" && activeTab !== null ? "-translate-y-4 scale-95 opacity-70" : ""
                }`}
                onMouseEnter={() => setActiveTab("collaborations")}
                onMouseLeave={() => setActiveTab("careers")}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    activeTab === "collaborations" 
                      ? "bg-accent/30 scale-110 shadow-lg shadow-accent/20" 
                      : "bg-accent/10 group-hover:bg-accent/20"
                  }`}>
                    <HeartHandshake className={`h-10 w-10 transition-all duration-500 ${
                      activeTab === "collaborations" ? "text-accent scale-110" : "text-accent/70 group-hover:text-accent"
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-all duration-500 ${
                    activeTab === "collaborations" ? "text-accent" : ""
                  }`}>Collaborations</h3>
                  <p className={`text-sm mt-2 transition-all duration-500 ${
                    activeTab === "collaborations" ? "text-foreground" : "text-muted-foreground"
                  }`}>Create impact together</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm rounded-3xl p-10 border-2 border-border/50 min-h-[500px] transition-all duration-500 shadow-xl">
              {activeTab === "careers" && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">Open Positions</h3>
                  </div>
                  <JobListing />
                </div>
              )}

              {activeTab === "partnerships" && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold">Partnership Opportunities</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-100">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Target className="h-7 w-7 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Strategic Alignment</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Partner with a team that shares your vision for financial empowerment and long-term success.
                      </p>
                    </div>
                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-200">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                        <TrendingUp className="h-7 w-7 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Mutual Growth</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Grow together through collaborative innovation and shared success in the fintech space.
                      </p>
                    </div>
                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-300">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Globe className="h-7 w-7 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Market Reach</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Access our growing user base and expand your impact across diverse markets.
                      </p>
                    </div>
                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Shield className="h-7 w-7 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Trust & Security</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Built on a foundation of transparency, data security, and user trust.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <Button size="lg" className="shadow-lg" onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "collaborations" && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                      <HeartHandshake className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold">Collaboration Opportunities</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-accent" />
                        Research & Development
                      </h4>
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        Collaborate with us on cutting-edge fintech research, exploring new technologies and methodologies 
                        to enhance financial awareness and decision-making.
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>AI-driven financial insights</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>Behavioral finance studies</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>Data security innovations</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-accent" />
                        Content & Education
                      </h4>
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        Work together to create educational content that promotes financial literacy and empowers users 
                        to make informed decisions.
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>Financial education programs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>Webinars and workshops</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent text-lg">•</span>
                          <span>Community outreach initiatives</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/80 backdrop-blur border-2 border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-accent" />
                        Technology Integration
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Integrate your technology or services with our platform to deliver enhanced value to users 
                        and create seamless experiences.
                      </p>
                    </div>

                    <div className="mt-10 text-center">
                      <Button size="lg" className="shadow-lg" onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                        Discuss Collaboration <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
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
        <div ref={supportAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            supportAnimation.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help you on your financial journey.
            </p>
          </div>

          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 animation-delay-200 ${
            supportAnimation.isVisible ? "opacity-100 animate-scale-in" : "opacity-0"
          }`}>
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
        <div ref={contactAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            contactAnimation.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to learn more about Frugality Fintech? We'd love to hear from you.
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 animation-delay-200 ${
            contactAnimation.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
          }`}>
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
