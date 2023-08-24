import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  try {
    if (tempData.userId != null) {
      const legalReport = await prisma.legalReport.findMany({
        where: {
          userId: tempData.userId,
        },
      });

      console.log("it ran this");

      console.log(legalReport);
      res.status(200).json({ legalReport });
    } else {
      const legalReport = await prisma.legalReport.findMany();

      res.status(200).json({ legalReport });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Unkown Server Error" });
  }
}
