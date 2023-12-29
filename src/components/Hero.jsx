import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-40 sm:h-80 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroSubText} text-white font-bold`}>
            Hi, I'm <span className={`text-[#915eff] my-5 block font-bold text-4xl ${styles.heroHeadText}`}>Aditya Nandi</span>
          </h1>
          <p className={`${styles.sectionSubText} mt-2 text-white-100 font-semibold`}>
            i'm a <span className={"text-[#915eff]"}>FullStack MERN Developer</span> and <span className='text-[#915eff]'>Flutter Developer</span>
            <br/>I love working magic in codebase and add spice to projects
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-0 w-full flex items-center justify-center'>
        <a href='#about' >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={
              {
                duration:1.4,
                repeat:Infinity,
                repeatType: 'loop'
              }
            }
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero