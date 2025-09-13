import Link from 'next/link';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { deleteWorkout } from '../../api/workoutAPI';

function WorkoutLog({ workoutObj, onUpdate }) {
  // This is a reusable card component that will be used to display workouts that a user performed!

  const deleteThisWorkout = () => {
    if (window.confirm(`Delete ${workoutObj.name}?`)) {
      deleteWorkout(workoutObj.id).then(() => onUpdate());
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="woborder">
        <div>Timestamp</div>
        <div>{workoutObj.time_stamp}</div>
      </div>
      <div className="woborder">
        <div>Name of workout</div>
        <div>{workoutObj.name}</div>
      </div>
      <div className="woborder">
        <div>Number of sets</div>
        <div>{workoutObj.num_of_sets}</div>
      </div>
      <div className="woborder">
        <div>Total amount of reps</div>
        <div>{workoutObj.total_reps}</div>
      </div>
      <div className="woborder">
        <div>Max weight of a set</div>
        <div>{workoutObj.max_weight}</div>
      </div>
      <div className="woborder">
        <div>Associated muscle group</div>
        <div>{workoutObj.muscle_group_id.muscle_group}</div>
      </div>
      <div className="woborder">
        <div>Descriptions</div>
        {workoutObj.descriptions.map((description) => (
          <div key={description.id}>{description.description}</div>
        ))}
      </div>
      <div className="woborder">
        <div>Did you complete the workout?</div>
        {workoutObj.is_complete ? <div>Yes</div> : <div>No</div>}
      </div>
      <div className="woborder">
        <Link href={`workout/update/${workoutObj.id}`} passHref>
          <Button variant="warning">Edit</Button>
        </Link>
        <Button onClick={deleteThisWorkout} variant="danger">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default WorkoutLog;

WorkoutLog.propTypes = {
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
    descriptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
      }),
    ),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
