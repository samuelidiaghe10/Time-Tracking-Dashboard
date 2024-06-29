import { useState } from "react"
import { Schedule } from "./time-tracking-dashboard/components/Schedule"
import { User } from "./time-tracking-dashboard/components/User"

function App() {
  const [date, setDate] = useState('weekly')
  return (
    <div className=" flex lg:flex-row flex-col  min-h-screen p-7  bg-Very-dark-blue gap-7 items-center justify-center ">
      <User setDate={setDate} date={date}/>
      <Schedule date={date}/>
    </div>
  )
}

export default App
