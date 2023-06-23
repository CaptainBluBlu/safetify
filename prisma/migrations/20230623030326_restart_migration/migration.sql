-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'LAWYER', 'THERAPIST');

-- CreateEnum
CREATE TYPE "Relationship" AS ENUM ('FAMILY', 'FRIEND', 'PARTNER', 'OTHER');

-- CreateEnum
CREATE TYPE "AbuseType" AS ENUM ('PHYSICAL', 'EMOTIONAL', 'FINANCIAL', 'SEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('MALAY', 'CHINESE', 'INDIAN', 'OTHER');

-- CreateEnum
CREATE TYPE "PanicButtonStatus" AS ENUM ('SAFE', 'DANGER', 'RESOLVED');

-- CreateTable
CREATE TABLE "User" (
    "UserId" TEXT NOT NULL,
    "authUserId" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "userTypes" "UserRole" NOT NULL DEFAULT 'USER',
    "lawyerId" TEXT,
    "therapistId" TEXT,
    "chatRoomsId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "SupportPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "emergency_person_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyHousing" (
    "id" TEXT NOT NULL,
    "personInCharged" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "geoLocation" JSONB NOT NULL,
    "longtitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "currentOccupants" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmergencyHousing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbuseReport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "relationshipWithPrepetrator" "Relationship" NOT NULL,
    "typeOfAbuse" "AbuseType" NOT NULL,
    "ethnicity" "Ethnicity" NOT NULL,
    "isChildren" BOOLEAN NOT NULL,
    "needTranslator" BOOLEAN NOT NULL,
    "lastDateOfAbuse" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AbuseReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalReport" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "hasWitness" BOOLEAN NOT NULL,
    "reportingFor" TEXT,
    "dateRequested" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "abuseReportID" TEXT,

    CONSTRAINT "LegalReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evidence" (
    "id" TEXT NOT NULL,
    "files" JSONB NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "comments" TEXT NOT NULL,
    "replied_by_id" TEXT,
    "repliedAt" TIMESTAMP(3),
    "private" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PanicButton" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "PanicButtonStatus" NOT NULL,
    "longtitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PanicButton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRooms" (
    "id" TEXT NOT NULL,
    "chatRoomName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "participantId" TEXT[],
    "memeberCount" INTEGER NOT NULL,
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatRooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "conversationId" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChatRoomParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authUserId_key" ON "User"("authUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_lawyerId_key" ON "User"("lawyerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_therapistId_key" ON "User"("therapistId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LegalReport_abuseReportID_key" ON "LegalReport"("abuseReportID");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatRoomParticipants_AB_unique" ON "_ChatRoomParticipants"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatRoomParticipants_B_index" ON "_ChatRoomParticipants"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportPost" ADD CONSTRAINT "SupportPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_emergency_person_id_fkey" FOREIGN KEY ("emergency_person_id") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalReport" ADD CONSTRAINT "LegalReport_abuseReportID_fkey" FOREIGN KEY ("abuseReportID") REFERENCES "AbuseReport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PanicButton" ADD CONSTRAINT "PanicButton_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRooms" ADD CONSTRAINT "ChatRooms_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "ChatRooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatRoomParticipants" ADD CONSTRAINT "_ChatRoomParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatRooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatRoomParticipants" ADD CONSTRAINT "_ChatRoomParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;
