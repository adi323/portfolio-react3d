import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants/constants'
import {logo,menu,close} from '../assets'

const Navbar = () => {
  const [active, setactive] = useState("")
  const [toggle, settoggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/" 
          onClick={()=>{
            setactive("");
            window.scrollTo(0,0);
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} className="w-9 h-9 object-contain"/>
          <h1 className='text-white text-center font-bold text-[20px] cursor-pointer'>Aditya Nandi&nbsp;<span className='text-white text-[12px] font-medium'>| Student</span></h1>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 text-white'>
          {
            navLinks.map((link,ind)=>
              <li
                onClick={()=>
                  setactive(link.title)
                }
                key={link.id}
                className={`${active===link.title?"text-white":"text-secondary"} font-medium cursor-pointer hover:text-white text-[18px]`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          }
        </ul>
        <div
          className='sm:hidden flex flex-1 justify-end items-center'
        >
          <img src={toggle?close:menu} alt="menu" className='w-[20px] h-[20px] object-contain cursor-pointer' onClick={()=>settoggle(!toggle)}></img>
          <div
          className={`${!toggle?'w-[0px] hidden':'opacity-1 w-[200px]'} transition-all duration-800 ease-in-out p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[200px] z-10 rounded-xl`}>
            <ul className={`list-none text-white flex flex-col justify-between items-sttar`}>
              {
                navLinks.map((link,ind)=>
                  <li
                    onClick={()=>
                      {
                        setactive(link.title);
                        settoggle(!toggle);
                      }
                    }
                    key={link.id}
                    className={`${active===link.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[18px]`}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar