import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProperties } from './utils'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()
  if (!data.session?.user) {
    redirect('/login')
  }

  const properties = await getAllProperties()

  return (
    <main className='flex flex-col items-center m-4'>
      <h1 className='text-5xl font-bold mb-4'>Properties</h1>
      <div className='flex'>
        {properties.map(({ property_id, address, images, description }) => (
          <div key={property_id} className=' border m-4 rounded-md max-w-sm '>
            <div className='relative w-full h-80'>
              {images && address && (
                <Link href={`/properties/${property_id}`}>
                  <Image
                    src={images[0]}
                    alt={`Image of ${address}`}
                    fill={true}
                    className='rounded-sm pb-4 object-cover '
                  />
                </Link>
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
