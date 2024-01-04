// UserProfile.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import Clock from '../components/Clock';
import { fetchData } from '../services/api';
import './UserProfile.css'; // Import the CSS file

const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user details:', error));
  }, [match.params.id]);

  return (
    <div className="user-profile-container">
      {user && (
        <>
          <UserDetails user={user} />
          <Clock />
          {/* Add additional components for posts, clock, etc. */}
        </>
      )}
      <Link to="/" className="back-to-directory-link">
        Back to User Directory
      </Link>
    </div>
  );
};

export default UserProfile;
