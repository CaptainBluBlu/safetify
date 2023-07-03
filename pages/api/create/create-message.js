import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  try {
    const message = await prisma.message.create({
      data: {
        text: tempData.message,
        senderId: tempData.senderId,
        personalChatRoomId: tempData.personalChatRoomId,
      },
    });

    res.status(200).json({ message });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `${e}` });
  }
}
