import { prisma } from "@/db";
import { Gender, User, UserRole } from "@prisma/client";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempUser = JSON.parse(req.body);

  const user = await prisma.user.create({
    data: {
      authUserId: tempUser.authUserId,
      email: tempUser.email,
      name: tempUser.fullName,
      username: tempUser.username,
      icNumber: tempUser.ic,
      gender: tempUser.gender == "0" ? Gender.MALE : Gender.FEMALE,
      userTypes: UserRole.USER,
      // TODO: Add Adresss
    },
  });

  res.status(200).json({ user });
}
