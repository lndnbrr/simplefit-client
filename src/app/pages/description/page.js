'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/utils/context/authContext';
import { getDescriptionsByUid } from '@/api/descriptionAPI';
import DescriptionForm from '@/components/forms/DescriptionForm';

function DescriptionPage() {
  const [description, setDescription] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getDescriptionsByUid(user.uid).then(setDescription);
  }, [user]);

  return (
    <>
      <div>DESCRIPTION MANAGER</div>
      <DescriptionForm />
      {description.map((d) => (
        <div key={d.id} className="woborder">
          {d.description}
        </div>
      ))}
    </>
  );
}

export default DescriptionPage;
