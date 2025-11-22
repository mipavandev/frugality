import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Smartphone, TrendingUp, Target, PieChart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  gradient: string;
  icon: any;
  accentColor: string;
}

const Product3DCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Smart Dashboard",
      description: "Track all your financial metrics in one beautiful interface",
      gradient: "from-[#0A3052] via-[#0D3B63] to-[#0A3052]",
      icon: Smartphone,
      accentColor: "#60A5FA",
    },
    {
      id: 2,
      title: "Goal Setting",
      description: "Set and achieve your financial goals with intelligent tracking",
      gradient: "from-[#0D3B63] via-[#0A3052] to-[#0D3B63]",
      icon: Target,
      accentColor: "#34D399",
    },
    {
      id: 3,
      title: "Analytics",
      description: "Deep insights into your spending patterns and habits",
      gradient: "from-[#0A3052] via-[#082842] to-[#0A3052]",
      icon: TrendingUp,
      accentColor: "#A78BFA",
    },
    {
      id: 4,
      title: "Budget Planner",
      description: "Plan your monthly budget with AI-powered suggestions",
      gradient: "from-[#082842] via-[#0A3052] to-[#0D3B63]",
      icon: PieChart,
      accentColor: "#F59E0B",
    },
    {
      id: 5,
      title: "Expense Tracking",
      description: "Automatically categorize and track every expense",
      gradient: "from-[#0D3B63] via-[#082842] to-[#0A3052]",
      icon: Wallet,
      accentColor: "#EC4899",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, currentIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAnimating]);

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
    
    // Calculate transformations with smoother curves
    const translateX = normalizedDiff * 340;
    const scale = isCenter ? 1 : Math.max(0.65, 1 - absOffset * 0.2);
    const opacity = isCenter ? 1 : Math.max(0.25, 1 - absOffset * 0.35);
    const zIndex = isCenter ? 50 : 50 - absOffset * 10;
    const blur = isCenter ? 0 : Math.min(4, absOffset * 2);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
      pointerEvents: (isCenter ? "auto" : "none") as React.CSSProperties["pointerEvents"],
    };
  };

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-[520px] flex items-center justify-center overflow-hidden">
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#0A3052]/30 via-transparent to-[#0A3052]/20 blur-3xl rounded-full" />
        </div>

        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "2000px" }}>
          {/* Slides */}
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.id}
                className="absolute w-[300px] h-[450px] cursor-pointer select-none"
                style={getSlideStyle(index)}
                onClick={() => goToSlide(index)}
              >
                <div className={`relative w-full h-full rounded-[2rem] bg-gradient-to-br ${slide.gradient} shadow-[0_20px_60px_-15px_rgba(10,48,82,0.5)] overflow-hidden group`}>
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                  
                  {/* Accent border */}
                  <div className="absolute inset-0 rounded-[2rem] border-2 border-white/10" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col items-center justify-between">
                    {/* Top section with icon */}
                    <div className="w-full flex flex-col items-center">
                      <div 
                        className="mb-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500"
                        style={{ 
                          backgroundColor: `${slide.accentColor}20`,
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" style={{ filter: `drop-shadow(0 0 8px ${slide.accentColor})` }} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 text-center">{slide.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed text-center">{slide.description}</p>
                    </div>
                    
                    {/* Mock UI Elements with modern design */}
                    <div className="w-full space-y-3">
                      {[
                        { width: "100%", height: "60px", delay: "0ms" },
                        { width: "85%", height: "50px", delay: "100ms" },
                        { width: "70%", height: "50px", delay: "200ms" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-auto transition-all duration-500 group-hover:bg-white/15"
                          style={{ 
                            width: item.width, 
                            height: item.height,
                            transitionDelay: item.delay,
                          }}
                        >
                          <div className="h-full flex items-center px-4 gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/20" />
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-white/20 rounded-full w-3/4" />
                              <div className="h-2 bg-white/15 rounded-full w-1/2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Accent line at bottom */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-[2rem]"
                      style={{ backgroundColor: slide.accentColor }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons with new design */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 lg:left-8 z-50 w-14 h-14 rounded-full bg-[#0A3052]/80 backdrop-blur-md border-2 border-white/20 hover:bg-[#0D3B63] hover:scale-110 hover:border-white/40 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 lg:right-8 z-50 w-14 h-14 rounded-full bg-[#0A3052]/80 backdrop-blur-md border-2 border-white/20 hover:bg-[#0D3B63] hover:scale-110 hover:border-white/40 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Enhanced Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-10 h-3 bg-[#0A3052]"
                : "w-3 h-3 bg-muted-foreground/30 hover:bg-[#0A3052]/50"
            }`}
            style={{
              boxShadow: index === currentIndex ? `0 0 12px ${slide.accentColor}` : "none",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Product3DCarousel;
