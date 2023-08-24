import React from "react";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
const ChatPage = dynamic(
  () => import("../../../shared/data/chat/chatComponent"),
  { ssr: false }
);

// Import user type from prisma schema
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
// import prisma client
import { prisma } from "@/db";

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //From the userId, get the user's data from prisma database

  if (session) {
    const usersData = await prisma.user.findUnique({
      where: {
        authUserId: session.user.id,
      },
    });

    return {
      props: {
        usersData: JSON.parse(JSON.stringify(usersData)),
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

const index = ({ usersData }) => {
  return (
    <div>
      <Seo title="Dashboard" />
      <ChatPage userId={usersData.id} />
    </div>
  );
};

index.layout = "Contentlayout";
export default index;
