import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  gradient: string;
}

const Product3DCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Smart Dashboard",
      description: "Track all your financial metrics in one beautiful interface",
      gradient: "from-primary via-primary/80 to-primary/60",
    },
    {
      id: 2,
      title: "Goal Setting",
      description: "Set and achieve your financial goals with intelligent tracking",
      gradient: "from-secondary via-secondary/80 to-secondary/60",
    },
    {
      id: 3,
      title: "Analytics",
      description: "Deep insights into your spending patterns and habits",
      gradient: "from-accent via-accent/80 to-accent/60",
    },
    {
      id: 4,
      title: "Budget Planner",
      description: "Plan your monthly budget with AI-powered suggestions",
      gradient: "from-primary/80 via-secondary/80 to-accent/80",
    },
    {
      id: 5,
      title: "Expense Tracking",
      description: "Automatically categorize and track every expense",
      gradient: "from-accent/80 via-primary/80 to-secondary/80",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalSlides = slides.length;
    
    // Normalize diff to handle wrapping
    let normalizedDiff = diff;
    if (diff > totalSlides / 2) {
      normalizedDiff = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      normalizedDiff = diff + totalSlides;
    }

    const isCenter = normalizedDiff === 0;
    const absOffset = Math.abs(normalizedDiff);
    
    // Calculate transformations
    const translateX = normalizedDiff * 320; // Spacing between cards
    const scale = isCenter ? 1 : Math.max(0.7, 1 - absOffset * 0.15);
    const opacity = isCenter ? 1 : Math.max(0.3, 1 - absOffset * 0.3);
    const zIndex = isCenter ? 50 : 50 - absOffset * 10;
    const rotateY = normalizedDiff * 0; // Slight rotation for depth

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <div className="relative w-full py-20">
      {/* Carousel Container */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1500px" }}>
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-[280px] h-[400px] cursor-pointer"
              style={getSlideStyle(index)}
              onClick={() => {
                if (index !== currentIndex) {
                  goToSlide(index);
                }
              }}
            >
              <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${slide.gradient} shadow-2xl p-8 flex flex-col items-center justify-center text-center border border-white/20 backdrop-blur-sm`}>
                {/* Mock Phone Screen Content */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-white/40" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{slide.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{slide.description}</p>
                
                {/* Mock UI Elements */}
                <div className="mt-8 space-y-2 w-full">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-8 z-50 w-14 h-14 rounded-full bg-background/80 backdrop-blur-md border-2 hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-8 z-50 w-14 h-14 rounded-full bg-background/80 backdrop-blur-md border-2 hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 border-2 ${
              index === currentIndex
                ? "w-4 h-4 bg-primary border-primary"
                : "w-3 h-3 bg-transparent border-muted-foreground/40 hover:border-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Product3DCarousel;
