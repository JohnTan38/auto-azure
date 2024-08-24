"use client";
import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open("https://emailjs-omega.vercel.app/", "_blank");
  };
  
    {/*try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Email not sent. Try again');
      }
  
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Email not sent. Try again.');
    }}*/}
  
  return (
    <section className='relative'>
      <Image className='xs:w-[100px] lg:w-[150px] absolute xs:left-[2%] lg:left-[4%] top-[-8%]' src='https://iili.io/dVWMho7.png' alt='dVWMho7' width={150} height={150} />
      
      <div className='bg-[#fff9e8] xs:mx-8 lg:mx-24 xs:px-8 lg:padding-container xs:py-16 lg:py-28 flex flex-col xs:gap-12 lg:gap-20'>
        <div className='flexCenter flex-col gap-4'>
          <h3 className='text_pink xs:text-lg lg:text-2xl font-bold text-center newsletter'>contact us</h3>
          <h1 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-center'>Let's automate</h1>
        </div>

        <form onSubmit={handleSubscribe} className='flexCenter xs:gap-4 lg:gap-8 w-full'>
          <input className='xs:py-4 lg:py-6 px-8 rounded-2xl w-full' type='text' placeholder='Your Email' 
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button className='rounded-2xl bg-[#5D50C6] xs:text-sm lg:text-lg xs:px-4 lg:px-12 xs:py-4 lg:py-6 text-white'
          type='submit'>Submit</button>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </form> 
      </div>
     
    </section>
  )
}

export default Newsletter
