// All API calls for Workout data will reside here

const getUidWorkouts = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/workouts?uid=${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getMgWorkouts = (uid, mgid) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/workouts?uid=${uid}&muscle_group_id_id=${mgid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createWorkout = (payload) =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:8000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getUidWorkouts, getMgWorkouts, createWorkout };
