import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Globe,
  Moon,
  Sun,
  Heart,
  Settings2,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import AccessibilityMenu from './AccessibilityMenu';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { fontSize, isMonochrome, isDyslexicFont } = useAccessibility();

  const isAccessibilityActive =
    fontSize !== 16 || isMonochrome || isDyslexicFont;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/?scrollTo=contact');
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md transition-all duration-300 z-50 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <img
              src="/scholaro/logo.png.png"
              alt="Scholaro Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`font-bold transition-all duration-300 text-gray-800 dark:text-gray-200 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}
          >
            Scholaro
          </span>
        </Link>

        <div className="flex items-center">
          <div className="flex space-x-6 mr-6">
            <Link
              to="/free-resources"
              className="hover:text-cornflower-blue transition-colors duration-200 text-grey-800 dark:text-gray-200 dark:hover:text-cornflower-blue"
            >
              Free Resources
            </Link>
            <Link
              to="/sixth-stop"
              className="hover:text-cornflower-blue transition-colors duration-200 text-grey-800 dark:text-gray-200 dark:hover:text-cornflower-blue"
            >
              Sixth Stop
            </Link>
            <Link
              to="/opportunities"
              className="hover:text-cornflower-blue transition-colors duration-200 dark:text-gray-300 dark:hover:text-cornflower-blue"
            >
              Opportunities
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="hover:text-cornflower-blue transition-colors duration-200 dark:text-gray-300 dark:hover:text-cornflower-blue"
            >
              Contact
            </a>
          </div>
          <button className="mr-4 px-4 py-2 bg-cornflower-blue text-white rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>Donate</span>
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <button
            onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ml-2 ${
              isAccessibilityActive
                ? 'text-cornflower-blue'
                : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            <Settings2 className="w-5 h-5" />
          </button>
          <AccessibilityMenu
            isOpen={isAccessibilityOpen}
            onClose={() => setIsAccessibilityOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
