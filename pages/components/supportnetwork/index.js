import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";

import { prisma } from "@/db";

// export async function getServerSideProps() {
//   const groupChat = await prisma.chatRooms.findMany();

//   const supportPost = await prisma.supportPost.findMany({
//     include: {
//       author: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });

//   return {
//     props: {
//       groupChat: JSON.parse(JSON.stringify(groupChat)),
//       supportPost: JSON.parse(JSON.stringify(supportPost)),
//     },
//   };
// }

const SupportNetwork = dynamic(
  () => import("../../../shared/data/supportnetwork/supportNetwork.js"),
  { ssr: false }
);

const SupportNetworkCom = ({ groupChat, supportPost }) => {
  // Function to update dataabase with new chat room
  const handleChatRoomSubmit = async (event) => {
    // event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <Seo title="Dashboard" />

      <SupportNetwork
        supportPost={supportPost}
        groupChat={groupChat}
        createNewRoom={handleChatRoomSubmit}
      />
    </div>
  );
};

SupportNetworkCom.layout = "Contentlayout";
export default SupportNetworkCom;
