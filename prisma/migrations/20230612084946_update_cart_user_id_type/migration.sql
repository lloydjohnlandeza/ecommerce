-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Cart" ("id", "userId") SELECT "id", "userId" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
