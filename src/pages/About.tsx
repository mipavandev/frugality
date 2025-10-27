import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
          
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

            <div className="bg-muted/50 p-8 rounded-xl my-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">We Believe</h2>
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
      </main>

      <Footer />
    </div>
  );
};

export default About;
