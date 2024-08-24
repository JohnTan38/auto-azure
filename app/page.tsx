"use client";
import { useEffect, useRef } from 'react';
import Destination from '@/components/Destination'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services'
import Sponsor from '@/components/Sponsor'
import Testimonials from '@/components/Testimonials'
import TravelPoint from '@/components/TravelPoint'

export default function Home() {
  const destinationRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#destination' && destinationRef.current) {
        const offset = 100; // Adjust this value as needed
        const elementPosition = destinationRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }; 

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Hero />
      {/*<Sponsor />*/}
      {/*<Services />*/}
      <div id="destination" ref={destinationRef}>
        <Destination />
      </div>
      {/*<Destination />*/}
      {/*<TravelPoint />*/}
      {/*<Features />*/}
      <Testimonials />
      <Newsletter />
    </>
  
  )
}
