import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="deniable-logo">
      <Image src='/images/logo.svg' priority width={180} height={40} alt="logo" />
    </Link>
  )
}