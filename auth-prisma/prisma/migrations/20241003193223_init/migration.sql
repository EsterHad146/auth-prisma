/*
  Warnings:

  - You are about to drop the column `name` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `nome` to the `fornecedores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fornecedores` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NULL;
