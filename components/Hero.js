import { HERO } from '@/constants/index.js'
import Image from 'next/image'
import React from 'react'
import hero from '@/public/hero.jpg';
import { MotionDiv } from './MotionDiv'

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-wrap items-center justify-center' id='home'>
      <MotionDiv 
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className='w-full md:w-1/2'>
        <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>{HERO.name}</h2>
        <p className='p-2 text-3xl tracking-lighter lg:text-4xl'>{HERO.greet}</p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </MotionDiv>
      <MotionDiv 
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      className='w-full md:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
          <MotionDiv 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className='rounded-3xl'>
            <Image src={hero} priority={true} width={550} height={550} alt='Mahfujul Sagor' className='rounded-3xl'/>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}

export default Hero
