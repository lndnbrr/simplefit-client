'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/utils/context/authContext';
import { getDescriptionsByUid, deleteDescription } from '@/api/descriptionAPI';
import DescriptionForm from '@/components/forms/DescriptionForm';
import { Button } from 'react-bootstrap';

function DescriptionPage() {
  const [descriptions, setDescriptions] = useState([]);
  const { user } = useAuth();

  const getAllDescriptions = () => {
    getDescriptionsByUid(user.uid).then(setDescriptions);
  };

  useEffect(() => {
    getAllDescriptions();
  }, [user]);

  const deleteThisDescription = (id) => {
    deleteDescription(id).then(() => {
      getAllDescriptions();
    });
  };

  return (
    <>
      <div>DESCRIPTION MANAGER</div>
      <DescriptionForm />
      {descriptions.map((d) => (
        <div key={d.id} className="woborder">
          {d.description}
          <Button type="submit" variant="danger" onClick={() => deleteThisDescription(d.id)}>
            Delete
          </Button>
        </div>
      ))}
    </>
  );
}

export default DescriptionPage;
