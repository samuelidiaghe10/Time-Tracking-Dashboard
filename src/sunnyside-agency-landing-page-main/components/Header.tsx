import logo from '../images/logo.svg'
import arrow from '../images/icon-arrow-down.svg'
import menu from '../images/icon-hamburger.svg'
import { useState } from 'react'

export const Header = () => {

    const lists = ['About', 'Services', 'Projects']

    const [toggle, setToggle] = useState(false)

  return (
    <header className=' bg-headMobile md:min-h-screen  lg:bg-head text-white lg:min-h-screen bg-cover p-5 lg:px-7 flex flex-col lg:gap-16'>
            <div className=' flex lg:flex-row flex-col gap-10 lg:gap-0 lg:items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    
                    <button className='lg:hidden' onClick={() => setToggle(!toggle)}>
                        <img src={menu} alt="" />
                    </button>
                </div>

                <div className={`flex flex-col z-10 lg:opacity-100 ${toggle ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`w-[2rem] rotate-[135deg]
                    border-l-[2rem] border-l-transparent ${toggle ? 'opacity-100' : 'opacity-0'}
  border-b-[2rem] border-b-white self-end translate-x-[20.4px] translate-y-2
  border-r-[2rem] border-r-transparent`}></div>

                    <ul className={`flex lg:flex-row flex-col ${toggle ? 'bg-white ' : ''} items-center gap-7 py-7 lg:gap-10`}>
                        {lists.map((list, index) => 
                            <li className='hover:underline cursor-pointer font-medium underline-offset-4 lg:text-white text-Dark-grayish-blue  decoration-2' key={index}>
                                {list}
                            </li>
                        )}

                        <button className=' lg:bg-white hover:text-white duration-500 px-5 lg:hover:bg-white/30 bg-Yellow fraunces text-Very-dark-desaturated-blue p-3 rounded-full font-semibold'>
                            CONTACT
                        </button>
                    </ul>

                </div>
            </div>

            <div className='flex flex-col lg:translate-y-0 -translate-y-40 items-center lg:gap-20 md:gap-44 gap-20'>
                <h2 className='lg:text-7xl md:text-8xl text-5xl text-center fraunces font-bold tracking-widest'>
                    WE ARE CREATIVES
                </h2>

                <div>
                    <img src={arrow} alt="" />
                </div>
            </div>
    </header>
  )
}
