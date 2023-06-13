import React from 'react'
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const ChatPage = dynamic(() => import("../../../shared/data/chat/chat"), {ssr: false,});

const index = () => {
  return (
    <div>
        <Seo title="Dashboard"/>
        <ChatPage/>
    </div>
  )
}

index.layout = "Contentlayout"
export default index


