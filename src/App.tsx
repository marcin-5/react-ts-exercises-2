import Button from './components/Button';
import { Demo } from './components/Card.tsx';
import Container from './components/Container.tsx';

function App() {
  return (
    <main>
      <Container as={Button}>Click Me</Container>
      {Demo()}
    </main>
  );
}

export default App;
