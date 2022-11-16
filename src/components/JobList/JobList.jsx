import React from 'react';
import JobItem from '../JobItem/JobItem';
import {FiltersContainer, Filter, ListContainer, FilterContent, FilterExit} from './JobList.styles';

const JobList = ({jobs}) => {
  return (
    <>
    <FiltersContainer>
      <Filter>
        <FilterContent>Filter</FilterContent>
        <FilterExit>X</FilterExit>
      </Filter>
    </FiltersContainer>
    <ListContainer>
    {jobs.map((job) => (
      <JobItem
        key={job.id}
        company={job.company} 
        image={job.logo}
        title={job.position} 
        datePosted={job.postedAt}
        contract={job.contract} 
        location={job.location} 
        newJob={job.new}
        featured={job.featured}
        role={job.role}
        level={job.level}
        languages={job.languages}
        tools={job.tools}
      />
    ))}
    </ListContainer>
    </>
)}

export default JobList;