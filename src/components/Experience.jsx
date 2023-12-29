import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules"

import 'react-vertical-timeline-component/style.min.css'
import { experiences } from "../constants/constants"
import { SectionWrapper } from "../hoc/sectionwrapper"
import { styles } from "../styles"
import { textVariant,fadeIn } from "../utils/motion"


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>What i have done so far</p>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>

        <motion.p variants={fadeIn("","",0.1,1)} className="w-[80%] min-w-[350px] mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, exercitationem? Officiis ex quas praesentium, minima odit sed nihil id, molestias asperiores officia, quos non similique provident harum obcaecati voluptate commodi.
        </motion.p>
      </motion.div>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp,ind)=><ExperienceCard key={ind} index={ind} {...exp} />)}
        </VerticalTimeline>

      </div>
    
    </>
  )
}

const ExperienceCard = ({index,title,company_name,icon,icon_bg,date,points}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background:'#1d1836',color:'#fff'}}
      contentArrowStyle={{borderRight:'7px solid #232631'}}
      position={index%2==0?"left":"right"}
      date={date}
      icon={
        <div className="flex justify-center items-center">
          <img src={icon} alt={company_name} className="w-full h-full object-contain"/>
        </div>
      }
      iconStyle={{background:icon_bg}}
    >
      <div>
        <h3 className="text-white font-bold text-[24px]">
        {title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold m-0">{company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          
          {points.map((e,inde)=><li className="text-white tracking-wider text-[14px] pl-1">{e}</li>)}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}


export default SectionWrapper(Experience,"work")