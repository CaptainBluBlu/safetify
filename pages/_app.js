import "@/styles/globals.scss";
import Contentlayout from "../shared/layout-components/layout/content-layout";
import Landingpagelayout from "../shared/layout-components/layout/landingpage-layout";
import Switcherlayout from "../shared/layout-components/layout/switcher-layout";
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";

import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => <Component>{pageProps}</Component>);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}
