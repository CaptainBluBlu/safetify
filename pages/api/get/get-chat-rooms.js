import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  //const tempData = JSON.parse(req.body);

  try {
    const legalReport = await prisma.chatRooms.findMany();

    res.status(200).json({ legalReport });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Unkown Server Error" });
  }
}
