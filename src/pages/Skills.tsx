import React, { useState } from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, BrainIcon, GitBranchIcon, MonitorIcon, BoxIcon, CloudIcon, SmartphoneIcon, BookOpenIcon, LineChartIcon, LayersIcon, PencilIcon, CommandIcon, KeyboardIcon, SettingsIcon, HashIcon, FileCodeIcon, MailWarningIcon, Magnet, ProjectorIcon, PanelsTopLeftIcon } from 'lucide-react';
const SkillIcon = ({
  icon: Icon,
  name
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <Icon className="h-8 w-8 text-green-500 dark:text-green-400 mb-2" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
};
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link
}) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="h-48 bg-gray-100 dark:bg-gray-700">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded-full font-medium shadow hover:bg-green-600 transition-colors text-sm"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};
const technicalSkills = [{
    icon: FileCodeIcon,
    name: 'Python'
  }, {
    icon: FileCodeIcon,
    name: 'JavaScript'
  }, {
    icon: FileCodeIcon,
    name: 'Java'
  }, {
    icon: FileCodeIcon,
    name: 'C++'
  }, {
    icon: FileCodeIcon,
    name: 'TypeScript'
  },{
    icon: GlobeIcon,
    name: 'HTML/CSS'
  }, {
    icon: MonitorIcon,
    name: 'React'
  }, {
    icon: MonitorIcon,
    name: 'Next.js'
  }, {
    icon: MonitorIcon,
    name: 'Node.js'
  }, {
    icon: MonitorIcon,
    name: 'Django'
  }, {
    icon: MonitorIcon,
    name: 'GraphQL'
  }, {
    icon: MonitorIcon,
    name: 'MySQL'
  }, {
    icon: MonitorIcon,
    name: 'PostgreSQL'
  }, {
    icon: DatabaseIcon,
    name: 'MongoDB'
  }, {
    icon: BoxIcon,
    name: 'Redis'
  }, {
    icon: CloudIcon,
    name: 'AWS'
  }, {
    icon: CloudIcon,
    name: 'Google Cloud'
  }, {
    icon: CloudIcon,
    name: 'Azure'
  }, {
    icon: ServerIcon,
    name: 'Docker'
  }, {
    icon: ServerIcon,
    name: 'Kubernetes'
  }, {
    icon: SettingsIcon,
    name: 'Terraform'
  }, {
    icon: SettingsIcon,
    name: 'Jenkins'
  }, {
    icon: GitBranchIcon,
    name: 'Git & GitHub'
  }, {
    icon: BrainIcon,
    name: 'TensorFlow'
  }, {
    icon: BrainIcon,
    name: 'PyTorch'
  }, {
    icon: BrainIcon,
    name: 'Scikit-learn'
  }, {
    icon: BrainIcon,
    name: 'Keras'
  }, {
    icon: BrainIcon,
    name: 'Pandas'
  }, {
    icon: BrainIcon,
    name: 'NumPy'
  }, {
    icon: BrainIcon,
    name: 'OpenCV'
  }, {
    icon: MonitorIcon,
    name: 'PowerBI'
  },{
    icon: CodeIcon,
    name: 'BeautifulSoup'
  },{
    icon: SettingsIcon,
    name: 'REST APIs'
  }, {
    icon: PanelsTopLeftIcon,
    name: 'Agile/Scrum'
  }, {
    icon: PanelsTopLeftIcon,
    name: 'WebGL (basic)'
  }, {
    icon: CodeIcon,
    name: 'AJAX/jQuery'
  }, {
    icon: CodeIcon,
    name: 'Figma'
  }
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const conciseCount = 10;
  const conciseSkills = technicalSkills.slice(0, conciseCount);
  const skillsToShow = showAllSkills ? technicalSkills : conciseSkills;

  const projects = [{
    title: 'SmartSplit - AI-Powered Bill Splitting App',
    description: 'A smart bill-splitting app built for GDG BuildAthon that uses OCR and Firebase to scan receipts, assign items to people, and calculate shared costs with tax and tip. Real-time updates and an intuitive UI make group payments seamless.',
    image: 'https://raw.githubusercontent.com/github-pratik/smafrt_splitter_GDG/main/Demo1.gif',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Firebase', 'OCR', 'Lucide React', 'Vite'],
    link: 'https://github.com/github-pratik/smafrt_splitter_GDG'
  }, {
      title: 'Instant Market - GMU Student Marketplace',
      description: 'A campus-focused e-commerce platform for GMU students to buy and sell essentials like textbooks and electronics. Features include user roles, AI-powered recommendations, receipt generation, and sales analytics dashboard.',
      image: 'https://i.imgur.com/JmSbSn4.gif',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'LocalStorage', 'SessionStorage', 'AI Recommendation'],
      link: 'https://github.com/github-pratik/GMU_Instant_Market'
    }, {
      title: 'Pokémon Dashboard - React + PokéAPI',
      description: 'An interactive React-based dashboard that fetches and displays data from the PokéAPI. Users can search, filter, and view detailed Pokémon info with charts highlighting unique data insights.',
      image: 'https://i.imgur.com/gZp4at4.gif',
      tags: ['React', 'PokéAPI', 'Data Visualization', 'Charts', 'Routing'],
      link: 'https://github.com/github-pratik/CodePath_Dasboard_part-2'
    },{
      title: 'UI Code Assistant - AI-Powered UI Dev Tool',
      description: 'A prototype tool for GMU SWE632 that assists UI developers in generating components, analyzing design/code, and checking accessibility. Includes simulated AI suggestions, performance evaluation, and WCAG testing.',
      image: 'https://i.imgur.com/YxyTqE1.gif',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap 5', 'Jest', 'Selenium', 'Prism.js'],
      link: 'https://github.com/github-pratik/UI_Coding_Assistant'
    },  {
      title: "Trippin' on Cats - Cat Discovery App",
      description: "A fun and interactive cat breed explorer that fetches random cats via API. Users can ban unwanted traits, keep a visual history of seen cats, and enjoy a sleek glass-style UI with responsive design.",
      image: "https://imgur.com/A6jJvDV.gif",
      tags: ['JavaScript', 'Async/Await', 'API Integration', 'CSS Effects', 'Responsive Design'],
      link: "https://github.com/github-pratik/CodePath-week5-trippin-on-Cats"
    },   {
      title: 'Web Scraping and News Classification',
      description: 'Python-based project that scrapes news articles and classifies them using KNN and SVM models. Includes data preprocessing, cross-validation, and visualization of classification performance.',
      image: 'https://github.com/github-pratik/Web_Scraping_and_Classification/assets/90708235/14e0b9fd-9f83-4081-b431-22a6254c66cf',
      tags: ['Python', 'BeautifulSoup', 'Scikit-learn', 'KNN', 'SVM', 'Pandas', 'NLTK'],
      link: 'https://github.com/github-pratik/Web_Scraping_and_Classification'
    }    
    ];
  return (
    <div className="bg-white dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skills & Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Technical expertise and recent work
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-4">
            {skillsToShow.map((skill, index) => <SkillIcon key={index} icon={skill.icon} name={skill.name} />)}
          </div>
          {technicalSkills.length > conciseCount && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-full font-medium shadow hover:bg-green-600 transition-colors text-sm"
                onClick={() => setShowAllSkills((prev) => !prev)}
              >
                {showAllSkills ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span>Featured Projects</span>
            <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs rounded-full font-semibold ml-2">Featured</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Languages</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">JavaScipt</span>
                <span className="text-green-500 dark:text-green-400">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">Java</span>
                <span className="text-green-500 dark:text-green-400">Intermediate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">Python</span>
                <span className="text-green-500 dark:text-green-400">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Team Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Communication</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Time Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;