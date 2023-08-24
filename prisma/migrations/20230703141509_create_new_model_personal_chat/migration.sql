-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "personalChatRoomId" TEXT;

-- CreateTable
CREATE TABLE "PersonalChatRoom" (
    "id" TEXT NOT NULL,
    "UserVolunteerId" TEXT,
    "UserClientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalChatRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_personalChatRoomId_fkey" FOREIGN KEY ("personalChatRoomId") REFERENCES "PersonalChatRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalChatRoom" ADD CONSTRAINT "PersonalChatRoom_UserVolunteerId_fkey" FOREIGN KEY ("UserVolunteerId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalChatRoom" ADD CONSTRAINT "PersonalChatRoom_UserClientId_fkey" FOREIGN KEY ("UserClientId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;
