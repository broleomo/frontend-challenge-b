import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  ImageContainer, 
  JobImage, 
  JobInfoContainer, 
  JobTitle, 
  JobTitleContainer, 
  JobTag, 
  JobPostInfo, 
  CompanyTitle, 
  JobDescriptionTagContainer, 
  JobDescriptor, 
  JobTags } from './JobItem.styles';

const JobItem = ({ company, image, title, datePosted, contract, location, featured, newJob, addFilter, descriptors }) => {
  return (
    <>
      <Card featured={featured}>
        <ImageContainer className="test"><JobImage src={image} alt={`${company} logo`} /></ImageContainer>
        <JobInfoContainer>
          <JobTitleContainer>
            <CompanyTitle>{company}</CompanyTitle>
            <JobTags>
                {newJob && <JobTag>New!</JobTag>}
                {featured && <JobTag featured>Featured</JobTag>}
            </JobTags>
          </JobTitleContainer>
          <JobTitle>{title}</JobTitle>
          <JobPostInfo>
            <p>{datePosted} &#183;</p> 
            <p>{contract} &#183; </p> 
            <p>{location}</p>
          </JobPostInfo>
        </JobInfoContainer>
        <JobDescriptionTagContainer>
          {descriptors.map(descriptor => <JobDescriptor key={descriptor} onClick={() => addFilter(descriptor)}>{descriptor}</JobDescriptor>)}
        </JobDescriptionTagContainer>
      </Card>
    </>
)}

JobItem.propTypes = {
  company: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  datePosted: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
  featured: PropTypes.bool,
  newJob: PropTypes.bool,
  addFilter: PropTypes.func,
  descriptors: PropTypes.array
}

export default JobItem;