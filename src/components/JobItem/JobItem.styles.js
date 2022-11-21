import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-left: ${props => props.featured ? "5px solid hsl(180, 29%, 50%)" : "white"};
  border-radius: 5px;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);
  display: flex;
  flex-direction: column;
  font-family: 'League Spartan', sans-serif;
  justify-content: flex-start;
  margin: 40px 10px 10px 10px;
  padding: 30px;
  width: 300px;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    max-width: 900px;
    width: calc(100% - 100px);
  }
`

const JobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  

  @media screen and (min-width: 800px) {
    margin: 0 300px 0 10px;
  }
`

const CompanyTitle = styled.p`
  color: hsl(180, 29%, 50%);
  font-size: 14px;
  font-weight: bold;
  margin: 2px 5px 0 0;
`

const JobTitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const JobTag = styled.div`
  align-items: center;
  background-color: ${props => props.featured ? "hsl(180, 14%, 20%)" : "hsl(180, 29%, 50%)"};
  border-radius: 25px;
  color: white;
  display: flex;
  font-size: 12px;
  margin: 0 5px;
  padding: 5px;
  text-transform: uppercase;
`

const JobImage = styled.img`
  bottom: 44px;
  position: relative;
  width: 18%;

  @media screen and (min-width: 700px) {
    bottom: 0;
    height: 100px;
    width: 100px;
  }
`

const JobTitle = styled.p`
  color: black;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;

  &:hover {
    color: hsl(180, 29%, 50%);
  }
`

const JobPostInfo = styled.div`
  border-bottom: 1px solid hsl(180, 31%, 95%);
  color: gray;
  display: flex;
  font-weight: 100;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 800px) {
    border-bottom: 0;
    flex-direction: row;
  }
`

const JobDescriptionTagContainer = styled.div`
  align-items: center;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
    justify-content: space-around;
    }
`

const JobDescriptor = styled.button`
  background-color: hsl(180, 52%, 96%);
  border: 0;
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  font-family: 'League Spartan', sans-serif;
  margin: 5px;
  padding: 5px;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }
`

const JobTags = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  height: 15px;
`

export {Card, JobInfoContainer, JobImage, JobTag, JobPostInfo, JobTitle, CompanyTitle, JobTitleContainer, JobDescriptionTagContainer, JobDescriptor, JobTags, ImageContainer};