"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
import { DATA } from "@/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark as per layout
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      // Fallback if lenis is not ready or available
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "glass border-border/40 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight"
          onClick={(e) => handleLinkClick(e, "#")}
        >
          Akashat Ojha
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={DATA.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <Download size={16} />
            CV
          </a>
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/40 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={DATA.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 text-lg font-medium text-indigo-400 hover:text-indigo-300"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
