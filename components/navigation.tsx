import Link from 'next/link'
import Image from 'next/image'
const Navigation = () => {
  return (
    <section>
      <div>
        <Image src='' alt='Vercel Logo' width={72} height={16} />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </section>
  )
}

export default Navigation
