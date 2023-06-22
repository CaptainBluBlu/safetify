/*
  Warnings:

  - You are about to drop the `_ChatRoomsToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `creatorId` to the `ChatRooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_ChatRoomsToUser" DROP CONSTRAINT "_ChatRoomsToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ChatRoomsToUser" DROP CONSTRAINT "_ChatRoomsToUser_B_fkey";

-- AlterTable
ALTER TABLE "public"."ChatRooms" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."_ChatRoomsToUser";

-- CreateTable
CREATE TABLE "public"."_ChatRoomParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChatRoomParticipants_AB_unique" ON "public"."_ChatRoomParticipants"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatRoomParticipants_B_index" ON "public"."_ChatRoomParticipants"("B");

-- AddForeignKey
ALTER TABLE "public"."ChatRooms" ADD CONSTRAINT "ChatRooms_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ChatRoomParticipants" ADD CONSTRAINT "_ChatRoomParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ChatRooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ChatRoomParticipants" ADD CONSTRAINT "_ChatRoomParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;
