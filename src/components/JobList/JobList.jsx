import React from 'react';
import JobItem from '../JobItem/JobItem';
import ListContainer from './JobList.styles';
const JobList = ({jobs}) => {
  return (
    <ListContainer>
    {jobs.map((job) => (
      <JobItem
        key={job.id}
        company={job.company} 
        image={job.logo}
        tags={['featured', 'NEW']} 
        title={job.position} 
        datePosted={job.postedAt}
        contract={job.contract} 
        location={job.location} 
        descriptors={['here', 'are', 'some', 'descriptors']}
        newJob={job.new}
        featured={job.featured}
        role={job.role}
        level={job.level}
        languages={job.languages}
        tools={job.tools}
      />
    ))}
    </ListContainer>
)}

export default JobList;