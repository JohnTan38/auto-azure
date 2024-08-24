'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-20 bg-testimonial mt-10 relative w-full h-[800px]'>
      {/* <div className='bg-testimonial h-screen w-screen left-[-3%]  ' /> */}
      
      <div className='px-14 text-center'>
        <Title title='reviews' subtitle='Our users' />
      </div>

      <div className='xs:px-4 md:px-40 h-[400px] w-full'>
        <Carousel pauseOnHover slideInterval={2000} className='py-4'>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="https://iili.io/dMh9r4s.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Abu</span> / Depot Executive</h1>
            <div className='flex gap-2'>
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Unlocking cost and time savings, automating repetitive business processes at scale.</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="https://iili.io/dMh9UCX.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Anna K.</span> / Finance Executive</h1>
            <div className='flex gap-2'>
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Data processing at scale, automating workflows significantly reduced human errors.</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="https://iili.io/dMh963G.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Linda Lim</span> / Transport Executive</h1>
            <div className='flex gap-2'>
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
              <Image src='https://iili.io/dMh9WEg.png' alt='dMh9WEg' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Complex and time-consuming tasks are now streamlined and automated, reducing manual efforts significantly.</p>
          </div>
        </Carousel>     
      </div>
    </section>
  )
}


export default Testimonials
