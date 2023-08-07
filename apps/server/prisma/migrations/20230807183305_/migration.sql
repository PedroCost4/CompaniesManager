/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Admin_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Admin";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Office" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "companyId" TEXT,
    CONSTRAINT "Office_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Office" ("companyId", "id", "name") SELECT "companyId", "id", "name" FROM "Office";
DROP TABLE "Office";
ALTER TABLE "new_Office" RENAME TO "Office";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
