import PropTypes from 'prop-types';

function WorkoutsByMG({ params }) {
  const { id } = params;

  return (
    <>
      <h3>This is the page where we see all Workouts by Muscle Group!</h3>
      <p>This is the id: {id}</p>
    </>
  );
}

export default WorkoutsByMG;

WorkoutsByMG.propTypes = {
  params: PropTypes.string.isRequired,
};
