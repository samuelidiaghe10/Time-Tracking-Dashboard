import { useState } from 'react'
import data from '../data.json'
import ellipse from '../images/icon-ellipsis.svg'

export const Schedule = ({date} : {date:string}) => {

    const [open, setOpen] = useState<number[]>([])

    const toggle = (index:number) => {
        if(open.includes(index)) {
            setOpen(open.filter(i => i !== index))
        }else{
            setOpen([...open, index])
        }
    }

  return (
    <div>
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {data.map((data, index) => 
                <li key={index} className={`
                    ${open.includes(index) ? 'md:h-[14.2rem]' : 'h-[10rem]'}
                lg:w-[16rem] md:w-[24rem] w-[21rem] rounded-2xl  bg-Dark-blue `}>
                    <div id={data.id} className='h-[3rem] rounded-t-2xl flex'>
                        {''}
                    </div>

                    <div className={`bg-Dark-blue flex flex-col gap-7 -translate-y-3 p-5 rounded-2xl
                        ${open.includes(index) ? 'h-[10rem]' : 'h-[5rem]'} `}>
                        <div className={`flex justify-between`}>
                            <p className='text-lg  text-white'>
                                {data.title}
                            </p>

                            <button onClick={() => toggle(index)}>
                                <img src={ellipse} alt="" />
                            </button>
                        </div>

                        {open.includes(index) && <div className='flex justify-between items-end lg:flex-col gap-3 lg:items-start'>
                            <h1 className='md:text-6xl text-4xl text-white font-light'>
                                
                                    {date === "daily" ? data.timeframes.daily.current + "hrs" : ''}
                                    {date === "weekly" ? data.timeframes.weekly.current + "hrs" : ''}
                                    {date === "monthly" ? data.timeframes.monthly.current + "hrs" : ''}

                                
                            </h1>


                            <div className='flex md:text-md tex-sm  text-Pale-Blue gap-2'>
                                <p>Last Week - </p>

                                <span>
                                {date === "daily" ? data.timeframes.daily.previous + "hrs" : ''}
                                    {date === "weekly" ? data.timeframes.weekly.previous + "hrs" : ''}
                                    {date === "monthly" ? data.timeframes.monthly.previous + "hrs" : ''}
                                </span>

                            </div>
                        </div>}

                    </div>
                    
                </li>
            )}
        </ul>
    </div>
  )
}
