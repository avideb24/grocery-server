/*
  Warnings:

  - Added the required column `endTime` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `offer` ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL;
