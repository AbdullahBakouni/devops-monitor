/*
  Warnings:

  - You are about to drop the `ServiceAI` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ServiceAI" DROP CONSTRAINT "ServiceAI_serviceId_fkey";

-- DropTable
DROP TABLE "public"."ServiceAI";

-- CreateTable
CREATE TABLE "Metrics" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "cpu" DOUBLE PRECISION NOT NULL,
    "memory" DOUBLE PRECISION NOT NULL,
    "networkRx" INTEGER NOT NULL,
    "networkTx" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Metrics_pkey" PRIMARY KEY ("id")
);
