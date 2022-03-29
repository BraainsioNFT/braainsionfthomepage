import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='text-white flex flex-col'>
      <div className="h-screen bg-green-700 flex flex-col items-center">
        <div className='flex w-1/2 m-10 transition hover:scale-110'>
          <Image className="object-center" src="/braains-logo.png" alt="Braains.io Logo" width="2000" height="600" />
        </div>
        <p className="text-3xl font-palette">
          Survive the Apocalypse with Style
        </p>
      </div>
      <div className="h-screen bg-red-700 flex flex-col">
        <div className='flex'>
          <div className='w-1/2 text-center'>
            <Image src="/nft-bear.png" alt="Sample 1" width="400" height="400" />
          </div>
          <div className='w-1/2 text-left'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa architecto labore iste accusamus iusto eius error dignissimos amet asperiores magnam unde perspiciatis, cumque laudantium, omnis quia explicabo? Sit, expedita deleniti.
          </div>
        </div>
      </div>
      <div className="h-screen bg-blue-600 flex flex-col">
      <div className='flex'>
          <div className='w-1/2 text-right'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa architecto labore iste accusamus iusto eius error dignissimos amet asperiores magnam unde perspiciatis, cumque laudantium, omnis quia explicabo? Sit, expedita deleniti.
          </div>
          <div className='w-1/2 text-center'>
            <Image src="/nft-bear.png" alt="Sample 1" width="400" height="400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
