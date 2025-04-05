import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../ui/ThemeToggle";
import { fadeIn } from "../../utils/motion";
import { NavLink } from "../../types";
import { fetchNavLinks } from "../../api/resumeApi";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  // Fetch nav links
  useEffect(() => {
    const loadNavLinks = async () => {
      try {
        const data = await fetchNavLinks();
        setNavLinks(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load navigation links:", err);
        setError("Failed to load navigation links");
        setLoading(false);
      }
    };

    loadNavLinks();
  }, []);

  // Toggle menu open/closed
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-gray-900 dark:text-white text-xl font-bold"
          >
            <span className="text-primary-500">V</span>L
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-8">
            {!loading &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            <ThemeToggle
              isDarkMode={theme === "dark"}
              toggleTheme={toggleTheme}
            />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle
              isDarkMode={theme === "dark"}
              toggleTheme={toggleTheme}
            />
            <button
              id="menu-button"
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 overflow-hidden shadow-lg z-50"
          >
            <div className="px-4 py-3 space-y-1">
              {!loading &&
                navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 px-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              {loading && (
                <div className="py-2 px-3 text-gray-500 dark:text-gray-400">
                  Loading...
                </div>
              )}
              {error && (
                <div className="py-2 px-3 text-red-500 dark:text-red-400">
                  {error}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
