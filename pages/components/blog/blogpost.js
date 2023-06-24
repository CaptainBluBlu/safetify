import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const BlogPost = dynamic(
  () => import("../../../shared/data/datablog/blogpost"),
  { ssr: false, }
);

const BlogPostCom = () => {
  return (
    <div>
      <Seo title="My Journal" />

      <BlogPost />
    </div>
  );
};

BlogPostCom.layout = "Contentlayout"
export default BlogPostCom;