/*
  Warnings:

  - The primary key for the `LegalReport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `caseId` on the `LegalReport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abuseReportID]` on the table `LegalReport` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `LegalReport` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "public"."Relationship" AS ENUM ('FAMILY', 'FRIEND', 'PARTNER', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."AbuseType" AS ENUM ('PHYSICAL', 'EMOTIONAL', 'FINANCIAL', 'SEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."Ethnicity" AS ENUM ('MALAY', 'CHINESE', 'INDIAN', 'OTHER');

-- AlterTable
ALTER TABLE "public"."LegalReport" DROP CONSTRAINT "LegalReport_pkey",
DROP COLUMN "caseId",
ADD COLUMN     "abuseReportID" TEXT,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "LegalReport_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."AbuseReport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "relationshipWithPrepetrator" "public"."Relationship" NOT NULL,
    "typeOfAbuse" "public"."AbuseType" NOT NULL,
    "ethnicity" "public"."Ethnicity" NOT NULL,
    "isChildren" BOOLEAN NOT NULL,
    "needTranslator" BOOLEAN NOT NULL,
    "lastDateOfAbuse" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AbuseReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LegalReport_abuseReportID_key" ON "public"."LegalReport"("abuseReportID");

-- AddForeignKey
ALTER TABLE "public"."LegalReport" ADD CONSTRAINT "LegalReport_abuseReportID_fkey" FOREIGN KEY ("abuseReportID") REFERENCES "public"."AbuseReport"("id") ON DELETE SET NULL ON UPDATE CASCADE;
