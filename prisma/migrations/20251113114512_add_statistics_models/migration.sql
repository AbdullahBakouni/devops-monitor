-- CreateTable
CREATE TABLE "StatisticsHourly" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "hour" TIMESTAMP(3) NOT NULL,
    "avgCpu" DOUBLE PRECISION NOT NULL,
    "avgMemory" DOUBLE PRECISION NOT NULL,
    "peakCpu" DOUBLE PRECISION NOT NULL,
    "peakMemory" DOUBLE PRECISION NOT NULL,
    "logsErrors" INTEGER NOT NULL,
    "logsWarnings" INTEGER NOT NULL,
    "logsInfo" INTEGER NOT NULL,
    "failures" INTEGER NOT NULL,
    "recoveries" INTEGER NOT NULL,
    "crashLoops" INTEGER NOT NULL,
    "anomalies" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StatisticsHourly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatisticsDaily" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "avgCpu" DOUBLE PRECISION NOT NULL,
    "avgMemory" DOUBLE PRECISION NOT NULL,
    "errors" INTEGER NOT NULL,
    "warnings" INTEGER NOT NULL,
    "info" INTEGER NOT NULL,
    "failures" INTEGER NOT NULL,
    "recoveries" INTEGER NOT NULL,
    "crashLoops" INTEGER NOT NULL,
    "uptimePercentage" DOUBLE PRECISION NOT NULL,
    "anomalyCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StatisticsDaily_pkey" PRIMARY KEY ("id")
);
