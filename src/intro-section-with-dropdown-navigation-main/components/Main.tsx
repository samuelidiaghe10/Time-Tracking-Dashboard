import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

import heroDesktop from '../images/image-hero-desktop.png'
import heroMobile from '../images/image-hero-mobile.png'

export const Main = () => {
  return (
    <main className='flex lg:flex-row flex-col-reverse justify-between lg:px-16 gap-10 lg:gap-7 items-end '>
        <section className='flex flex-col lg:items-start items-center gap-10 lg:gap-20'>
            <div className='flex flex-col items-center lg:items-start gap-7 lg:gap-10'>
                <h1 className="lg:text-7xl md:text-5xl text-4xl lg:w-10/12 font-bold">
                    Make remote work
                </h1>

                <p className="lg:text-lg md:text-xl text-md w-11/12  md:w-10/12 lg:text-start text-center  font-medium text-Medium-Gray">
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and
                    watch productivity soar.
                </p>

                <button className=" rounded-xl bg-black text-white py-3 px-7 font-semibold lg:text-lg">
                    Learn more
                </button>
            </div>

            <div className='flex items-center gap-10'>
                <div><img src={databiz} alt="" /></div>
                <div><img src={audiophile} alt="" /></div>
                <div><img src={meet} alt="" /></div>
                <div><img src={maker} alt="" /></div>
            </div>
        </section>

        <section>
            <img className='lg:inline hidden' src={heroDesktop} alt="" />
            <img className='lg:hidden inline' src={heroMobile} alt="" />
        </section>

    </main>
  )
}
