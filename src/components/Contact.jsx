import { motion } from 'framer-motion'
import React,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { fadeIn, slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc/sectionwrapper'
import {EarthCanvas} from './canvas'

//service_176pjh8
//template_k0qvso8
//nTKN_9Xz5tPG0WNlU

//B0C0E51004C67EECB3B476134B8E8BB1F4E1
//smtp.elasticemail.com
//2525
//adityanandi550@gmail.com


const Contact = () => {

  const formRef=useRef(null)
  const [form, setform] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setloading] = useState(false)


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setform({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true);
    emailjs.send('service_176pjh8','template_k0qvso8',{
      from_name:form.name,
      to_name:'Rajib',
      from_email:form.email,
      to_email:'adityanandi550@gmail.com',
      message:form.message,
    },'nTKN_9Xz5tPG0WNlU').then(()=>{
      setloading(false);
      alert('Thank you. I will get back to you as soon as possible.')
      setform({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setloading(false)
      alert('Something went wrong')
      console.log(error)
    })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>


        <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
            type={"text"}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none focus:ring-2'
            />
          </label>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
            <input
            type={"email"}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email..."
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none focus:ring-2'
            />
          </label>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Subject</span>
            <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none focus:ring-2'
            />
          </label>
          <button 
          type='submit'
          className='bg-purple-800 rounded-xl py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >Send</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("left","tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")