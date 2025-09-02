import PropTypes from 'prop-types';

function MuscleGroupButton({ muscleGroupObj }) {
  // This is a reusable button component that will be used to navigate a user to workouts that they did by muscle group!

  return (
    <button type="button" className="mgbutton">
      {muscleGroupObj}
    </button>
  );
}

export default MuscleGroupButton;

MuscleGroupButton.propTypes = {
  muscleGroupObj: PropTypes.shape({
    id: PropTypes.number,
    muscle_group: PropTypes.string,
  }).isRequired,
};
