import React from "react";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
const ChatPage = dynamic(
  () => import("../../../shared/data/chat/groupChatComponent"),
  { ssr: false }
);

const GroupChatCom = () => {
  return (
    <div>
      <Seo title="Dashboard" />
      <ChatPage />
    </div>
  );
};

GroupChatCom.layout = "Contentlayout";
export default GroupChatCom;
