import { EDUCATION } from '@/constants/index'
import React from 'react'
import { MotionH } from './MotionH'
import { MotionDiv } from './MotionDiv'


const Education = () => {
  return (
    <section className="py-8" id='education'>
      <MotionH
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='mb-4 text-center text-3xl font-bold'>Education</MotionH>
      {EDUCATION.map((edu, index)=> (
        <MotionDiv 
        initial={{opacity: 0, x: -20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: index * 0.2}}
        key={index} className='mb-6 p-10'>
          <h3 className='text-xl font-semibold'>{edu.degree}</h3>
          <p className='text-lg'>{edu.institution}</p>
          {/* <p className='text-sm text-stone-400'>{edu.duration}</p> */}
          <p className='mt-2'>{edu.description}</p>
        </MotionDiv>
      ))}
    </section>
  )
}

export default Education