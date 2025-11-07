/*
  Warnings:

  - A unique constraint covering the columns `[service,source]` on the table `Metrics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Metrics_service_source_key" ON "Metrics"("service", "source");
