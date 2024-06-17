'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface JobExperienceProps {
  logoSrc: string;
  title: string;
  company?: string;
  startDate: string;
  endDate: string;
  description: string[];
  achievements?: string[];
  technologies?: string;
}

const JobExperience: React.FC<JobExperienceProps> = ({ logoSrc, title, company, description, startDate, endDate, achievements, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 border p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="relative h-10 w-10 mr-4">
          <Image src={logoSrc} alt={`${company} Logo`} fill style={{ objectFit: 'contain' }} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title} {company && `at ${company}`}</h3>
          <p className="text-gray-600 dark:text-gray-400">{startDate} - {endDate}</p>
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert mb-4">{description[0]}</p>
      {isExpanded && (
        <>
          {description.slice(1).map((desc, index) => (
            <p key={index} className="prose prose-neutral dark:prose-invert mb-4">{desc}</p>
          ))}
          {achievements && achievements.length > 0 && (
            <>
              <p className="prose prose-neutral dark:prose-invert mb-2"><strong>Key Achievements:</strong></p>
              <ul className="prose prose-neutral dark:prose-invert list-disc pl-5 mb-4">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </>
          )}
          {technologies && (
            <p className="prose prose-neutral dark:prose-invert mb-4"><strong>Technologies used:</strong> {technologies}</p>
          )}
        </>
      )}
      <div className="flex justify-end">
        <button
          onClick={handleToggle}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </div>
  );
}

export default JobExperience;
