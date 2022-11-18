import styled from 'styled-components';

const FiltersContainer = styled.div`
  background-color: white;
  display: flex;
  font-family: 'League Spartan', sans-serif;
  justify-content: space-between;
  min-width: 900px;
  padding: 20px 30px;
  border-radius: 5px;
  position: absolute;
  top: 156px;
  box-shadow: 0px 0px 17px hsl(180deg 29% 50%);
`

const Filter = styled.div`
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  display: flex;
  border-radius: 5px;
  margin: 0 25px;
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
`
export { Filter, FiltersContainer, FilterContent, FilterExit, FilterClear, Filters }