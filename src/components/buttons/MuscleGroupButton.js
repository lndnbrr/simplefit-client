import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

function MuscleGroupButton({ muscleGroupObj }) {
  // This is a reusable button component that will be used to navigate a user to workouts that they did by muscle group!

  const router = useRouter();

  return (
    <button
      type="button"
      className="mgbutton"
      onClick={() => {
        router.push(`/pages/muscleGroups/${muscleGroupObj.id}`);
      }}
    >
      {muscleGroupObj.muscle_group}
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
