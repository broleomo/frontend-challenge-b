import styled from 'styled-components';

const FiltersContainer = styled.div`
  background-color: white;
  display: flex;
  font-family: 'League Spartan', sans-serif;
  justify-content: space-between;
  width: calc(100% - 100px);
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 110px;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);

  @media screen and (min-width: 1000px) {
  top: 130px;
  padding: 20px 30px;
  max-width: 900px;
  }

  @media screen and (min-width: 1300px) {
    top: 150px;
    padding: 20px 30px;
    }
`

const Filter = styled.div`
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  display: flex;
  border-radius: 5px;
  margin: 5px;
  font-size: 14px;

  @media screen and (min-width: 1000px) {
    margin: 0 25px;
    }
`

const FilterExit = styled.button`
  border: 0;
  padding: 0 10px;
  background-color: hsl(180, 29%, 50%);
  border-radius: 0px 4px 4px 0px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`

const FilterClear = styled.button`
  border: 0;
  background: none;
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
  justify-content: flex-start;
  flex-wrap: wrap;
`
export { Filter, FiltersContainer, FilterContent, FilterExit, FilterClear, Filters }