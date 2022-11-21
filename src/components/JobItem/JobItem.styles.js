import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  display: flex;
  margin: 40px 10px 10px 10px;
  padding: 30px;
  border-radius: 5px;
  font-family: 'League Spartan', sans-serif;
  justify-content: flex-start;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);
  border-left: ${props => props.featured ? "5px solid hsl(180, 29%, 50%)" : "white"};
  flex-direction: column;
  width: 300px;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    width: calc(100% - 100px);
    max-width: 900px;
    }
`

const JobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  

  @media screen and (min-width: 800px) {
    margin: 0 250px 0 10px;
    }
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
  width: 18%;
  position: relative;
  bottom: 44px;

  @media screen and (min-width: 700px) {
    width: 100px;
    height: 100px;
    bottom: 0;
    }
`

const JobTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    color: hsl(180, 29%, 50%);
  }
`

const JobPostInfo = styled.div`
  color: gray;
  font-weight: 100;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  border-bottom: 1px solid hsl(180, 31%, 95%);
  margin-bottom: 10px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    border-bottom: 0;
    }
`

const JobDescriptionTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 800px) {
    justify-content: space-around;
    flex-wrap: nowrap;
    }
`

const JobDescriptor = styled.button`
  font-family: 'League Spartan', sans-serif;
  color: hsl(180, 29%, 50%);
  padding: 5px;
  border-radius: 5px;
  background-color: hsl(180, 52%, 96%);
  margin: 5px;
  border: 0;
  cursor: pointer;

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