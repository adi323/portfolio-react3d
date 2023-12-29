import React from 'react'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc/sectionwrapper'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants/constants'


const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>
      {
        technologies.map((tech,ind)=>(
          <div className='w-28 h-28 flex flex-col items-center' key={tech.name}>
            <BallCanvas key={ind} icon={tech.icon} />
            <h1>{tech.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,"")