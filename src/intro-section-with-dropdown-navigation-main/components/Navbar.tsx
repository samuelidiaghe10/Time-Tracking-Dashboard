import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close-menu.svg'
import up from '../images/icon-arrow-up.svg'
import down from '../images/icon-arrow-down.svg'
import todo from '../images/icon-todo.svg'
import calender from '../images/icon-calendar.svg'
import reminder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import {Drawer} from 'antd'
import { useState } from 'react';

export const Navbar = () => {

  const list = [ 'Careers', 'About']

  const [toggle, setToggle] = useState(false)

  const [feat, setFeat] = useState(false)

  const [comp, setComp] = useState(false)

  return (
    <nav className='flex  items-start gap-10'>
      <div className='flex justify-between lg:w-fit w-full items-center gap-3'>
        <div>
            <img className='' src={logo} alt="" />
        </div>

        <button className='lg:hidden inline' onClick={() => setToggle(true)}>
          <img src={menu} alt="" />
        </button>

      </div>

      <div className='hidden lg:flex items-start  justify-between w-full'>
            <ul className='flex text-Medium-Gray items-start gap-10'>
                <div className='flex flex-col items-end'>
                    <button onClick={() => setFeat(!feat)} 
                    className='flex hover:text-black font-medium items-center gap-3'>
                        <span>
                            Features
                        </span>

                        <div>
                            <img src={feat ? up: down} alt="" />
                        </div>
                    </button>

                    <div className={`${feat ? 'opacity-100' : 'opacity-0'} flex flex-col bg-white shadow-2xl rounded-lg`}>
                        <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                            <div><img src={todo} alt="" /></div>
                            <p>Todo List</p>
                        </div>

                        <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                            <div><img src={calender} alt="" /></div>
                            <p>Calender</p>
                        </div>

                        <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                            <div><img src={reminder} alt="" /></div>
                            <p>Reminders</p>
                        </div>

                        <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                            <div><img src={planning} alt="" /></div>
                            <p>Planning</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <button onClick={() => setComp(!comp)}
                     className='flex items-center gap-3'>
                        <span className=' hover:text-black font-medium'>
                            Company
                        </span>

                        <div>
                            <img src={comp ? up : down} alt="" />
                        </div>
                    </button>

                    <div className={`${comp ? ' opacity-100' : ' opacity-0'} bg-white shadow-2xl rounded-lg flex flex-col `}>
                        <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>History</p>
                        <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>Our Team</p>
                        <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>Blog</p>
                    </div>
                </div>
              {list.map((item, index) =>
                <li key={index}>
                  <a className=' hover:text-black font-medium' href="">{item}</a>
                </li>
              )}
            </ul>

            <div className='flex items-center gap-7'>
              <a href="">Login</a>

              <button className='border-2 border-Medium-Gray text-Medium-Gray py-2 px-5 rounded-xl hover:text-Almost-Black hover:border-Almost-Black text-lg'>
                Register
              </button>
            </div>
        </div>

        <Drawer 
        visible={toggle} 
        maskClosable={false} 
        onClose={() => {
          setToggle(true);
        }} width={'70%'}
        closable={false}>
            <div className='flex flex-col gap-5'>
                <button className='self-end' onClick={() => setToggle(false)}>
                    <img src={close} alt="" />
                </button>

                <div className='flex flex-col  justify-between'>
                    <ul className='flex flex-col text-Medium-Gray items-start gap-7'>
                        <div className='flex flex-col gap-3'>
                            <button onClick={() => setFeat(!feat)} 
                            className='flex hover:text-black font-medium items-center gap-3'>
                                <span>
                                    Features
                                </span>

                                <div>
                                    <img src={feat ? up: down} alt="" />
                                </div>
                            </button>

                            <div className={`${feat ? 'inline' : 'hidden'} flex flex-col bg-white  rounded-lg`}>
                                <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                                    <div><img src={todo} alt="" /></div>
                                    <p>Todo List</p>
                                </div>

                                <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                                    <div><img src={calender} alt="" /></div>
                                    <p>Calender</p>
                                </div>

                                <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                                    <div><img src={reminder} alt="" /></div>
                                    <p>Reminders</p>
                                </div>

                                <div className='flex hover:bg-slate-100 cursor-pointer py-2 px-5 items-center gap-3'>
                                    <div><img src={planning} alt="" /></div>
                                    <p>Planning</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <button onClick={() => setComp(!comp)}
                            className='flex items-center gap-3'>
                                <span className=' hover:text-black font-medium'>
                                    Company
                                </span>

                                <div>
                                    <img src={comp ? up : down} alt="" />
                                </div>
                            </button>

                            <div className={`${comp  ? 'inline' : 'hidden'} bg-white  rounded-lg flex flex-col `}>
                                <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>History</p>
                                <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>Our Team</p>
                                <p className='hover:bg-slate-100 cursor-pointer py-2 px-5 '>Blog</p>
                            </div>
                        </div>
                    {list.map((item, index) =>
                        <li key={index}>
                        <a className=' hover:text-black font-medium' href="">{item}</a>
                        </li>
                    )}
                    </ul>

                    <div className='flex flex-col justify-center items-center gap-7'>
                    <a href="">Login</a>

                    <button className='border-2 border-Medium-Gray text-Medium-Gray py-2 w-full rounded-xl hover:text-Almost-Black hover:border-Almost-Black text-lg'>
                        Register
                    </button>
                    </div>
                </div>

            </div>
        </Drawer>
    </nav>
  )
}
