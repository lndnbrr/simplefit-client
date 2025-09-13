// All API calls for Description data will reside here
const getAllDescriptions = () =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:8000/descriptions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getDescriptionsByUid = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/descriptions?uid=${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createDescription = (payload) =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:8000/descriptions', {
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

const deleteDescription = (id) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/descriptions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllDescriptions, getDescriptionsByUid, createDescription, deleteDescription };
