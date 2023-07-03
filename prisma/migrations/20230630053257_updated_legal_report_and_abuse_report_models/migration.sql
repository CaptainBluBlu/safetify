/*
  Warnings:

  - You are about to drop the column `files` on the `Evidence` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Evidence` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[legalReportID]` on the table `Evidence` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reportedUserId` to the `AbuseReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legalReportID` to the `Evidence` table without a default value. This is not possible if the table is not empty.
  - Made the column `authUserId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AbuseReport" ADD COLUMN     "reportedUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Evidence" DROP COLUMN "files",
DROP COLUMN "title",
ADD COLUMN     "fileURL" TEXT[],
ADD COLUMN     "legalReportID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "authUserId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_legalReportID_key" ON "Evidence"("legalReportID");

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD CONSTRAINT "AbuseReport_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_legalReportID_fkey" FOREIGN KEY ("legalReportID") REFERENCES "LegalReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
