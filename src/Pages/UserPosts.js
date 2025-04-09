// src/Pages/UserPosts.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, [id]);

  return (
    <>
      <h2>User ID: {id} - Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPosts;
