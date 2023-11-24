/*
  Warnings:

  - You are about to drop the column `date` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `dateOfTransportation` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Offer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentName" TEXT NOT NULL,
    "startingAddress" TEXT NOT NULL,
    "dateOfTransportation" DATETIME NOT NULL,
    "modeOfTransportation" TEXT NOT NULL,
    "direction" TEXT NOT NULL
);
INSERT INTO "new_Offer" ("direction", "id", "modeOfTransportation", "parentName", "startingAddress") SELECT "direction", "id", "modeOfTransportation", "parentName", "startingAddress" FROM "Offer";
DROP TABLE "Offer";
ALTER TABLE "new_Offer" RENAME TO "Offer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
