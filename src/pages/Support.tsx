import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const faqs = [
    {
      question: "What is Frugality Fintech?",
      answer: "Frugality Fintech is a financial awareness platform designed to help individuals make informed, intentional financial decisions. We provide tools and insights to help you manage your money with clarity, purpose, and control."
    },
    {
      question: "When will the product be available?",
      answer: "Our product is currently under development. We're working hard to bring you an exceptional platform. Subscribe to our newsletter or contact us to get notified when we launch."
    },
    {
      question: "How can I stay updated on your progress?",
      answer: "You can subscribe to our newsletter at the bottom of our homepage, or follow us on our social media channels. We regularly share updates about our development progress and upcoming features."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. Security and privacy are our top priorities. We use enterprise-grade encryption and follow industry best practices to ensure your financial data is protected at all times."
    },
    {
      question: "How can I get early access?",
      answer: "We offer early access to select users. Contact us through our contact form or email us at contact@frugality.finance to express your interest in becoming an early adopter."
    },
    {
      question: "Do you offer partnerships?",
      answer: "Yes! We're always interested in strategic partnerships with financial institutions, technology providers, and organizations that share our vision. Visit our Partnerships page or contact us to learn more."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Browse our guides and resources
              </p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get help via email
              </p>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join our community forum
              </p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
