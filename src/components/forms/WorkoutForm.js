'use client';

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getMuscleGroups from '@/api/muscleGroupAPI';
import { createWorkout } from '@/api/workoutAPI';
import { useAuth } from '@/utils/context/authContext';
import { useRouter } from 'next/navigation';

const initialState = {
  name: '',
  num_of_sets: 0,
  total_reps: 0,
  max_weight: 0,
  muscle_group_id: 0,
  is_complete: false,
};

function WorkoutForm() {
  const [formInput, setFormInput] = useState(initialState);
  const [mgInput, setMgInput] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getMuscleGroups().then(setMgInput);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedVal = value;
    if (name === 'num_of_sets' || name === 'total_reps' || name === 'max_weight' || name === 'muscle_group_id') {
      parsedVal = Number(value);
    }
    setFormInput((prevState) => ({ ...prevState, [name]: parsedVal }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    createWorkout(payload).then(() => {
      router.push('/pages/workout');
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter workout name" name="name" value={formInput.name || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="num_of_sets">
        <Form.Label>Number of Sets</Form.Label>
        <Form.Control type="text" placeholder="Enter the number of sets you have done" name="num_of_sets" value={formInput.num_of_sets || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="total_reps">
        <Form.Label>Number of Reps</Form.Label>
        <Form.Control type="text" placeholder="Enter the TOTAL number of reps you have done" name="total_reps" value={formInput.total_reps || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="max_weight">
        <Form.Label>Max Weight Attempted</Form.Label>
        <Form.Control type="text" placeholder="Enter the HIGHEST weight you attempted for a set" name="max_weight" value={formInput.max_weight || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="muscle_group_id">
        <Form.Label>Muscle Group Selection</Form.Label>
        <Form.Select aria-label="select a muscle group" name="muscle_group_id" onChange={handleChange}>
          <option value="">select a muscle group</option>
          {mgInput.map((mg) => (
            <option value={mg.id}>{mg.muscle_group}</option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="description">
        <Form.Check type="checkbox" label="This is going to be for description" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="is_complete">
        <Form.Check
          type="checkbox"
          label="Is Your Workout Complete?"
          name="is_complete"
          checked={formInput.is_complete}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              is_complete: e.target.checked,
            }));
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default WorkoutForm;
