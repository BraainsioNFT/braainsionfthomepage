import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='text-white'>
      <div className="h-screen bg-green-700 bg-grass flex-none flex flex-col items-center min-h-screen">
        <div className='flex w-1/2 m-10 transition hover:scale-110'>
          <Image className="object-center" src="/braains-logo.png" alt="Braains.io Logo" width="2000" height="600" />
        </div>
        <p className="text-3xl font-palette">
          Survive the Apocalypse with Style
        </p>
        <div className="h-1/2 flex items-center justify-center">
          <button>
            Test
          </button>
        </div>
      </div>
      <div className="h-screen bg-red-700 bg-wood flex-none flex flex-col items-center justify-center text-3xl overflow-ellipsis min-h-screen">
        <div className='flex'>
          <div className='w-1/2 flex items-center justify-center'>
            <Image src="/nft-bear.png" alt="Sample 1" width="400" height="400" />
          </div>
          <div className='w-1/2 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa architecto labore iste accusamus iusto eius error dignissimos amet asperiores magnam unde perspiciatis, cumque laudantium, omnis quia explicabo? Sit, expedita deleniti.
          </div>
        </div>
      </div>
      <div className="h-screen bg-blue-600 bg-water flex-none flex flex-col items-center justify-center text-3xl overflow-hidden min-h-screen">
      <div className='flex'>
          <div className='w-1/2 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa architecto labore iste accusamus iusto eius error dignissimos amet asperiores magnam unde perspiciatis, cumque laudantium, omnis quia explicabo? Sit, expedita deleniti.
          </div>
          <div className='w-1/2 flex items-center justify-center'>
            <Image src="/nft-bear.png" alt="Sample 1" width="400" height="400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
