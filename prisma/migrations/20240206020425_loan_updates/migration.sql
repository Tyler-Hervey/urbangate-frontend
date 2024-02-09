/*
  Warnings:

  - You are about to drop the `Lendor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Loan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "public"."Lendor" DROP CONSTRAINT "Lendor_loanId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lendor" DROP CONSTRAINT "Lendor_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Loan" DROP CONSTRAINT "Loan_property_id_fkey";

-- DropTable
DROP TABLE "public"."Lendor";

-- DropTable
DROP TABLE "public"."Loan";

-- DropTable
DROP TABLE "public"."Property";

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "public"."Role";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "loan_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "property_id" UUID NOT NULL,
    "loan_amount" DECIMAL,
    "term_months" DECIMAL,
    "start_date" DATE,
    "maturity_date" DATE,
    "extendable" BOOLEAN DEFAULT true,
    "number_of_extension_options" INTEGER DEFAULT 3,
    "number_of_extensions_used" INTEGER DEFAULT 0,
    "loan_type" TEXT,
    "loan_to_arv" DECIMAL,
    "loan_to_cost" DECIMAL,
    "loan_to_as_is_value" DECIMAL,
    "yield" DECIMAL,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("loan_id")
);

-- CreateTable
CREATE TABLE "Lendor" (
    "userId" TEXT NOT NULL,
    "loanId" UUID NOT NULL,

    CONSTRAINT "Lendor_pkey" PRIMARY KEY ("userId","loanId")
);

-- CreateTable
CREATE TABLE "Property" (
    "property_id" UUID NOT NULL,
    "property_type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "img_url" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "property_pkey" PRIMARY KEY ("property_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "loan_loan_id_key" ON "Loan"("loan_id");

-- CreateIndex
CREATE UNIQUE INDEX "property_property_id_key" ON "Property"("property_id");

-- CreateIndex
CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lendor" ADD CONSTRAINT "Lendor_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("loan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lendor" ADD CONSTRAINT "Lendor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
