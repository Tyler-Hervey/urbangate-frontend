import { cache } from 'react'
import prisma from '../../lib/prisma'

export const getAllProperties = cache(async () => {
  const properties = await prisma.property.findMany()
  return properties
})
