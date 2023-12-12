import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form.tsx';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // const extractedData = data as { name: string; age: string };
    if (!data || typeof data !== 'object' || !('name' in data) || !('age' in data)) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
