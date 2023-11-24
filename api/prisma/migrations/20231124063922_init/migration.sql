-- CreateTable
CREATE TABLE "Offer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentName" TEXT NOT NULL,
    "startingAddress" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "modeOfTransportation" TEXT NOT NULL,
    "direction" TEXT NOT NULL
);
