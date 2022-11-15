import Container from './components/Container/Container';
import JobList from './components/JobList/JobList';
import data from './data';

function App() {
  console.log(data);
  return (
    <Container>
      <JobList jobs={data}/>
    </Container>
  );
}

export default App;
