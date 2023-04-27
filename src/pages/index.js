import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen w-full justify-center items-center'>
      <h1 className='text-6xl'>Chas green-tech group project</h1>
    </main>
  )
}
