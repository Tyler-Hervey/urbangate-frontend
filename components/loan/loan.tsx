import { getLoan } from '@/app/utils'
import Image from 'next/image'

export default async function Loan({
  params,
}: {
  params: { property_id: string }
}) {
  const loan = await getLoan(params.property_id)
  if (!loan) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-start m-4'>
        <div> No loan is associated with this property</div>
      </main>
    )
  }
  const {
    loan_amount,
    loan_to_arv,
    loan_to_as_is_value,
    loan_to_cost,
    start_date,
    maturity_date,
  } = loan

  const readableStartDate = start_date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const readableMaturityDate = maturity_date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='flex mt-8 '>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='mx-6 mb-2'
          src={'/icons/bank.svg'}
          alt='property image'
          width={125}
          height={125}
        />
        <span className='font-bold'>$ {loan_amount}</span>
        <span>Loan Amount</span>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='mx-6 mb-2'
          src={'/icons/lend.svg'}
          alt='property image'
          width={125}
          height={125}
        />
        <span className='font-bold '>% {loan_to_arv * 100}</span>
        <span>Loan to ARV</span>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='mx-6 mb-2'
          src={'/icons/profit.svg'}
          alt='property image'
          width={125}
          height={125}
        />
        <span className='font-bold '>% {loan_to_as_is_value * 100}</span>
        <span>Loan to As Is Value</span>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='mx-6 mb-2'
          src={'/icons/financial-goals.svg'}
          alt='property image'
          width={125}
          height={125}
        />
        <span className='font-bold'>% {loan_to_cost * 100}</span>
        <span>Loan to Cost</span>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='mx-6 mb-2'
          src={'/icons/calendar.svg'}
          alt='property image'
          width={125}
          height={125}
        />
        <span>Origination Date: {readableStartDate} </span>
        <span>Maturity Date: {readableMaturityDate} </span>
      </div>
    </div>
  )
}
