import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

// Import user type from prisma schema
import { UserRole } from "@prisma/client";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

// import prisma client
import { prisma } from "@/db";

const Dashboard = dynamic(
  () => import("../../../shared/data/datadashboard/authoritiesDashboard"),
  { ssr: false }
);

const UserDashboard = dynamic(
  () => import("../../../shared/data/datadashboard/userDashboard"),
  { ssr: false }
);

const WAODashboard = dynamic(
  () => import("../../../shared/data/datadashboard/waoDashboard"),
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

const DashboardCom = ({ usersData }) => {
  const { id, userTypes } = usersData;

  return (
    <div>
      <Seo title="Safetify" />
      {/* get the users' user role */}

      {/* <Dashboard /> */}

      {/* 
			 if user:
			 	user dashboard
			 else if authorities:
			 	authorities dashboard
			 else if volunteer:
			 	volunteer dashboard
			> */}

      {userTypes === UserRole.USER ? (
        <UserDashboard />
      ) : userTypes === UserRole.ADMIN ? (
        <WAODashboard />
      ) : null}
    </div>
  );
};

DashboardCom.layout = "Contentlayout";
export default DashboardCom;
