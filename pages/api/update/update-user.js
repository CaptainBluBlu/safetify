import { prisma } from "@/db";
import { UserRole } from "@prisma/client";

// Create user, method post
export default async function handler(req, res) {
  const user = await prisma.user.update({
    where: {
      id: "cljjo8o8f000qara0dpzugnpu",
    },

    data: {
      userTypes: UserRole.ADMIN,
    },
  });

  res.status(200).json({ user });
}
