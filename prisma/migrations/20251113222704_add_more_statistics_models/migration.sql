-- CreateTable
CREATE TABLE "ServiceRisk" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "riskScore" INTEGER NOT NULL,
    "level" TEXT NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceRisk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RootCauseReport" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "cause" TEXT NOT NULL,
    "confidence" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RootCauseReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FailurePrediction" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "windowHours" INTEGER NOT NULL,
    "probability" DOUBLE PRECISION NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FailurePrediction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceDailyStats" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "avgCpu" DOUBLE PRECISION NOT NULL,
    "avgMemory" DOUBLE PRECISION NOT NULL,
    "failures" INTEGER NOT NULL,
    "anomalies" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceDailyStats_pkey" PRIMARY KEY ("id")
);
