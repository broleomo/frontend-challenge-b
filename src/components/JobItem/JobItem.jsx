import React from 'react';
import {Card, JobImage, JobInfoContainer, JobTitle, JobTitleContainer, JobTag, JobPostInfo, CompanyTitle, JobDescriptionTagContainer, JobDescriptor, JobTags} from './JobItem.styles';

const JobItem= ({company, image, tags, title, datePosted, contract, location, descriptors}) => {

  return (
    <>
      <Card>
        <JobImage src={image} />
        <JobInfoContainer>
          <JobTitleContainer>
            <CompanyTitle>{company}</CompanyTitle>
            <JobTags>
              {tags.map((tag, index) => (
                <JobTag key={index}>{tag}</JobTag>
              ))}
            </JobTags>
          </JobTitleContainer>
          <JobTitle>{title}</JobTitle>
          <JobPostInfo>{datePosted} &#183; {contract} &#183; {location}</JobPostInfo>
        </JobInfoContainer>
        <JobDescriptionTagContainer>
          {descriptors.map((descriptor, index) => (
            <JobDescriptor key={index}>{descriptor}</JobDescriptor>
          ))}
        </JobDescriptionTagContainer>
      </Card>
    </>
)}

export default JobItem;