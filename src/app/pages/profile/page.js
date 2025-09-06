'use client';

import { useAuth } from '@/utils/context/authContext';
import { useRouter } from 'next/navigation';

function ProfilePage() {
  // This is the page where we can view our profile as a user!
  const { user } = useAuth();
  const router = useRouter();

  return (
    <>
      <h3>{user.name}</h3>
      <button
        type="button"
        onClick={() => {
          router.push(`/pages/workout`);
        }}
      >
        all workouts
      </button>
    </>
  );
}

export default ProfilePage;
