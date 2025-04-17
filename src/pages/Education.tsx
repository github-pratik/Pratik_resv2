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
    institution: 'George Mason University',
    location: 'Fairfax, VA',
    period: 'Aug 2024 - Dec 2026',
    description: 'Focusing on Artificial Intelligence, Machine Learning, Secure Software, and Cloud Computing.',
    courses: ['Machine Learning', 'Artificial Intelligence', 'Secure Software Design', 'Algorithms', 'Database Systems'],
    achievements: ['Current GPA: 3.78/4.00']
  }, {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'Pimpri Chinchwad College of Engineering, University of Pune',
    location: 'Pune, India',
    period: 'Aug 2020 - May 2024',
    description: 'Graduated with a strong foundation in computing, systems, and software engineering.',
    courses: ['Operating Systems', 'Cloud Computing', 'AI & ML', 'Data Structures', 'Software Testing', 'Algorithms'],
    achievements: ['CGPA: 8.51/10.00', 'Published research paper in Springer ICSCS 2023 on image analysis using computer vision']
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
              WEB102 | Intermediate Web Development
              </h3>
              <p className="text-green-500 dark:text-green-400">CodePath Org (Online)</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Feb 2025</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
              <h3 className="font-bold text-gray-900 dark:text-white">
              AI&ML Virtual Internship 
              </h3>
              <p className="text-green-500 dark:text-green-400">EduSkills Foundation</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Jul 2023</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
              <h3 className="font-bold text-gray-900 dark:text-white">
              Cloud Engineering Track and Data Science & Machine Learning
              </h3>
              <p className="text-green-500 dark:text-green-400">Google Cloud</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Dec 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;