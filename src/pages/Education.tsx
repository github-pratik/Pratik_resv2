import React from 'react';
import { CalendarIcon, MapPinIcon, BookOpenIcon, AwardIcon } from 'lucide-react';
const EducationItem = ({
  degree,
  institution,
  location,
  period,
  description,
  courses,
  achievements
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree}</h3>
      <h4 className="text-lg font-medium text-green-500 dark:text-green-400 mb-2">
        {institution}
      </h4>
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
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      {courses && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <BookOpenIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
            <h5 className="font-medium text-gray-900 dark:text-white">Key Courses</h5>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-2 space-y-1">
            {courses.map((course, index) => <li key={index} className="mb-1">
                {course}
              </li>)}
          </ul>
        </div>
      )}
      {achievements && (
        <div>
          <div className="flex items-center mb-2">
            <AwardIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
            <h5 className="font-medium text-gray-900 dark:text-white">Achievements</h5>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-2 space-y-1">
            {achievements.map((achievement, index) => <li key={index} className="mb-1">
                {achievement}
              </li>)}
          </ul>
        </div>
      )} 
    </div>
  );
};
const Education = () => {
  const educationItems = [{
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Boston, MA',
    period: 'Sep 2021 - Present',
    description: 'Specializing in Artificial Intelligence and Machine Learning with a focus on Natural Language Processing.',
    courses: ['Advanced Machine Learning Algorithms', 'Deep Learning and Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Big Data Analytics'],
    achievements: ["Dean's List for academic excellence (2021-2022)", 'Graduate Research Scholarship recipient', 'Teaching Assistant for Introduction to Machine Learning course']
  }, {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    location: 'Chicago, IL',
    period: 'Sep 2017 - May 2021',
    description: 'Graduated with honors, focusing on software engineering and data structures.',
    courses: ['Data Structures and Algorithms', 'Database Systems', 'Web Development', 'Operating Systems', 'Software Engineering'],
    achievements: ['Graduated Cum Laude with 3.8 GPA', "Undergraduate Research Project: 'Efficient Algorithms for Graph Analysis'", 'President of Computer Science Student Association (2019-2020)']
  }];
  return (
    <div className="bg-white dark:bg-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          My academic background and qualifications
        </p>
        <div className="space-y-8">
          {educationItems.map((item, index) => <EducationItem key={index} {...item} />)}
        </div>
        <div className="mt-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Additional Training
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
              <h3 className="font-bold text-gray-900 dark:text-white">
                Summer School on AI Ethics
              </h3>
              <p className="text-green-500 dark:text-green-400">Stanford University (Online)</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">July 2022</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
              <h3 className="font-bold text-gray-900 dark:text-white">
                Web Development Bootcamp
              </h3>
              <p className="text-green-500 dark:text-green-400">Tech Innovators</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Summer 2020</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
              <h3 className="font-bold text-gray-900 dark:text-white">
                Data Science Workshop Series
              </h3>
              <p className="text-green-500 dark:text-green-400">DataCamp</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Spring 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;