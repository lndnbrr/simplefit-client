import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext';
import { createDescription } from '@/api/descriptionAPI';
import Button from 'react-bootstrap/Button';

const intialState = {
  description: '',
};

function DescriptionForm() {
  const [dInput, setDInput] = useState(intialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...dInput, uid: user.uid };
    createDescription(payload).then(() => {
      router.push('/pages/profile');
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Create a Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description name" name="description" value={dInput.description || ''} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DescriptionForm;
