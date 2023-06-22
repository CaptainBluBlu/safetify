-- CreateTable
CREATE TABLE "public"."SupportPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SupportPost" ADD CONSTRAINT "SupportPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
