import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Instagram,
  Youtube,
  Music2,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import '@fontsource/opendyslexic';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center pointer-events-none"
    >
      <motion.img
        src="Scholaro Favicon_nobg.png"
        alt="Scholaro Logo"
        initial={{ scale: 0.2, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-72 h-72 object-contain"
      />
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Chen',
      text: "Scholaro helped me improve my academic writing skills significantly. I'm now more confident in my coursework.",
      role: 'International Student',
    },
    {
      name: 'Mohammed Al-Rashid',
      text: 'The study resources and language support have been invaluable for my studies in the UK.',
      role: 'ESL Student',
    },
    {
      name: 'Ana Silva',
      text: "Thanks to Scholaro's support, I achieved distinction in my assignments. The personalized help made all the difference.",
      role: 'Graduate Student',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    const visibilityTimer = setTimeout(() => setIsVisible(true), 1000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight * 0.75;
        if (scrollPosition > sectionTop) {
          section.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.search === '?scrollTo=contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <NavBar />

        {/* Hero Section */}
        <motion.section
          className="pt-32 pb-20 px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-7xl font-bold mb-6 text-cornflower-blue"
              variants={itemVariants}
            >
              Welcome to Scholaro
            </motion.h1>
            <motion.p
              className="text-2xl mb-8 dark:text-gray-300"
              variants={itemVariants}
            >
              Bridging the gap between potential and opportunity
            </motion.p>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6 text-cornflower-blue"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-lg mb-6 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Founded by Kabeer Khan and Chanthauzraj Arunthavam, Scholaro is
              our mission to bridge the academic gap for students new to the UK,
              ESL students and students from underrepresented and undersupported
              backgrounds. It is unfair that language barriers, socioeconomic
              factors and a lack of support should hold students back from
              turning potential into results. With our tailor-made revision
              resources, opportunities finder and more upcoming features, we
              hope to support the students that nobody is talking about.
            </motion.p>
          </div>
        </motion.section>

        {/* What We Offer Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-center dark:text-white"
              variants={itemVariants}
            >
              What We Offer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href="/free-resources"
                  className="block transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full">
                    <h3 className="text-xl font-bold mb-4 text-cornflower-blue">
                      Free Resources
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Comprehensive guides covering various subjects and
                      academic skills.
                    </p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href="/sixth-stop"
                  className="block transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full">
                    <h3 className="text-xl font-bold mb-4 text-cornflower-blue">
                      Sixth Stop
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Your one-stop resource hub for university applications,
                      personal statements, CVs, and more.
                    </p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href="/opportunities"
                  className="block transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full">
                    <h3 className="text-xl font-bold mb-4 text-cornflower-blue">
                      Opportunities
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Discover internships, work experience, and more.
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-center dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Student Success Stories
            </motion.h2>
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="absolute -left-14 top-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="absolute -right-14 top-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.h2>
            <ContactForm />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <motion.div
            className="max-w-7xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center space-x-6 mb-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-cornflower-blue hover:text-white transition-colors duration-200 text-gray-600 dark:text-gray-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-cornflower-blue hover:text-white transition-colors duration-200 text-gray-600 dark:text-gray-300"
              >
                <Music2 className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-cornflower-blue hover:text-white transition-colors duration-200 text-gray-600 dark:text-gray-300"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-cornflower-blue hover:text-white transition-colors duration-200 text-gray-600 dark:text-gray-300"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
            <motion.p
              className="text-center mt-6 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              © 2025 Scholaro. All rights reserved.
            </motion.p>
          </motion.div>
        </footer>
      </div>
    </>
  );
}

export default App;
