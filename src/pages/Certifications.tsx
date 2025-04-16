import React from 'react';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';
const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  credentialId,
  url
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-green-500 dark:text-green-400 font-medium mb-2">{issuer}</p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        {credentialId && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-medium text-gray-700 dark:text-gray-300">Credential ID:</span> {credentialId}
          </p>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            Verify Certificate
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};
const Certifications = () => {
  const certifications = [{
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'June 2022',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    credentialId: 'AWS-ASA-12345',
    url: '#'
  }, {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford University)',
    date: 'March 2022',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    credentialId: 'COURSERA-ML-67890',
    url: '#'
  }, {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'November 2021',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    credentialId: 'UDEMY-FSWD-34567',
    url: '#'
  }, {
    title: 'Google Data Analytics Certificate',
    issuer: 'Google',
    date: 'August 2021',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    credentialId: 'GOOGLE-DAC-89012',
    url: '#'
  }, {
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'May 2021',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    credentialId: 'MSFT-AZ-204-45678',
    url: '#'
  }, {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera (deeplearning.ai)',
    date: 'February 2021',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    credentialId: 'COURSERA-DL-23456',
    url: '#'
  }];
  return <div className="bg-white dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Certifications
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Professional credentials and completed courses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => <CertificationCard key={index} {...cert} />)}
        </div>
      </div>
    </div>;
};
export default Certifications;