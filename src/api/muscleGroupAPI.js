// All API calls for Muscle Group data will reside here

const getMuscleGroups = () =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/muscle_groups`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getMuscleGroups;
