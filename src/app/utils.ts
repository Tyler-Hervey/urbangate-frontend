import { cache } from 'react'
import prisma from '../lib/prisma'

export const getAllProperties = cache(async () => {
  const properties = await prisma.property.findMany()
  return properties
}) 

export const getProperty = cache(async (id: string) => {
  const property = await prisma.property.findUnique({ where:  {
    property_id: id
  }  })
  return property
})


