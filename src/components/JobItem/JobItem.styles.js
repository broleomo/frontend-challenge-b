import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  display: flex;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  font-family: 'League Spartan', sans-serif;
  justify-content: center;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);
  border-left: ${props => props.featured ? "5px solid hsl(180, 29%, 50%)" : "white"};
`

const JobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 300px 0 10px;
`

const CompanyTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: hsl(180, 29%, 50%);
  margin: 2px 5px 0 0;
`

const JobTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const JobTag = styled.div`
  font-size: 12px;
  background-color: ${props => props.featured ? "hsl(180, 14%, 20%)" : "hsl(180, 29%, 50%)"};
  border-radius: 25px;
  color: white;
  padding: 5px;
  margin: 0 5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const JobImage = styled.img`
  border-radius: 50%;
`

const JobTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0;
`

const JobPostInfo = styled.div`
  color: gray;
  font-weight: 100;
`

const JobDescriptionTagContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-around;
`

const JobDescriptor = styled.button`
  font-family: 'League Spartan', sans-serif;
  color: hsl(180, 29%, 50%);
  padding: 5px;
  border-radius: 5px;
  background-color: hsl(180, 52%, 96%);
  margin: 0 5px;
  border: 0;
  cursor: pointer;
`

const JobTags = styled.div`
  display: flex;
`

export {Card, JobInfoContainer, JobImage, JobTag, JobPostInfo, JobTitle, CompanyTitle, JobTitleContainer, JobDescriptionTagContainer, JobDescriptor, JobTags};