-- CreateTable
CREATE TABLE "Canceled_purchase_part" (
    "purchase_id" INTEGER NOT NULL,
    "part_id" INTEGER NOT NULL,

    CONSTRAINT "Canceled_purchase_part_pkey" PRIMARY KEY ("purchase_id","part_id")
);

-- AddForeignKey
ALTER TABLE "Canceled_purchase_part" ADD CONSTRAINT "Canceled_purchase_part_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canceled_purchase_part" ADD CONSTRAINT "Canceled_purchase_part_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
