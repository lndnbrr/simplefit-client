'use client';

import PropTypes from 'prop-types';
import { getMgWorkouts } from '@/api/workoutAPI';
import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';
import WorkoutLog from '@/components/cards/WorkoutLog';

function WorkoutsByMG({ params }) {
  const [workouts, setWorkouts] = useState([]);
  const { user } = useAuth();
  const { id } = params;

  useEffect(() => {
    getMgWorkouts(user.uid, id).then(setWorkouts);
  }, [user.uid, id]);

  return (
    <>
      <h3>This is the page where we see all Workouts by Muscle Group!</h3>
      <p>This is the id: {id}</p>
      {workouts.map((wo) => (
        <WorkoutLog key={wo.id} workoutObj={wo} />
      ))}
    </>
  );
}

export default WorkoutsByMG;

WorkoutsByMG.propTypes = {
  params: PropTypes.string.isRequired,
};
