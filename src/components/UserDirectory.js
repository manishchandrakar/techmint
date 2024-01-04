// UserDirectory.js
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import UserDetails from './UserDetails';
import { fetchData } from '../services/api';
import './UserDirectory.css';

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        // Add a new property 'postsCount' to each user with the total number of posts
        const usersWithPostsCount = data.map((user) => ({
          ...user,
          postsCount: 0, // Initialize the count to 0
        }));
        setUsers(usersWithPostsCount);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="user-directory-container">
      <h1 className="user-directory-title">User Directory</h1>
      <div className="user-cards-container">
        {users.map((user) => (
          <div key={user.id} onClick={() => handleUserClick(user.id)}>
            <UserCard
              user={user}
              onClick={() => handleUserClick(user.id)}
              isSelected={selectedUserId === user.id}
            />
            {selectedUserId === user.id && (
              <UserDetails userId={selectedUserId} />              
            )}
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default UserDirectory;
