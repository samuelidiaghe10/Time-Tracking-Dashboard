import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'


export const Footer = () => {
    const links = ['About', 'Services', 'Projects']

  return (
    <footer className=' bg-cyan2 flex flex-col items-center gap-20 py-10'>
        <div className='flex flex-col items-center gap-7'>
            <div>
                <img className='logo' src={logo} alt="" />
            </div>

            <ul className='flex gap-12'>
                {links.map((link) =>
                    <li>
                        <a className='text-Dark-desaturated-cyan-(graphic-design-text) font-semibold duration-300 hover:text-white' href="">{link}</a>
                    </li>
                )}
            </ul>

        </div>

        <div className='flex duration-500 items-center gap-10'>
            <div><img className='icon' src={facebook} alt="" /></div>
            <div><img className='icon' src={instagram} alt="" /></div>
            <div><img className='icon' src={twitter} alt="" /></div>
            <div><img className='icon' src={pinterest} alt="" /></div>
        </div>
    </footer>
  )
}
