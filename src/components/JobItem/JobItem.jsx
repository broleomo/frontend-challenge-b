import React from 'react';
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
  JobTags} from './JobItem.styles';

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

export default JobItem;