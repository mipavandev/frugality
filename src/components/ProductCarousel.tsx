import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  const slides = [
    { color: "bg-gradient-to-br from-primary/20 to-primary/5", label: "Smart Analytics" },
    { color: "bg-gradient-to-br from-secondary/20 to-secondary/5", label: "Financial Insights" },
    { color: "bg-gradient-to-br from-accent/20 to-accent/5", label: "Goal Tracking" },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`${slide.color} rounded-2xl h-96 flex items-center justify-center transition-all duration-500`}>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">{slide.label}</h3>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default ProductCarousel;
