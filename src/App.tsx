import Button from './components/Button';
import Container from './components/Container.tsx';
import { Demo } from './components/IconButton.tsx';

function App() {
  return (
    <main>
      <Container as={Button}>Click Me</Container>
      <div style={{ margin: '20px' }}>{Demo()}</div>
    </main>
  );
}

export default App;
