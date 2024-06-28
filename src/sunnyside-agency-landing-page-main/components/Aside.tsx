import emily from '../images/image-emily.jpg'
import jennie from '../images/image-jennie.jpg'
import thomas from '../images/image-thomas.jpg'

import cone from '../images/desktop/image-gallery-cone.jpg'
import milkBottles from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import sugarCubes from '../images/desktop/image-gallery-sugarcubes.jpg'

export const Aside = () => {
  return (
    <aside>
        <div className='lg::p-24 md:p-40 p-10 flex flex-col items-center gap-20'>
            <h2 className='fraunces text-2xl font-semibold text-Grayish-blue tracking-widest'>
                CLIENT TESTIMONIALS
            </h2>

            <div className='flex lg:flex-row flex-col gap-20'>
                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <img className='rounded-full w-[80px]' src={emily} alt="" />
                    </div>

                    <p className='text-lg text-Very-dark-grayish-blue  text-center font-medium'>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>

                    <div className='flex flex-col  text-Very-dark-desaturated-blue items-center'>
                        <h3 className='text-2xl font-bold fraunces'>
                            Emily R.
                        </h3>

                        <p className='text-md text-Grayish-blue'>
                            Marketing Director
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <img className='rounded-full w-[80px]' src={thomas} alt="" />
                    </div>

                    <p className='text-lg text-center text-Very-dark-grayish-blue font-medium'>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                    </p>

                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl text-Very-dark-desaturated-blue font-bold fraunces'>
                            Thomas S.
                        </h3>

                        <p className='text-md text-Grayish-blue'>
                            Chief Operating Officer
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <img className='rounded-full w-[80px]' src={jennie} alt="" />
                    </div>

                    <p className='text-lg text-Very-dark-grayish-blue text-center font-medium'>
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>

                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl text-Very-dark-desaturated-blue font-bold fraunces'>
                            Jennie F.
                        </h3>

                        <p className='text-md text-Grayish-blue'>
                            Business Owner
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-2'>
            <div><img src={milkBottles} alt="" /></div>
            <div><img src={orange} alt="" /></div>
            <div><img src={cone} alt="" /></div>
            <div><img src={sugarCubes} alt="" /></div>
        </div>
    </aside>
  )
}
