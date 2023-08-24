import { prisma } from "@/db";
import { Gender, User, UserRole } from "@prisma/client";
import { tr } from "date-fns/locale";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempUser = JSON.parse(req.body);

  try {
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

    return res.status(200).json({ message: "Success" });
  } catch (e) {
    if (e.code == "P2002") {
      console.log(
        "there is a unique constraint violation, new user cannot be created"
      );

      return res.status(409).json({
        error:
          "there is a unique constraint violation, new user cannot be created",
      });
    } else {
      return res.status(500).json({ message: "Unkown Server Error" });
    }
  }
}
