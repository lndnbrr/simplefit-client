'use client';

import WorkoutForm from '@/components/forms/WorkoutForm';
import { useEffect, useState } from 'react';
import { getSingleWorkout } from '@/api/workoutAPI';
import PropTypes from 'prop-types';

function UpdateWorkout({ params }) {
  // <h3>This is the page where we can update a Workout!</h3>

  const [editWO, setEditWO] = useState({});
  const { id } = params;

  useEffect(() => {
    getSingleWorkout(id).then(setEditWO);
  }, [id]);

  return <WorkoutForm workoutObj={editWO} />;
}

export default UpdateWorkout;

UpdateWorkout.propTypes = {
  params: PropTypes.string.isRequired,
};
