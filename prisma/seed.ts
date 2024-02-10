import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedProperties() {
  const property1 = await prisma.property.upsert({
    where: { property_id: 'BBC5F0C1-FD56-4C89-BC03-4B56288F589D' },
    update: {},
    create: {
      property_id: 'BBC5F0C1-FD56-4C89-BC03-4B56288F589D',
      property_type: 'Single Family',
      images: [
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_1.jpeg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
      ],
      address: '1234 Main St',
      slug: '1234-main-st',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  })
  const property2 = await prisma.property.upsert({
    where: { property_id: 'fb12b279-edd9-4007-b40b-e4357d275ab2' },
    update: {},
    create: {
      property_id: 'fb12b279-edd9-4007-b40b-e4357d275ab2',
      property_type: 'Single Family',
      images: [
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_2.jpeg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
      ],
      address: '1234 Washington St',
      slug: '1234-washington-st',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  })
  const property3 = await prisma.property.upsert({
    where: { property_id: 'e98672ca-5bef-47c7-8125-56c947e25c86' },
    update: {},
    create: {
      property_id: 'e98672ca-5bef-47c7-8125-56c947e25c86',
      property_type: 'Single Family',
      images: [
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_3.jpeg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
        'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/placeholder.svg',
      ],
      address: '1234 Jefferson St',
      slug: '1234-jefferson-st',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  })

  console.log('Success:', { property1, property2, property3 })
}
// Loan Schema for reference
// model Loan {
//   loan_id                          String    @id @default(uuid())
//   created_at                  DateTime  @default(now()) @db.Timestamptz(6)
//   property_id                 String
//   property                    Property  @relation(fields: [property_id], references: [property_id])
//   interest_rate               Decimal?  @db.Decimal
//   loan_amount                 Decimal?  @db.Decimal
//   term_months                 Decimal?  @db.Decimal
//   start_date                  DateTime? @db.Date
//   maturity_date               DateTime? @db.Date
//   extendable                  Boolean?  @default(true)
//   number_of_extension_options Int?      @default(3)
//   number_of_extensions_used   Int?      @default(0)
//   loan_type                   String?
//   loan_to_arv                 Decimal?  @db.Decimal
//   loan_to_cost                Decimal?  @db.Decimal
//   loan_to_as_is_value         Decimal?  @db.Decimal
//   yield                       Decimal?  @db.Decimal
//   user                        Lendor[]
// }

async function seedLoans() {
  const loan1 = await prisma.loan.upsert({
    where: { loan_id: '97ED8209-4919-4010-BD63-E4667F74C47B' },
    update: {},
    create: {
      loan_id: '97ED8209-4919-4010-BD63-E4667F74C47B',
      property_id: 'BBC5F0C1-FD56-4C89-BC03-4B56288F589D',
      loan_amount: 100000,
      start_date: new Date(),
      term_months: 6,
      loan_type: 'Single Family',
      loan_to_arv: 0.7,
      loan_to_cost: 0.8,
      loan_to_as_is_value: 0.9,
      yield: 0.1,
      extendable: true,
      number_of_extension_options: 3,
      number_of_extensions_used: 0,
    },
  })
  const loan2 = await prisma.loan.upsert({
    where: { loan_id: '070E9C32-E78A-48D1-92D7-2F1EB299B0CD' },
    update: {},
    create: {
      loan_id: '070E9C32-E78A-48D1-92D7-2F1EB299B0CD',
      property_id: 'fb12b279-edd9-4007-b40b-e4357d275ab2',
      loan_amount: 100000,
      start_date: new Date(),
      term_months: 6,
      loan_type: 'Single Family',
      loan_to_arv: 0.7,
      loan_to_cost: 0.8,
      loan_to_as_is_value: 0.9,
      yield: 0.1,
      extendable: true,
      number_of_extension_options: 3,
      number_of_extensions_used: 0,
    },
  })
  const loan3 = await prisma.loan.upsert({
    where: { loan_id: '79FC4652-288D-475A-BD0F-00642937BAFC' },
    update: {},
    create: {
      loan_id: '79FC4652-288D-475A-BD0F-00642937BAFC',
      property_id: 'e98672ca-5bef-47c7-8125-56c947e25c86',
      loan_amount: 100000,
      start_date: new Date(),
      term_months: 6,
      loan_type: 'Single Family',
      loan_to_arv: 0.7,
      loan_to_cost: 0.8,
      loan_to_as_is_value: 0.9,
      yield: 0.1,
      extendable: true,
      number_of_extension_options: 3,
      number_of_extensions_used: 0,
    },
  })

  console.log('seed loans success:', { loan1, loan2, loan3 })
}
seedLoans()
seedProperties()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
