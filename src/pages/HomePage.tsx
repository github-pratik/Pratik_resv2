import React, { useState } from 'react'; // Import useState
import { ArrowRightIcon, DownloadIcon, BriefcaseIcon, AwardIcon, GraduationCapIcon, CodeIcon, GithubIcon, LinkedinIcon, MailIcon, RocketIcon, HeartIcon, CoffeeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal visibility
  const resumeUrl = "https://drive.google.com/file/d/1OTGe_nAvhWCpMQYXIhQn-fiXpaJyKobY/view?usp=sharing";
  // Add a function to handle opening the modal
  const openModal = () => setIsModalOpen(true);
  // Add a function to handle closing the modal
  const closeModal = () => setIsModalOpen(false);

  return <div className="w-full bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-grid-white-dots opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-opacity-20 bg-green-500 border border-green-500">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-green-500 font-medium">Available for work!</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Hello I'm Pratik Patil!
                </h1>
                <h2 className="text-2xl md:text-3xl text-white mt-4">
                  <span className="text-white">Aspiring Software Developer</span> <span className="text-gray-400">from Fairfax, VA.</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                  Specialist in Javascript, Java, Python and Innovation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                {/* Change anchor to button and add onClick handler */}
                <button 
                  onClick={openModal} 
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Resume
                </button>
                <a href="https://www.linkedin.com/in/pshpatil/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white font-medium rounded-full hover:bg-white hover:text-black transform hover:-translate-y-0.5 transition-all duration-200">
                  <LinkedinIcon className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/github-pratik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white font-medium rounded-full hover:bg-white hover:text-black transform hover:-translate-y-0.5 transition-all duration-200">
                  <GithubIcon className="h-5 w-5 mr-2" />
                  Github
                </a>
              </div>
            </div>
            {/* Removed the image container div */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                <RocketIcon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Passionate Developer
              </h3>
              <p className="text-gray-400">
                Dedicated to creating efficient and innovative solutions through
                code. Experienced in both frontend and backend development.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                <HeartIcon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                AI Enthusiast
              </h3>
              <p className="text-gray-400">
                Fascinated by machine learning and its applications. Currently
                researching NLP and computer vision solutions.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                <CoffeeIcon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Continuous Learner
              </h3>
              <p className="text-gray-400">
                Always exploring new technologies and methodologies. Committed
                to personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              My Portfolio
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: BriefcaseIcon,
            title: 'Experience',
            description: 'Professional journey and projects',
            color: 'indigo',
            path: '/experience'
          }, {
            icon: AwardIcon,
            title: 'Certifications',
            description: 'Professional credentials and courses',
            color: 'green',
            path: '/certifications'
          }, {
            icon: GraduationCapIcon,
            title: 'Education',
            description: 'Academic background and research',
            color: 'blue',
            path: '/education'
          }, {
            icon: CodeIcon,
            title: 'Skills',
            description: 'Technical expertise and tools',
            color: 'purple',
            path: '/skills'
          }].map(item => <Link key={item.title} to={item.path} className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-6 w-6 text-green-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center text-green-500 font-medium">
                    Explore
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg shadow-xl w-full max-w-4xl h-[90vh] flex flex-col border border-gray-800">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-xl font-semibold text-white">Resume - Pratik Patil</h3>
              <div>
                <a 
                  href={resumeUrl} 
                  download="Pratik_Patil_Resume.pdf" 
                  className="inline-flex items-center px-4 py-2 mr-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-200"
                >
                  <DownloadIcon className="h-5 w-5 mr-2" />
                  Download
                </a>
                <button 
                  onClick={closeModal} 
                  className="px-4 py-2 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-hidden">
              {/* Embed PDF using iframe */}
              <iframe 
                src={resumeUrl.replace('/view?usp=sharing', '/preview')} 
                className="w-full h-full border-0"
                title="Resume PDF"
              >
                Your browser does not support PDFs. Please download the PDF to view it.
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>;
};

export default HomePage;