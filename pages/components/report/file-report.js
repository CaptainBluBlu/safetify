import React, { useState } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

const ReportingCase = dynamic(
  () => import("../../../shared/data/datareport/legal-report"),
  { ssr: false }
);

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //From the userId, get the user's data from prisma database
  console.log(session);
  if (session) {
    const usersData = await prisma.user.findUnique({
      where: {
        authUserId: session.user.id,
      },
    });

    console.log(usersData);
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

// ReportingCase component
const ReportingCaseCom = ({ props }) => {
  console.log(props);
  return (
    <div>
      <Seo title="Reporting" />

      <ReportingCase />
    </div>
  );
};

ReportingCaseCom.layout = "Contentlayout";
export default ReportingCaseCom;
