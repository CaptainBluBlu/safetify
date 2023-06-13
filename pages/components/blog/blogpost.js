// create blogpost page based on the other template files
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});

const BlogPost = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    const newEntry = {
      title: 'New Entry',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date().toLocaleDateString(),
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      <h1>My Journal</h1>
      <button onClick={addEntry}>Add Entry</button>
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <h2>{entry.title}</h2>
              <p>{entry.content}</p>
              <p>{entry.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries yet.</p>
      )}
    </div>
  );
};

export default BlogPost;
