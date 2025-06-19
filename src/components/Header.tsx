
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'Gallery', path: '/gallery', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ];

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/50 backdrop-blur-xl shadow-2xl border-b border-gray-100/50"
            : "bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`flex items-center justify-center transition-all duration-300`}>
                  <img 
                    src="/lovable-uploads/6c697fcb-f9ff-466e-97f0-7cddf3d6c664.png" 
                    alt="Venus Appliances" 
                    className="h-8 sm:h-10 lg:h-14 w-auto object-contain"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-2xl font-medium text-sm xl:text-base transition-all duration-300 group ${
                      scrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/70"
                        : "text-white hover:text-blue-200 hover:bg-white/15"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </span>
                    <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full z-10"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden xl:flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <motion.div 
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    scrolled ? "text-gray-600" : "text-blue-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`p-1.5 rounded-lg ${
                    scrolled ? "bg-blue-50" : "bg-white/10"
                  }`}>
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">93319 62120</span>
                </motion.div>
                <div className={`w-px h-5 ${
                  scrolled ? "bg-gray-300" : "bg-white/30"
                }`}></div>
                <motion.div 
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    scrolled ? "text-gray-600" : "text-blue-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`p-1.5 rounded-lg ${
                    scrolled ? "bg-blue-50" : "bg-white/10"
                  }`}>
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium hidden 2xl:inline">venusapplianceskol@gmail.com</span>
                  <span className="font-medium 2xl:hidden">Email</span>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className={`font-medium transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl px-4 xl:px-6 ${
                    scrolled 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                      : "bg-white text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="lg:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 sm:p-3 rounded-2xl transition-all duration-300 ${
                  scrolled 
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                    : "text-white hover:bg-white/15"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden overflow-hidden ${
                scrolled
                  ? "bg-white/97 backdrop-blur-xl border-t border-gray-100/50"
                  : "bg-blue-900/97 backdrop-blur-xl border-t border-white/10"
              }`}
            >
              <nav className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 font-medium text-base ${
                          scrolled 
                            ? "text-gray-700 hover:bg-blue-50/70 hover:text-blue-600" 
                            : "text-white hover:bg-white/15"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <motion.div 
                  className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-sm ${
                    scrolled ? "text-gray-600" : "text-blue-100"
                  }`}>
                    <div className={`p-2 rounded-xl ${
                      scrolled ? "bg-blue-50" : "bg-white/10"
                    }`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">93319 62120</span>
                  </div>
                  <div className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-sm ${
                    scrolled ? "text-gray-600" : "text-blue-100"
                  }`}>
                    <div className={`p-2 rounded-xl ${
                      scrolled ? "bg-blue-50" : "bg-white/10"
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium break-all">venusapplianceskol@gmail.com</span>
                  </div>
                  <div className="px-4 sm:px-6">
                    <Button 
                      asChild 
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl py-3 sm:py-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-14 sm:h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
