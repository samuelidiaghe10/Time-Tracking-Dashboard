import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

type dashboardType = {
  social: string,
  userName: string,
  audience: string,
  engagement: string,
  metrics: number
  enagementMetric: boolean,
  style: string
}

export const Dashboard = ({toggle} : {toggle:boolean}) => {
  
  const dashboard: dashboardType[] = [
    {
      social: facebook,
      userName: '@nathanf',
      audience: 'followers',
      engagement: '1987',
      metrics: 12,
      enagementMetric: true,
      style: ' border-Facebook  border-t-4'
    },

    {
      social: twitter,
      userName: '@nathanf',
      audience: 'followers',
      engagement: '1044',
      metrics: 99,
      enagementMetric: true,
      style: 'border-Twitter  border-t-4'
    },

    {
      social: instagram,
      userName: '@realnathanf',
      audience: 'followers',
      engagement: '11k',
      metrics: 1099,
      enagementMetric: true,
      style: 'gradient-border'
    },

    {
      social: youtube,
      userName: 'Nathan F.',
      audience: 'subscribers',
      engagement: '1987',
      metrics: 144,
      enagementMetric: false,
      style: 'border-YouTube  border-t-4'
    }

  ]

  return (
    <div className='-translate-y-16 px-5'>
        <ul className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
          {dashboard.map((dash, index) =>
            <li key={index} id={dash.social}
             className={`${toggle ? 'bg-Light-Grayish-Blue-(Card-BG) hover:bg-not-white' 
             : 'bg-Dark-Desaturated-Blue-(Card-BG) hover:bg-not-dark'} cursor-pointer duration-300 flex flex-col items-center ${dash.style}  gap-5 py-5 rounded-xl`}>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={dash.social} alt="" />
                </div>

                <p className={`font-semibold text-Desaturated-Blue-(Text)`}>{dash.userName}</p>
              </div>

              <div className='flex flex-col gap-4 items-center'>
                <h3 className={`text-6xl font-semibold
                   ${toggle ? 'text-black' : 'text-white'}`}>
                    {dash.engagement}
                </h3>

                <p className={`text-Dark-Grayish-Blue-(Text) text-lg uppercase tracking-widest`}>
                  {dash.audience}
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <div>
                  <img src={dash.enagementMetric ? up : down} alt="" />
                </div>
                
                <span className={`${dash.enagementMetric ? ' text-Lime-Green' : ' text-Bright-Red'} font-semibold`}>
                  {dash.metrics} Today
                </span>
              </div>
            </li>
          )}
        </ul>
    </div>
  )
}
