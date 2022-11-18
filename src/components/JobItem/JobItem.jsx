import React from 'react';
import {
  Card, 
  JobImage, 
  JobInfoContainer, 
  JobTitle, 
  JobTitleContainer, 
  JobTag, 
  JobPostInfo, 
  CompanyTitle, 
  JobDescriptionTagContainer, 
  JobDescriptor, 
  JobTags} from './JobItem.styles';

const JobItem = ({company, image, title, datePosted, contract, location, featured, newJob, role, level, languages, tools, addFilter, descriptors }) => {
  return (
    <>
      <Card featured={featured}>
        <JobImage src={image} alt={`${company} logo`} />
        <JobInfoContainer>
          <JobTitleContainer>
            <CompanyTitle>{company}</CompanyTitle>
            <JobTags>
                {newJob && <JobTag>New!</JobTag>}
                {featured && <JobTag featured>Featured</JobTag>}
            </JobTags>
          </JobTitleContainer>
          <JobTitle>{title}</JobTitle>
          <JobPostInfo>{datePosted} &#183; {contract} &#183; {location}</JobPostInfo>
        </JobInfoContainer>
        <JobDescriptionTagContainer>
          {descriptors.map(descriptor => <JobDescriptor key={descriptor} onClick={() => addFilter(descriptor)}>{descriptor}</JobDescriptor>)}
        </JobDescriptionTagContainer>
      </Card>
    </>
)}

export default JobItem;