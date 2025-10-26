-- CreateTable
CREATE TABLE "ServiceAI" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "aiData" JSONB NOT NULL,
    "failCount" INTEGER NOT NULL DEFAULT 0,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastRefreshedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceAI_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceAI_serviceId_key" ON "ServiceAI"("serviceId");

-- AddForeignKey
ALTER TABLE "ServiceAI" ADD CONSTRAINT "ServiceAI_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
