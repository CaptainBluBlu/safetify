// create blogpost page based on the other template files
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), { ssr: false, });

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetching posts from an API
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1>My Journal</h1>

      <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />

      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div>Categories: {post.categories.join(', ')}</div>
              <div>Tags: {post.tags.join(', ')}</div>
              <hr />
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        {pageRange.map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Other components for post creation, responsive design, SEO optimization, etc. */}
    </div>
  );
}

export default BlogPost;