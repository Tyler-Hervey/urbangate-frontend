import { getAllProperties } from './utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const properties = await getAllProperties()
  return (
    <main className='flex min-h-screen flex-col items-center justify-start m-4 '>
      <h1 className='text-5xl font-bold mb-4'>Properties</h1>
      <div className='flex'>
        {properties.map(({ property_id, address, img_url, description }) => (
          <div key={property_id} className=' border m-4 rounded-md max-w-sm '>
            <div className='relative w-full h-80 '>
              {img_url && address && (
                <Image
                  src={img_url}
                  alt={`Image of ${address}`}
                  fill={true}
                  className='rounded-sm pb-4 object-cover '
                />
              )}
            </div>
            <div className='m-2'>
              <h1 className='text-2xl font-bold'>{address}</h1>
              <p className='text-md'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
