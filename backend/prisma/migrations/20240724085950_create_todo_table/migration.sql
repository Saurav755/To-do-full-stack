-- CreateTable
CREATE TABLE "ToDO" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "ToDO_pkey" PRIMARY KEY ("id")
);
