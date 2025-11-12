/*
  Warnings:

  - A unique constraint covering the columns `[logHash]` on the table `LogEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "LogEntry" ADD COLUMN     "logHash" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LogEntry_logHash_key" ON "LogEntry"("logHash");

-- CreateIndex
CREATE INDEX "LogEntry_logHash_idx" ON "LogEntry"("logHash");
