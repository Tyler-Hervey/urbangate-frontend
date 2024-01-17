import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.property.deleteMany({}); // delete all existing properties

  const property1 = await prisma.property.upsert({    
    where: { property_id: crypto.randomUUID() },
    update: {},
    create: {
        property_id: crypto.randomUUID(),
        img_url: 'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_1.jpeg',
        address: '1234 Main St',
        slug: '1234-main-st',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  })
  const property2 = await prisma.property.upsert({
    where: { property_id: crypto.randomUUID() },
    update: {},
    create: {
        property_id: crypto.randomUUID(),
        img_url: 'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_2.jpeg',
        address: '1234 Washington St',
        slug: '1234-washington-st',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  })
  const property3 = await prisma.property.upsert({
    where: { property_id: crypto.randomUUID() },
    update: {},
    create: {
        property_id: crypto.randomUUID(),
        img_url: 'https://xhzcrshkgefgsatjhabk.supabase.co/storage/v1/object/public/images/home_3.jpeg',
        address: '1234 Jefferson St',
        slug: '1234-jefferson-st',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  })



  console.log('Success:', { property1, property2, property3 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })