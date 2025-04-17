import React from 'react';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
const ExperienceItem = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <h4 className="text-lg font-medium text-green-500 dark:text-green-400 mb-2">{company}</h4>
      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center mr-4 mb-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{period}</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 pl-2 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
const Experience = () => {
  const experiences = [{
    title: 'Persistent Martian Intern',
    company: 'Persistent Systems',
    location: 'India',
    period: 'June 2023 – August 2023',
    description: [
      'Collaborated in Agile sprints contributing to database management and application debugging.',
      'Enhanced code efficiency by 30% through optimization and debugging under mentor guidance.',
      'Managed large datasets using MySQL, ensuring data integrity and retrieval performance.'
    ],
    technologies: ['MySQL', 'Agile', 'Debugging', 'SQL']
  }, {
    title: 'Web Developer Intern',
    company: 'PHN Technology',
    location: 'India',
    period: 'April 2023 – June 2023',
    description: [
      'Developed backend systems using Node.js and MongoDB, improving portfolio website management.',
      'Integrated REST APIs, enabling real-time dynamic content updates reducing content update time by 30%.',
      'Implemented client-side enhancements using AJAX and JavaScript.'
    ],
    technologies: ['Node.js', 'MongoDB', 'JavaScript', 'AJAX', 'REST API']
  }];
  return <div className="bg-white dark:bg-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Work Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          My professional journey and contributions
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
        </div>
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="https://i.imgur.com/JmSbSn4.gif" alt="AI Sentiment Analysis Tool" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Instant Market - GMU Student Marketplace
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                A campus-focused e-commerce platform for GMU students to buy and sell essentials like textbooks and electronics. Features include user roles, AI-powered recommendations, receipt generation, and sales analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  HTML5
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  CSS3
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  JavaScript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  Bootstrap 5
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  LocalStorage
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  SessionStorage
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  AI Recommendation
                  </span>
                </div>
                <a href="https://github.com/github-pratik/GMU_Instant_Market" className="text-green-500 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
                  View Project →
                </a>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="https://i.imgur.com/gZp4at4.gif" alt="E-commerce Platform" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Pokémon Dashboard - React + PokéAPI</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                An interactive React-based dashboard that fetches and displays data from the PokéAPI. Users can search, filter, and view detailed Pokémon info with charts highlighting unique data insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  Data Visualization
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  PokéAPI
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  Routing
                  </span>
                </div>
                <a href="https://github.com/github-pratik/CodePath_Dasboard_part-2" className="text-green-500 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Experience;