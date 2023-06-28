import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
// Import user type from prisma schema
import { UserRole } from "@prisma/client";

const Dashboard = dynamic(
  () => import("../../../shared/data/datadashboard/authoritiesDashboard"),
  { ssr: false }
);

export const getServerSideProps = async (context) => {
  // Get the user's session based on the request
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  // From the userId, get the user's data from prisma database
  const userData = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
};

const DashboardCom = (props) => {
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

      {/* {if (user.userRole == UserRole.) {}	 */}
      <Dashboard />
    </div>
  );
};

DashboardCom.layout = "Contentlayout";
export default DashboardCom;
