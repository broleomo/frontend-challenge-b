import styled from 'styled-components';

const FiltersContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);
  display: flex;
  font-family: 'League Spartan', sans-serif;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  top: 110px;
  width: 300px;

  @media screen and (min-width: 600px) {
    width: calc(100% - 100px);
  }

  @media screen and (min-width: 900px) {
    max-width: 900px;
    padding: 20px 30px;
    top: 130px;
  }

  @media screen and (min-width: 1300px) {
    top: 150px;
    }
`

const Filter = styled.div`
  background-color: hsl(180, 52%, 96%);
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  display: flex;
  font-size: 14px;
  margin: 5px;

  @media screen and (min-width: 1000px) {
    margin: 0 25px;
  }
`

const FilterExit = styled.button`
  background-color: hsl(180, 29%, 50%);
  border: 0;
  border-radius: 0px 4px 4px 0px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 0 10px;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`

const FilterClear = styled.button`
  background: none;
  border: 0;
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  font-family: 'League Spartan', sans-serif;

  &:hover {
    text-decoration: underline;
  }
`

const FilterContent = styled.p`
  margin: 5px;
`

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export { Filter, FiltersContainer, FilterContent, FilterExit, FilterClear, Filters }