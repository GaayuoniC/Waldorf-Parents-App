-- CreateTable
CREATE TABLE "Offer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentName" TEXT NOT NULL,
    "startStreet" TEXT NOT NULL,
    "startZip" TEXT NOT NULL,
    "startCity" TEXT NOT NULL,
    "dateOfTransportation" DATETIME NOT NULL,
    "modeOfTransportation" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "numberOfChildren" INTEGER NOT NULL,
    "isRequest" BOOLEAN NOT NULL
);
