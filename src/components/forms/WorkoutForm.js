import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WorkoutForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter workout name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="num_of_sets">
        <Form.Label>Number of Sets</Form.Label>
        <Form.Control type="text" placeholder="Enter the number of sets you have done" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="total_reps">
        <Form.Label>Number of Reps</Form.Label>
        <Form.Control type="text" placeholder="Enter the TOTAL number of reps you have done" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="max_weight">
        <Form.Label>Max Weight Attempted</Form.Label>
        <Form.Control type="text" placeholder="Enter the HIGHEST weight you attempted for a set" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="muscle_group_id">
        <Form.Label>Muscle Group Selection</Form.Label>
        <Form.Select aria-label="select a muscle group">
          <option>select a muscle group</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="description">
        <Form.Check type="checkbox" label="This is going to be for description" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="is_complete">
        <Form.Check type="checkbox" label="Is Your Workout Complete?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default WorkoutForm;
