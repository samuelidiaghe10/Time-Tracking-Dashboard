import standout from '../images/desktop/image-stand-out.jpg'
import graphic from '../images/desktop/image-graphic-design.jpg'
import transform from '../images/desktop/image-transform.jpg'
import photography from '../images/desktop/image-photography.jpg'

export const Main = () => {
  return (
    <main className=''>
        <div className='flex flex-col'>
            <div className='flex lg:flex-row flex-col-reverse'>
                <div className='flex flex-col items-center  lg:p-[7.1rem] lg:w-fit lg:items-start gap-10 p-10'>
                    <h3 className='text-4xl lg:text-start text-center text-Very-dark-desaturated-blue fraunces font-extrabold lg:w-10/12'>
                        Transform your brand
                    </h3>

                    <p className='lg:text-lg  lg:text-start text-center  text-Dark-grayish-blue font-medium md:w-[28rem]'>
                        We are full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for you.
                    </p>

                    <div>
                        <a href="" className=' duration-500 fraunces font-extrabold underline decoration-yellow-100 hover:decoration-Yellow underline-offset-8 decoration-4'>LEARN MORE</a>
                    </div>
                </div>

                <div>
                    <img className='w-full' src={transform} alt="" />
                </div>

            </div>

            <div className="flex lg:flex-row flex-col">
                <div>
                    <img className='w-full' src={standout} alt="" />
                </div>

                <div className='flex flex-col p-10 lg:p-[5rem] lg:w-fit items-center lg:items-start gap-10'>
                    <h3 className='text-4xl text-Very-dark-desaturated-blue fraunces font-extrabold text-center lg:text-start lg:w-9/12'>
                        Stand out to the right audience
                    </h3>

                    <p className='lg:text-lg text-center lg:text-start text-Dark-grayish-blue font-medium md:w-[28rem]'>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we'll
                        build and extend your brand in digital places.
                     </p>

                    <div>
                        <a href="" className='fraunces font-extrabold underline decoration-red-200 duration-500
                         hover:decoration-Soft-red underline-offset-8 decoration-4'>LEARN MORE</a>
                    </div>
                </div>
            </div>

            <div className='flex  lg:flex-row flex-col'>
                <div className="flex lg:w-fit justify-center items-end">
                    <div className='relative'>
                        <img className='w-[52rem]' src={graphic} alt="" />
                    </div>

                    <div className='flex flex-col text-Dark-desaturated-cyan-(graphic-design-text)   absolute
                     lg:mb-10 mb-5 mx-auto items-center gap-4 lg:gap-10 w-[23rem]'>
                        <h2 className="text-3xl fraunces font-bold">
                            Graphic Design
                        </h2>

                        <p className=' font-medium text-center'>
                            Great design makes you memoriable. We deliver
                            artwork that underscores your brand message
                            and capture potential client's attention.
                        </p>

                    </div>
                </div>

                <div className="flex   text-Dark-blue-(photography-text) justify-center items-end">
                    <div className='relative'>
                        <img className='w-[52rem]' src={photography} alt="" />
                    </div>

                    <div className='flex flex-col   absolute mb-5 lg:mb-10 mx-auto items-center gap-4 lg:gap-10
                    w-[23rem]'>
                        <h2 className="text-3xl fraunces font-bold">
                            Photography
                        </h2>

                        <p className=' font-medium text-center'>
                            Increases your credibility by getting the most
                            stunning, high-quality photos that improve your business
                            image.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
