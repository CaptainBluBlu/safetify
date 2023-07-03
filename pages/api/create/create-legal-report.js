import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  const legalReport = await prisma.legalReport.create({
    data: {
      userId: tempData.userId,
      title: tempData.title,
      statement: tempData.statement,
      address: tempData.address,
      city: tempData.city,
      state: tempData.state,
      zipCode: tempData.zipCode,
      mobileNumber: tempData.mobileNumber,
      hasWitness: tempData.hasWitness,
      reportingFor: tempData.reportingFor,
      dateRequested: Date.now(),
      isCoverReport: tempData.isCoverReport,
    },
  });

  res.status(200).json({ legalReport });
}
