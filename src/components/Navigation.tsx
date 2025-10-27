import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About Us" },
    { path: "#product", label: "Product" },
    { path: "#careers", label: "Careers" },
    { path: "#partnerships", label: "Partnerships" },
    { path: "#support", label: "Support" },
    { path: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl">🐿️</span>
            <span className="text-xl font-bold text-primary">Frugality Fintech</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} onClick={(e) => scrollToSection(e, item.path)}>
                <Button variant="ghost" className="text-sm">
                  {item.label}
                </Button>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} onClick={(e) => scrollToSection(e, item.path)}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.label}
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
