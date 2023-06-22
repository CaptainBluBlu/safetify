-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_chatRoomsId_fkey";

-- CreateTable
CREATE TABLE "public"."_ChatRoomsToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChatRoomsToUser_AB_unique" ON "public"."_ChatRoomsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatRoomsToUser_B_index" ON "public"."_ChatRoomsToUser"("B");

-- AddForeignKey
ALTER TABLE "public"."_ChatRoomsToUser" ADD CONSTRAINT "_ChatRoomsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ChatRooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ChatRoomsToUser" ADD CONSTRAINT "_ChatRoomsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;
