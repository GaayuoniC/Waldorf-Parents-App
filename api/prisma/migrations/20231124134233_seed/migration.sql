/*
  Warnings:

  - You are about to drop the column `start_city` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `start_street` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `start_zip` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `startCity` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startStreet` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startZip` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Offer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentName" TEXT NOT NULL,
    "startStreet" TEXT NOT NULL,
    "startZip" TEXT NOT NULL,
    "startCity" TEXT NOT NULL,
    "dateOfTransportation" DATETIME NOT NULL,
    "modeOfTransportation" TEXT NOT NULL,
    "direction" TEXT NOT NULL
);
INSERT INTO "new_Offer" ("dateOfTransportation", "direction", "id", "modeOfTransportation", "parentName") SELECT "dateOfTransportation", "direction", "id", "modeOfTransportation", "parentName" FROM "Offer";
DROP TABLE "Offer";
ALTER TABLE "new_Offer" RENAME TO "Offer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
