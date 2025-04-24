import React from 'react';
import { FileText, ClipboardList, GraduationCap, BookOpen } from 'lucide-react';
import NavBar from '../components/NavBar';

export default function SixthStop() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Sixth Stop
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
          Your one-stop resource hub for university applications, personal
          statements, CVs, and more.
        </p>

        {/* Main Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <FileText className="w-12 h-12 text-cornflower-blue mb-4" />
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Personal Statement Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn how to craft a powerful personal statement that stands out
              for UCAS and US applications.
            </p>
            <button className="bg-cornflower-blue text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Get Writing Help
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <ClipboardList className="w-12 h-12 text-cornflower-blue mb-4" />
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              CV & Resume Building
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tips, templates, and examples for building an academic or
              professional CV for university and beyond.
            </p>
            <button className="bg-cornflower-blue text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Explore CV Tools
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <GraduationCap className="w-12 h-12 text-cornflower-blue mb-4" />
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              UCAS & Common App Guidance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Understand how to navigate UCAS and Common App systems with
              application timelines, strategy, and support.
            </p>
            <button className="bg-cornflower-blue text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Get Application Tips
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <BookOpen className="w-12 h-12 text-cornflower-blue mb-4" />
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Interview & Offer Prep
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Be ready for university interviews and conditional offers with
              practice questions and strategy guides.
            </p>
            <button className="bg-cornflower-blue text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Prep Now
            </button>
          </div>
        </div>

        {/* Extra Resources */}
        {/* Extra Resources */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Downloadable Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/downloads/ucas-checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg block transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ease-out"
            >
              <h3 className="text-xl font-bold mb-2 text-cornflower-blue">
                UCAS Checklist
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make sure you’ve covered everything before submitting your UCAS
                application.
              </p>
            </a>

            <a
              href="/downloads/personal-statement-template.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg block transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ease-out"
            >
              <h3 className="text-xl font-bold mb-2 text-cornflower-blue">
                Personal Statement Template
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A simple structure to help you organise your personal statement
                effectively.
              </p>
            </a>

            <a
              href="/downloads/cv-examples-pack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg block transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ease-out"
            >
              <h3 className="text-xl font-bold mb-2 text-cornflower-blue">
                CV Example Pack
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Example CVs tailored for uni applications, part-time jobs, and
                internships.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
