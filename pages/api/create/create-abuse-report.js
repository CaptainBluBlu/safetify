import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  try {
    const abuseReport = await prisma.abuseReport.create({
      data: {
        ethnicity: tempData.ethnicity,
        name: tempData.name,
        reportedUser: {
          connect: {
            id: tempData.reportedUserId,
          },
        },
        age: tempData.age,
        typeOfAbuse: tempData.typeOfAbuse,
        isChildren: tempData.isChildren,
        needTranslator: tempData.needTranslator,
        translatorLanguage: tempData.translatorLanguage,
        lastDateOfAbuse: tempData.lastDateOfAbuse,
      },
    });

    res.status(200).json({ abuseReport });
  } catch (e) {
    console.log(e);
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
