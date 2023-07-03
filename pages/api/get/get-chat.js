import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  // Logic
  // 1. Get the user Id
  // 2. From the user Id get the personal rooms
  // 3. From the personal rooms get the chat rooms

  try {
    const legalReport = await prisma.personalChatRoom.findMany({
      where: {
        OR: [
          {
            UserVolunteer: {
              id: tempData.userId,
            },
          },
          {
            UserClient: {
              id: tempData.userId,
            },
          },
        ],
      },
      include: {
        Message: true,
      },
    });

    res.status(200).json({ legalReport });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Unkown Server Error" });
  }
}
