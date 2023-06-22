import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';

const Widget = dynamic(() => import("@/shared/data/app/widget"), {ssr: false,});


const Widgets = () => {
  return (

    <div >
      <Seo title="Widgets"/>
      <PageHeader titles="Widgets" active="Widgets" items={['Home']} />
      <Widget/>
    </div>

  )
};
Widgets.layout = "Contentlayout"
export default Widgets;
