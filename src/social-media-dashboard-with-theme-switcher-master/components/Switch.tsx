import { SetStateAction } from "react"

export const Switch = ({toggle, setToggle}: {toggle:boolean, setToggle:React.Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div>
        <input onClick={() => setToggle(!toggle)} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
    </div>
  )
}
