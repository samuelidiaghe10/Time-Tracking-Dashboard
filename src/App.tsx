import { useState } from "react"
import { Switch } from "./social-media-dashboard-with-theme-switcher-master/components/Switch"
import { Dashboard } from "./social-media-dashboard-with-theme-switcher-master/components/Dashboard"
import { Overview } from "./social-media-dashboard-with-theme-switcher-master/components/Overview"

function App() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className={` ${toggle ? 'bg-white' : ' bg-Very-Dark-Blue-(BG)'}
     min-h-screen flex flex-col gap-20`}>
      <div className="flex flex-col w-full ">
        <div className={`flex lg:flex-row flex-col items-start lg:items-center ${toggle ? 'bg-Very-Pale-Blue-(Top-BG-Pattern)' : ' bg-Very-Dark-Blue-(Top-BG-Pattern)'} justify-between px-5 py-5 pb-28 `}>
          <div className="flex flex-col border-b-2 lg:border-0 border-Desaturated-Blue-(Text) w-full pb-5 lg:pb-0 gap-3 lg:w-fit">
            <h2 className={`lg:text-4xl text-[28px] w-full
               ${toggle ? 'text-black' : 'text-white'} font-semibold`}>
              Social Media Dashboard
            </h2>

            <p className="text-lg text-Desaturated-Blue-(Text) font-medium">
              Total Followers: 23,004
            </p>
          </div>

          <div className="flex items-end gap-5">
            <span className={`text-2xl font-semibold ${toggle ? 'text-black' : 'text-white'}`}>
              Dark Mode
            </span>

            <Switch toggle={toggle} setToggle={setToggle}/>
          </div>
        </div>

        <Dashboard toggle={toggle}/>
      </div>

      <Overview toggle={toggle}/>
    </div>
  )
}

export default App
