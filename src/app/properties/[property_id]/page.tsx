import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getProperty, getLoan } from '@/app/utils'
import { PropertyCarousel } from '../../../../components/carousel/propertyCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Loan from '../../../../components/loan/loan'
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
  const loan = await getLoan(params.property_id)
  console.log('loan', loan)
  if (!property) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-start m-4'>
        <div> No Property Found</div>
      </main>
    )
  }

  const { address, images, description } = property

  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = images.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <main className='flex min-h-screen flex-col items-center justify-start m-4 overflow-x-hidden'>
      <h1 className='text-3xl font-bold mb-4'>{address}</h1>
      <PropertyCarousel slides={SLIDES} options={OPTIONS} images={images} />
      <Loan params={params} />
      <div className='flex'>
        <div className='m-2'>
          <p className='text-md'>{description}</p>
        </div>
      </div>
    </main>
  )
}
