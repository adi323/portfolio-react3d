import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { services } from '../constants/constants'
import { SectionWrapper } from '../hoc/sectionwrapper'
import { styles } from '../styles'
import {textVariant,fadeIn} from '../utils/motion'


const About = () => {
  return (
    <>
    <motion.div>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>Overview</h2>

      <motion.p variants={fadeIn("","",0.1,1)} className="w-[80%] min-w-[350px] mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, exercitationem? Officiis ex quas praesentium, minima odit sed nihil id, molestias asperiores officia, quos non similique provident harum obcaecati voluptate commodi.
      </motion.p>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-10'>
      {
        services.map((service,index)=><ServiceCard key={index} index={index} {...service}/>)
      }

    </div>
    
    
    </>
  )
}


const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full text-secondary'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly flex-col items-center'
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        >
          <img src={icon} className="w-16 h-16 object-contain" alt={title}/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


export default SectionWrapper(About,"about")