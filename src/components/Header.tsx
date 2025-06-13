
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HEADER_SCROLL_THRESHOLD = 10;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes for header
  const headerClass = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    scrolled
      ? "bg-white/95 shadow-xl border-b border-gray-100 backdrop-blur-lg"
      : "bg-gradient-to-r from-blue-900/95 to-blue-800/95 backdrop-blur-sm"
  ].join(' ');

  const navLinkBase = "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group";
  const navLinkClass = (active: boolean) =>
    [
      navLinkBase,
      scrolled
        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
        : "text-white hover:text-blue-200 hover:bg-white/10"
    ].join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className={[
                  "w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                  scrolled ? "bg-blue-600 shadow-lg" : "bg-white/20 backdrop-blur-sm"
                ].join(' ')}>
                  <span className="text-white font-bold text-lg lg:text-xl">❄</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={[
                  "font-bold text-xl lg:text-2xl tracking-tight transition-colors duration-300",
                  scrolled ? "text-blue-700" : "text-white"
                ].join(' ')}>
                  CoolBreeze
                </span>
                <span className={[
                  "text-xs lg:text-sm font-medium -mt-1 transition-colors duration-300",
                  scrolled ? "text-blue-500" : "text-blue-200"
                ].join(' ')}>
                  Air Conditioning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              <Link to="/" className={navLinkClass(false)}>
                <span>Home</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <Link to="/gallery" className={navLinkClass(false)}>
                <span>Gallery</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <Link to="/about" className={navLinkClass(false)}>
                <span>About</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <Link to="/contact" className={navLinkClass(false)}>
                <span>Contact</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <div className={[
                  "flex items-center gap-2 transition-colors duration-300",
                  scrolled ? "text-gray-600" : "text-blue-100"
                ].join(' ')}>
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="w-px h-4 bg-current opacity-30"></div>
                <div className={[
                  "flex items-center gap-2 transition-colors duration-300",
                  scrolled ? "text-gray-600" : "text-blue-100"
                ].join(' ')}>
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">info@coolbreeze.com</span>
                </div>
              </div>
              <Button 
                asChild 
                className={[
                  "font-medium transition-all duration-300 shadow-lg hover:shadow-xl",
                  scrolled 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white text-blue-700 hover:bg-blue-50"
                ].join(' ')}
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={[
                  "p-2 transition-colors duration-300",
                  scrolled ? "text-gray-700 hover:bg-blue-50" : "text-white hover:bg-white/10"
                ].join(' ')}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={[
          "lg:hidden absolute top-full left-0 w-full transition-all duration-300 transform",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none",
          scrolled
            ? "bg-white border-t border-gray-100 shadow-xl"
            : "bg-blue-900/95 backdrop-blur-lg border-t border-white/10"
        ].join(' ')}>
          <nav className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={[
                  "block px-4 py-3 rounded-lg transition-all duration-300 font-medium",
                  scrolled 
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                    : "text-white hover:bg-white/10"
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className={[
                  "block px-4 py-3 rounded-lg transition-all duration-300 font-medium",
                  scrolled 
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                    : "text-white hover:bg-white/10"
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className={[
                  "block px-4 py-3 rounded-lg transition-all duration-300 font-medium",
                  scrolled 
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                    : "text-white hover:bg-white/10"
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={[
                  "block px-4 py-3 rounded-lg transition-all duration-300 font-medium",
                  scrolled 
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                    : "text-white hover:bg-white/10"
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              <div className={[
                "flex items-center gap-3 px-4 text-sm",
                scrolled ? "text-gray-600" : "text-blue-100"
              ].join(' ')}>
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className={[
                "flex items-center gap-3 px-4 text-sm",
                scrolled ? "text-gray-600" : "text-blue-100"
              ].join(' ')}>
                <Mail className="w-4 h-4" />
                <span>info@coolbreeze.com</span>
              </div>
              <div className="px-4">
                <Button 
                  asChild 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
