import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const FiltersContainer = styled.div`
  background-color: white;
  display: flex;
  padding: 20px;
`

const Filter = styled.div`
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  display: flex;
  font-family: 'League Spartan', sans-serif;
  border-radius: 5px;
`

const FilterExit = styled.button`
  border: 0;
  padding: 0 10px;
  background-color: hsl(180, 29%, 50%);
  border-radius: 0px 5px 5px 0px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`

const FilterContent = styled.p`
  margin: 5px;
`

export {ListContainer, FiltersContainer, Filter, FilterContent, FilterExit};