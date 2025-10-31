/*
  Warnings:

  - A unique constraint covering the columns `[service]` on the table `ServiceEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ServiceEventHistory" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cluster" TEXT,
    "message" TEXT,
    "eventType" "EventType" NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceEventHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceEvent_service_key" ON "ServiceEvent"("service");
