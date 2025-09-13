'use client';

import { useAuth } from '@/utils/context/authContext';
import WorkoutLog from '@/components/cards/WorkoutLog';
import { useEffect, useState } from 'react';
import { getUidWorkouts } from '@/api/workoutAPI';

function WorkoutHistory() {
  // This is the page where we can see all of a users Workouts!
  const [workouts, setWorkouts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getUidWorkouts(user.uid).then(setWorkouts);
  }, [user.uid]);

  const resetWorkouts = () => {
    getUidWorkouts(user.uid).then(setWorkouts);
  };

  return (
    <>
      {workouts.map((wo) => (
        <WorkoutLog key={wo.id} workoutObj={wo} onUpdate={resetWorkouts} />
      ))}
    </>
  );
}

export default WorkoutHistory;
