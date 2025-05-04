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
  const certifications = [
    {
      title: 'WEB102 | Intermediate Web Development',
      issuer: 'CodePath Org',
      date: 'May 2025',
      image: 'https://5340557.fs1.hubspotusercontent-na1.net/hub/5340557/hubfs/custom-video-thumbnails/120232%20-%20What%20is%20CodePath%20Sizzle%20Reel%20(Miami-Focused)%20-%20V8_V1%20(1)-thumb-1.jpeg?length=1920',
      credentialId: '',
      url: 'https://drive.google.com/file/d/1WORm0VHcf9UyQPJZ2KU7dKGYBFTRpz_r/view?usp=sharing'
    },{
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    image: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credentialId: '',
    url: 'https://www.credly.com/badges/3d0c6308-34d0-4e65-b84b-5202919ce18e/public_url'
  }, {
    title: 'Introduction to Programming Using Python',
    issuer: 'Geeks of Geeks',
    date: 'Dec 2022',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240304152903/python-tutorial-2.webp',
    credentialId: '',
    url: 'https://media.geeksforgeeks.org/courses/certificates/2a76bbe03be558d2c05aebb7a1acd9a5.pdf'
  }, {
    title: 'Introduction to Web APIs',
    issuer: 'Linkedin Learning',
    date: 'Mar 2023',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg',
    credentialId: '',
    url: 'https://www.linkedin.com/learning/certificates/3d00e5c6da9088a300e34d014178513cd802cbd34534aedba13e2ed28416bf42?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAi%2FkvU%2BzTRydsbQD9kNeZQ%3D%3D'
  }, {
    title: 'A Critical Skill for Project Managers',
    issuer: 'Linkedin Learning',
    date: 'Apr 2021',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg',
    credentialId: '',
    url: 'https://www.linkedin.com/learning/certificates/c5a0a68d18c1e6256c0e3c5f88dc4f71d86883c1076041f99fd08927e9102cb3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAi%2FkvU%2BzTRydsbQD9kNeZQ%3D%3D'
  }, {
    title: 'AI&ML Virtual Internship ',
    issuer: 'EduSkills Foundation',
    date: 'Jul 2023',
    image: 'https://connect.eduskillsfoundation.org/connect_2023/assets/frontend/img/new-logo2.png',
    credentialId: '',
    url: 'https://www.linkedin.com/in/pshpatil/details/certifications/1733365303158/single-media-viewer/?profileId=ACoAACNgqTkBUN3uwR0UdPvVqIGHqF0JJYXuLAA'
  }, {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Academy',
    date: 'Jun 2023',
    image: 'https://images.credly.com/size/680x680/images/254b883a-44a3-4cec-b6f2-946a80522b39/image.png',
    credentialId: '',
    url: 'https://www.credly.com/badges/cc1b9219-3364-484b-8e30-bd056eaeda99/print'
  }, {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'May 2023',
    image: 'https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png',
    credentialId: '',
    url: 'https://www.credly.com/badges/4c579d89-e5a2-4854-bd47-1ae76a2eed98'
  }, {
    title: 'Cloud Engineering Track and Data Science & Machine Learning',
    issuer: 'Google Cloud',
    date: 'Dec 2021',
    image: 'https://assets.techrepublic.com/uploads/2024/10/tr_20241028-google-cloud-platform-the-smart-persons-guide.jpg',
    credentialId: '',
    url: 'https://www.linkedin.com/in/pshpatil/details/certifications/1735622454490/single-media-viewer/?profileId=ACoAACNgqTkBUN3uwR0UdPvVqIGHqF0JJYXuLAA'
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