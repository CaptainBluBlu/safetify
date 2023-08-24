import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const logout = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <div>logout</div>
      <Button onClick={handleSignOut}>Logout</Button>
    </>
  );
};

export default logout;
