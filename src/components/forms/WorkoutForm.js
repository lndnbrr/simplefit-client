'use client';

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getMuscleGroups from '@/api/muscleGroupAPI';
import { getDescriptionsByUid } from '@/api/descriptionAPI';
import { createWorkout, updateWorkout } from '@/api/workoutAPI';
import { useAuth } from '@/utils/context/authContext';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  num_of_sets: 0,
  total_reps: 0,
  max_weight: 0,
  muscle_group_id: 0,
  descriptions: [],
  is_complete: false,
};

function WorkoutForm({ workoutObj = initialState }) {
  const [formInput, setFormInput] = useState({
    ...workoutObj,
    descriptions: workoutObj.descriptions || [],
  });
  const [mgInput, setMgInput] = useState([]);
  const [dInput, setDInput] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (workoutObj.id) {
      let descriptions = [];
      if (workoutObj.descriptions) {
        descriptions = workoutObj.descriptions.map((des) => {
          if (typeof des === 'object' && des.id) {
            return des.id;
          }
          return Number(des);
        });
      }

      let muscleGroupId = workoutObj.muscle_group_id;
      if (typeof muscleGroupId === 'object' && muscleGroupId.id) {
        muscleGroupId = muscleGroupId.id;
      }

      setFormInput({
        ...workoutObj,
        descriptions,
        muscle_group_id: muscleGroupId,
      });
    }
  }, [workoutObj]);

  useEffect(() => {
    getMuscleGroups().then(setMgInput);
  }, []);

  useEffect(() => {
    getDescriptionsByUid(user.uid).then(setDInput);
  }, [user.uid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedVal = value;
    if (name === 'num_of_sets' || name === 'total_reps' || name === 'max_weight' || name === 'muscle_group_id') {
      parsedVal = Number(value);
    }
    setFormInput((prevState) => ({ ...prevState, [name]: parsedVal }));
  };

  const handleDescriptions = (e) => {
    const { value } = e.target;
    const formDescriptions = [...(formInput.descriptions || [])];
    const i = formDescriptions.indexOf(Number(value));

    if (i !== -1) {
      formDescriptions.splice(i, 1);
      setFormInput((prev) => ({ ...prev, descriptions: formDescriptions }));
    } else {
      formDescriptions.push(Number(value));
      setFormInput((prev) => ({ ...prev, descriptions: formDescriptions }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting formInput:', formInput);

    if (workoutObj.id) {
      updateWorkout(formInput).then(() => router.push(`/pages/workout`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createWorkout(payload).then(() => {
        router.push('/pages/workout');
      });
    }
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
        <Form.Select aria-label="select a muscle group" name="muscle_group_id" value={formInput.muscle_group_id || ''} onChange={handleChange}>
          <option value="">select a muscle group</option>
          {mgInput.map((mg) => (
            <option key={mg.id} value={mg.id}>
              {mg.muscle_group}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptions">
        <Form.Label>Description Selection</Form.Label>
        <div>
          {dInput.map((d) => {
            const isChecked = (formInput.descriptions || []).includes(d.id);

            return <Form.Check key={d.id} inline label={d.description} value={d.id} type="checkbox" checked={isChecked} onChange={handleDescriptions} />;
          })}
        </div>
      </Form.Group>

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

WorkoutForm.propTypes = {
  workoutObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    num_of_sets: PropTypes.number,
    total_reps: PropTypes.number,
    max_weight: PropTypes.number,
    time_stamp: PropTypes.string,
    is_complete: PropTypes.bool,
    muscle_group_id: PropTypes.shape({
      id: PropTypes.number,
      muscle_group: PropTypes.string,
    }),
    descriptions: PropTypes.arrayOf(PropTypes.number),
  }),
};

WorkoutForm.defaultProps = {
  workoutObj: initialState,
};
