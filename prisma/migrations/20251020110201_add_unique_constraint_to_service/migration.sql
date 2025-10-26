/*
  Warnings:

  - A unique constraint covering the columns `[name,cluster]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Service_name_cluster_key" ON "Service"("name", "cluster");
