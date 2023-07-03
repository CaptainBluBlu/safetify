import { prisma } from "@/db";
import { Gender, User, UserRole } from "@prisma/client";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// Create user, method post
export default async function handler(req, res) {
  const supabase = useSupabaseClient();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  const { session } = await supabase.auth.getSession();

  if (session) {
    const usersData = await prisma.user.findUnique({
      where: {
        authUserId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    const userId = usersData.id;

    const legalReport = await prisma.legalReport.create({
      data: {
        userId: userId,
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
  }
  res.status(200).json({ legalReport });
}
