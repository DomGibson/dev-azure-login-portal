// src/Profile.js

import React from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const Profile = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const [userProfile, setUserProfile] = React.useState(null);

  React.useEffect(() => {
    if (isAuthenticated) {
      const request = {
        ...loginRequest,
        account: accounts[0]
      };

      instance.acquireTokenSilent(request).then(response => {
        // Fetch user profile using Microsoft Graph API or other APIs
        // Here, we will just display the basic account info
        setUserProfile(response.account);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [isAuthenticated, instance, accounts]);

  if (!isAuthenticated) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p><strong>Username:</strong> {userProfile.username}</p>
          <p><strong>Email:</strong> {userProfile.homeAccountId}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
