import React from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, BrainIcon, GitBranchIcon, MonitorIcon, BoxIcon, CloudIcon, SmartphoneIcon, BookOpenIcon, LineChartIcon, LayersIcon, PencilIcon, CommandIcon, KeyboardIcon, SettingsIcon, HashIcon, FileCodeIcon } from 'lucide-react';
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
  tags
}) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="h-48 bg-gray-100 dark:bg-gray-700">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
const Skills = () => {
  const technicalSkills = [{
    icon: CodeIcon,
    name: 'Python'
  }, {
    icon: FileCodeIcon,
    name: 'JavaScript'
  }, {
    icon: HashIcon,
    name: 'TypeScript'
  }, {
    icon: GlobeIcon,
    name: 'React'
  }, {
    icon: MonitorIcon,
    name: 'Node.js'
  }, {
    icon: LayersIcon,
    name: 'Next.js'
  }, {
    icon: DatabaseIcon,
    name: 'MongoDB'
  }, {
    icon: BoxIcon,
    name: 'PostgreSQL'
  }, {
    icon: CloudIcon,
    name: 'AWS'
  }, {
    icon: ServerIcon,
    name: 'Docker'
  }, {
    icon: BrainIcon,
    name: 'TensorFlow'
  }, {
    icon: CommandIcon,
    name: 'PyTorch'
  }, {
    icon: GitBranchIcon,
    name: 'Git'
  }, {
    icon: SettingsIcon,
    name: 'DevOps'
  }, {
    icon: KeyboardIcon,
    name: 'VS Code'
  }];
  const projects = [{
    title: 'AI Sentiment Analysis',
    description: 'Machine learning application for analyzing customer feedback and sentiment in real-time.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Python', 'NLTK', 'TensorFlow']
  }, {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with inventory management and analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Node.js', 'MongoDB']
  }, {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure setup with automated deployment pipeline.',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['AWS', 'Docker', 'Kubernetes']
  }];
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
            {technicalSkills.map((skill, index) => <SkillIcon key={index} icon={skill.icon} name={skill.name} />)}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Languages</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">English</span>
                <span className="text-green-500 dark:text-green-400">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">Spanish</span>
                <span className="text-green-500 dark:text-green-400">Intermediate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">French</span>
                <span className="text-green-500 dark:text-green-400">Basic</span>
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