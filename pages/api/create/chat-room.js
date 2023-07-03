import { prisma } from "@/db";

// Create user, method post
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const tempData = JSON.parse(req.body);

  //   model ChatRooms {
  //     id            String    @id @default(cuid())
  //     chatRoomName  String
  //     description   String
  //     participantId String[]
  //     participants  User[]    @relation("ChatRoomParticipants")
  //     memeberCount  Int
  //     creatorId     String
  //     Creator       User      @relation("ChatRoomOwner", fields: [creatorId], references: [id])
  //     createdAt     DateTime  @default(now())
  //     updatedAt     DateTime  @updatedAt
  //     Message       Message[]

  //     // @@schema("public")
  //   }

  const chatRoom = await prisma.chatRooms.create({
    data: {
      chatRoomName: tempData.chatRoomName,
      description: tempData.description,
      participantId: tempData.participantId,
      memeberCount: tempData.memeberCount,
      creatorId: tempData.creatorId,
    },
  });

  res.status(200).json({ chatRoom });
}
