import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const BlogPost = dynamic(() => import("../../../shared/data/datablog/blogpost"), { ssr: false, });

function BlogPostCom() {
  const entries = [
    {
      id: 1,
      time: "1d",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 2,
      time: "1w",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 3,
      time: "5w",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 4,
      time: "14w",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 5,
      time: "1yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 6,
      time: "2yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 7,
      time: "2yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },
  ];

  return (
    <div className="blog-post">
      <Seo title="My Journal" />
      {entries.map((entry) => (
        <div key={entry.id} className="entry">
          <div className="entry-image">
            <img src={entry.image} alt="Entry" />
          </div>
          <div className="entry-content">
            <h2>{entry.header}</h2>
            <p>{entry.text}</p>
          </div>
          <div className="entry-timeline">
            <span>{entry.time}</span>
          </div>
        </div>
      ))}
      <BlogPost />
    </div>
  );
};

BlogPostCom.layout = "Contentlayout"
export default BlogPostCom;