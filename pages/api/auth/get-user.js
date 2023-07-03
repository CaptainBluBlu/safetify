// Creating a new supabase server client object (e.g. in API route):
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async (req, res) => {
  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  res.status(200).json({ name: user?.name ?? "" });
};
