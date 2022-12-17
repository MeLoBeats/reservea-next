/*
  Warnings:

  - You are about to drop the column `offerId` on the `image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_offerId_fkey`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `offerId`;

-- AlterTable
ALTER TABLE `offer` ADD COLUMN `imageId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ImagesOnOffer` (
    `offerId` VARCHAR(191) NOT NULL,
    `imageId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`offerId`, `imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Offer` ADD CONSTRAINT `Offer_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImagesOnOffer` ADD CONSTRAINT `ImagesOnOffer_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImagesOnOffer` ADD CONSTRAINT `ImagesOnOffer_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
