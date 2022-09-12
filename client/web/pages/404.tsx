import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center flex-1 p-10">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}
