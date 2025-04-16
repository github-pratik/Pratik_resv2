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
    title: 'Software Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    period: 'May 2022 - Aug 2022',
    description: ['Developed and maintained features for a cloud-based enterprise application serving over 10,000 users.', 'Collaborated with senior developers to optimize database queries, improving application performance by 25%.', 'Participated in daily stand-ups and biweekly sprint planning meetings.'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker']
  }, {
    title: 'Research Assistant',
    company: 'University AI Lab',
    location: 'Boston, MA',
    period: 'Sep 2021 - Present',
    description: ['Conducting research on natural language processing techniques for sentiment analysis.', 'Implemented deep learning models using PyTorch to analyze social media data.', 'Co-authored a paper accepted at a regional AI conference.'],
    technologies: ['Python', 'PyTorch', 'NLTK', 'TensorFlow', 'Jupyter']
  }, {
    title: 'Junior Web Developer',
    company: 'Creative Digital Agency',
    location: 'Remote',
    period: 'Jan 2020 - Aug 2021',
    description: ['Built responsive websites for small to medium-sized businesses using modern web technologies.', 'Created custom WordPress themes and plugins to meet specific client requirements.', 'Maintained and updated existing client websites, ensuring security and performance.'],
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP', 'MySQL']
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
                <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="AI Sentiment Analysis Tool" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  AI Sentiment Analysis Tool
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A machine learning application that analyzes customer reviews
                  and feedback to determine sentiment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    Python
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    NLTK
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    Flask
                  </span>
                </div>
                <a href="#" className="text-green-500 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
                  View Project →
                </a>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="E-commerce Platform" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">E-commerce Platform</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A full-stack e-commerce solution with inventory management,
                  payment processing, and analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                </div>
                <a href="#" className="text-green-500 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
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