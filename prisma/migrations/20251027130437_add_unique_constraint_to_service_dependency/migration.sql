/*
  Warnings:

  - A unique constraint covering the columns `[fromServiceId,toServiceId]` on the table `ServiceDependency` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ServiceDependency_fromServiceId_toServiceId_key" ON "ServiceDependency"("fromServiceId", "toServiceId");
