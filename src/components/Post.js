// Post.js
import React, { useState, useEffect } from 'react';
import './Post.css'; // Import the CSS file

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else {
          console.error(`Failed to fetch post with ID ${postId}`);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-container">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.body}</p>
      <p className="post-details">
        <strong>User ID:</strong> {post.userId} | <strong>Post ID:</strong> {post.id}
      </p>
    </div>
  );
};

export default Post;
