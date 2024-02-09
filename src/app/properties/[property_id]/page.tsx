import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProperty } from '@/app/utils'

// fix types to use imageLoader
// const imageLoader = ({
//   src,
//   width,
//   quality,
// }: {
//   src: string
//   width: number
//   quality: number
// }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export default async function Page({
  params,
}: {
  params: { property_id: string }
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()
  if (!data.session?.user) {
    redirect('/login')
  }

  const property = await getProperty(params.property_id)

  if (!property) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-start m-4'>
        <div> No Property Found</div>
      </main>
    )
  }

  const { address, img_url, description } = property

  return (
    <main className='flex min-h-screen flex-col items-center justify-start m-4'>
      <h1 className='text-5xl font-bold mb-4'>{address}</h1>

      <div className='relative' style={{ width: 700, height: 500 }}>
        <Image
          src={img_url}
          alt={`Image of ${address}`}
          fill={true}
          priority={true}
          className='rounded-sm pb-4 w-full h-full object-contain '
        />
      </div>
      <div className='flex'>
        <div className='m-2'>
          <p className='text-md'>{description}</p>
        </div>
      </div>
    </main>
  )
}
