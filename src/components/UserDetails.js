// UserDetails.js
import React, { useState, useEffect } from 'react';
import Post from './Post';
import './UserDetails.css';
import { fetchData } from '../services/api';

const UserDetails = ({ userId, showDetailsByDefault }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [showDetails, setShowDetails] = useState(showDetailsByDefault);

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((data) => setUserPosts(data))
      .catch((error) => console.error('Error fetching user posts:', error));
  }, [userId]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`user-details ${showDetails ? 'expanded' : ''}`} onClick={toggleDetails}>
      <h2>User Details</h2>
      {showDetails ? (
        userPosts.length > 0 ? (
          <>
            <p>{`Total Posts: ${userPosts.length}`}</p>
            <h3>Latest Posts:</h3>
            {userPosts.slice(0, 3).map((post) => (
              <Post key={post.id} postId={post.id} />
            ))}
          </>
        ) : (
          <p>No posts available for this user.</p>
        )
      ) : (
        <p>{`Click to view details for ${userPosts.length} posts`}</p>
      )}
    </div>
  );
};

export default UserDetails;
