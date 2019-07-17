import React from 'react';

export default function ProjectSummary({ project }) {
  return (
    <div className='card z-depth-0 project-summary'>
    <div className='card-content grey-text text-darken-3'>
      <span className='card-title'>{project.title}</span>
      <p>Posted by Vadim</p>
      <p className='grey-text'>July 17th, 3am</p>
    </div>
    </div>
  );
};
