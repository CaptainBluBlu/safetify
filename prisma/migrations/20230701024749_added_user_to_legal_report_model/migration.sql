/*
  Warnings:

  - The `status` column on the `LegalReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `LegalReport` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('PENDING', 'SETTLED', 'INCOURT');

-- AlterTable
ALTER TABLE "LegalReport" ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ReportStatus",
ALTER COLUMN "comments" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LegalReport" ADD CONSTRAINT "LegalReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
