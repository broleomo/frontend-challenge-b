import React, {useState} from 'react';
import PropTypes from 'prop-types';
import JobItem from '../JobItem/JobItem';
import { ListContainer, Wrapper } from './JobList.styles';
import FilterBar from '../FilterBar/FilterBar';

const JobList = ({ jobs }) => {
  const [filters, setFilters] = useState([]);
  const addFilter = (filter) => !filters?.includes(filter) && setFilters([...filters, filter]);
  const removeFilter = (filterToRemove) => setFilters(filters?.filter((filter) => filterToRemove !== filter));
  let filteredJobs = [...jobs];
  if (filters.length > 0) {
    filteredJobs = filteredJobs.filter((job) => {
      const fail = filters.map((filter) => (
        // Return whether the selected filter is in the descriptors array (returning a true value)
        job.descriptors.includes(filter)
      ))
      // Filter out any array that included a false value.
      // This is because the filter is an AND filter not an OR filter.
      .includes(false);
      return !fail ? job : null;
    });
  }

  return (
    <Wrapper>
      {filters?.length > 0 && <FilterBar filters={filters} removeFilter={removeFilter} clearFilters={() => setFilters([])} />}
      <ListContainer>
      {filteredJobs.map((job) => (
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
          addFilter={addFilter}
          descriptors={job.descriptors}
        />
      ))}
      </ListContainer>
    </Wrapper>
)}

JobList.propTypes = {
  jobs: PropTypes.array
}

export default JobList;