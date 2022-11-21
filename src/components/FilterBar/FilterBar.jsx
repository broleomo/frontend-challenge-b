import React from 'react';
import PropTypes from 'prop-types';
import { Filter, Filters, FiltersContainer, FilterContent, FilterExit, FilterClear } from './FilterBar.styles';

const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  return (
    <>
      <FiltersContainer>
        <Filters>
        {filters?.map(filter => (
          <Filter key={filter}>
            <FilterContent>{filter}</FilterContent>
            <FilterExit onClick={() => removeFilter(filter)}>X</FilterExit>
          </Filter>
        ))}
        </Filters>
        <FilterClear onClick={clearFilters}>Clear</FilterClear>
      </FiltersContainer>
    </>
)}

FilterBar.propTypes = {
  filters: PropTypes.array,
  removeFilter: PropTypes.func,
  clearFilters: PropTypes.func
}

export default FilterBar;