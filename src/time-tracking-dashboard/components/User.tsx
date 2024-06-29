import { SetStateAction } from 'react'
import profile from '../images/image-jeremy.png'

export const User = ({setDate, date} : {date:string, setDate:React.Dispatch<SetStateAction<string>>}) => {
  return (
    <div className='bg-Dark-blue flex flex-col rounded-2xl  lg:w-[16rem]'>
        <div className=' bg-Blue flex flex-row items-center lg:items-start lg:flex-col rounded-2xl lg:pt-7 lg:pb-16 p-7 lg:ps-7 gap-4'>
            <div><img className='lg:w-[60px] w-[100px] border-2 border-white rounded-full' src={profile} alt="" /></div>
            <div className='flex flex-col items-start gap-3'>
                <p className=' text-Pale-Blue'>Report for</p>
                <h3 className='lg:text-5xl text-3xl text-white font-light lg:w-6/12'>
                    Jeremy
                    Robson
                </h3>
            </div>
        </div>

        <div className='flex py-10 text-xl lg:text-md px-10 lg:ps-7 items-center justify-between gap-5 lg:flex-col lg:items-start'>
            <button onClick={() => setDate('daily')}
             className={`text-Desaturated-blue ${date === 'daily' ? 'text-white' : ''} hover:text-white duration-500`}>
                Daily
            </button>

            <button  onClick={() => setDate('weekly')}
            className={`text-Desaturated-blue ${date === 'weekly' ? 'text-white' : ''}  hover:text-white duration-500`}>
                Weekly
            </button>

            <button  onClick={() => setDate('monthly')}
            className={`text-Desaturated-blue ${date === 'monthly' ? 'text-white' : ''}  hover:text-white duration-500`}>
                Monthly
            </button>
        </div>
    </div>
  )
}
