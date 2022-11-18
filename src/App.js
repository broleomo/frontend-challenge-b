import Container from './components/Container/Container';
import JobList from './components/JobList/JobList';
import data from './data';

function App() {
  // Adding new attribute to encapsulate all job descriptors for filtering.
  const jobsWithDescriptors = data.map(job => ({...job, descriptors: [job.role, job.level, ...job.languages, ...job.tools]}));
  return (
    <Container>
      <JobList jobs={jobsWithDescriptors}/>
    </Container>
  );
}

export default App;
