import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  try {
    const legalReport = await prisma.legalReport.create({
      data: {
        title: tempData.title,
        statement: tempData.statement,
        address: tempData.address,
        city: tempData.city,
        state: tempData.state,
        zipCode: tempData.zipCode,
        mobileNumber: tempData.mobileNumber,
        hasWitness: tempData.hasWitness,
        reportingFor: tempData.reportingFor,
        dateRequested: new Date(),
        isCoverReport: tempData.isCoverReport,
        evidences: {
          create: {
            fileURL: tempData.fileURL,
          },
        },
        user: {
          connect: {
            id: tempData.userId,
          },
        },
      },
    });

    res.status(200).json({ legalReport });
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
