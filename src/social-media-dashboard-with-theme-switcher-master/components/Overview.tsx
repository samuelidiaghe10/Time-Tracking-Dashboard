import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

type overviewTypes = {
    socials: string,
    engagement: string,
    performanceMetrics: string
    metric:number
    engagementMetric:boolean
}

export const Overview = ({toggle} : {toggle:boolean}) => {
    const overview : overviewTypes[] = [
        {
            socials: facebook,
            engagement: 'Page Views',
            performanceMetrics: '87',
            metric: 3,
            engagementMetric: true
        },

        {
            socials: facebook,
            engagement: 'Likes',
            performanceMetrics: '52',
            metric: 2,
            engagementMetric: false
        },

        {
            socials: instagram,
            engagement: 'Likes',
            performanceMetrics: '5462',
            metric: 2257,
            engagementMetric: true
        },

        {
            socials: instagram,
            engagement: 'Profile Views',
            performanceMetrics: '52k',
            metric: 1375,
            engagementMetric: true
        },

        {
            socials: twitter,
            engagement: 'Retweets',
            performanceMetrics: '117',
            metric: 303,
            engagementMetric: true
        },

        {
            socials: twitter,
            engagement: 'Likes',
            performanceMetrics: '507',
            metric: 553,
            engagementMetric: true
        },

        {
            socials: youtube,
            engagement: 'Likes',
            performanceMetrics: '107',
            metric: 19,
            engagementMetric: false
        },

        {
            socials: youtube,
            engagement: 'Total Views',
            performanceMetrics: '1407',
            metric: 12,
            engagementMetric: false
        },

        

    ]

  return (
    <div className='px-5 pb-5 flex flex-col gap-10'>
        <div>
            <p className={`${toggle ? ' text-Desaturated-Blue-(Text)' : 'text-white'} text-3xl font-semibold`}>Overview - Today</p>
        </div>

         <ul className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
          {overview.map((view, index) =>
            <li key={index}
             className={`${toggle ? 'bg-Light-Grayish-Blue-(Card-BG)  hover:bg-not-white' : 'bg-Dark-Desaturated-Blue-(Card-BG)  hover:bg-not-dark'} cursor-pointer duration-300 flex flex-col items-center gap-5 p-5 rounded-xl`}>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-xl font-medium text-Desaturated-Blue-(Text)'>{view.engagement}</p>

                    <div>
                        <img src={view.socials} alt="" />
                    </div>
                </div>
              
                <div className='flex w-full justify-between items-end'>
                    <h3 className={`text-4xl font-semibold ${toggle ? 'text-black' : 'text-white'}`}>
                        {view.performanceMetrics}
                    </h3>

                    <div className='flex items-center gap-2'>
                        <div>
                        <img src={view.engagementMetric ? up : down} alt="" />
                        </div>
                        
                        <span className={`${view.engagementMetric ? ' text-Lime-Green' : ' text-Bright-Red'} font-semibold`}>
                        {view.metric} Today
                        </span>
                    </div>
                </div>
            </li>
          )}
        </ul>
    </div>
  )
}
