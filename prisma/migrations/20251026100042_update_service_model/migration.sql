-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "lastReason" TEXT,
ADD COLUMN     "lastSeenAt" TIMESTAMP(3),
ADD COLUMN     "runtimeStatus" TEXT;
