-- CreateTable
CREATE TABLE "LogEntry" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "context" JSONB,
    "traceId" VARCHAR(64),
    "spanId" VARCHAR(64),
    "host" TEXT,
    "source" TEXT,
    "pod" TEXT,
    "namespace" TEXT,
    "image" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogIngestionToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogIngestionToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LogEntry_service_level_timestamp_idx" ON "LogEntry"("service", "level", "timestamp" DESC);

-- CreateIndex
CREATE INDEX "LogEntry_timestamp_idx" ON "LogEntry"("timestamp" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "LogIngestionToken_token_key" ON "LogIngestionToken"("token");
