-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('INITIAL', 'STATUS_CHANGE', 'RECOVERY', 'FAILURE');

-- AlterTable
ALTER TABLE "ServiceEvent" ADD COLUMN     "eventType" "EventType" NOT NULL DEFAULT 'INITIAL';
