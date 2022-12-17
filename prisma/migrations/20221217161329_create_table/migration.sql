/*
  Warnings:

  - You are about to drop the column `imageId` on the `offer` table. All the data in the column will be lost.
  - You are about to drop the `imagesonoffer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `imagesonoffer` DROP FOREIGN KEY `ImagesOnOffer_imageId_fkey`;

-- DropForeignKey
ALTER TABLE `imagesonoffer` DROP FOREIGN KEY `ImagesOnOffer_offerId_fkey`;

-- DropForeignKey
ALTER TABLE `offer` DROP FOREIGN KEY `Offer_imageId_fkey`;

-- AlterTable
ALTER TABLE `image` ADD COLUMN `offerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `offer` DROP COLUMN `imageId`;

-- DropTable
DROP TABLE `imagesonoffer`;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
