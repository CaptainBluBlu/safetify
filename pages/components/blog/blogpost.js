// create blogpost page based on the other template files
import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});

const BlogPost = () => {
    return (
        <div>
            <Seo title="Blog Post"/>
            <Dashboard/>
        </div>
    )
}

BlogPost.layout = "Contentlayout"

export default BlogPost
