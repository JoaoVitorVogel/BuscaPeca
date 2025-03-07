/*
  Warnings:

  - You are about to drop the column `purchase_status_id` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the `PurchaseRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PartPurchases` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[part_id]` on the table `PurchasePart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `buyer_id` to the `PurchasePart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_id` to the `PurchasePart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_purchase_status_id_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseUser" DROP CONSTRAINT "PurchaseUser_purchase_id_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseUser" DROP CONSTRAINT "PurchaseUser_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_PartPurchases" DROP CONSTRAINT "_PartPurchases_A_fkey";

-- DropForeignKey
ALTER TABLE "_PartPurchases" DROP CONSTRAINT "_PartPurchases_B_fkey";

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "purchase_status_id";

-- AlterTable
ALTER TABLE "PurchasePart" ADD COLUMN     "buyer_id" INTEGER NOT NULL,
ADD COLUMN     "seller_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PurchaseRole";

-- DropTable
DROP TABLE "PurchaseStatus";

-- DropTable
DROP TABLE "PurchaseUser";

-- DropTable
DROP TABLE "_PartPurchases";

-- CreateIndex
CREATE UNIQUE INDEX "PurchasePart_part_id_key" ON "PurchasePart"("part_id");

-- AddForeignKey
ALTER TABLE "PurchasePart" ADD CONSTRAINT "PurchasePart_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasePart" ADD CONSTRAINT "PurchasePart_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Buyer"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
