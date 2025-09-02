'use client';

import { useEffect, useState } from 'react';
import MuscleGroupButton from '@/components/buttons/MuscleGroupButton';
import getMuscleGroups from '@/api/muscleGroupAPI';

function MuscleGroupNav() {
  const [muscleGroups, setMuscleGroups] = useState([]);

  useEffect(() => {
    getMuscleGroups().then(setMuscleGroups);
  }, []);

  console.log('muscleGroups:', muscleGroups);
  return (
    <>
      <h3>This is the Specific Muscle Groups Main Page! Here, users can navigate to any muscle group to see all of their workouts within that group.</h3>

      {muscleGroups.map((mGroup) => (
        <MuscleGroupButton muscleGroupObj={mGroup.muscle_group} />
      ))}
    </>
  );
}

export default MuscleGroupNav;
