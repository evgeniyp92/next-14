'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user, null, 2)}</div>;
  }

  return <div>User is not signed in</div>;
};

export default Profile;
