/*
  Warnings:

  - You are about to drop the column `buyer_id` on the `PurchasePart` table. All the data in the column will be lost.
  - Added the required column `buyer_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PurchasePart" DROP CONSTRAINT "PurchasePart_buyer_id_fkey";

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "buyer_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchasePart" DROP COLUMN "buyer_id";

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Buyer"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
